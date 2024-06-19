var transcription;
var imageFrame;
var selectedManuscript;

window.addEventListener('load', function() {
	transcription = document.getElementById("transcription");
	imageFrame = document.getElementById("image");
	// set the listeners for communication inbetween the components
	setMessageListeners();
});

function setMessageListeners() {
  // Listen for messages
	window.addEventListener("message", function(event) {
    	if (event.origin != "https://parzival.unibe.ch") { return } // guard
        
    	// messages from the parent (frame.html/frame.js)
    	if (event.data.source === 'mainFrame' ) {
           	transcription.src = '/cgm19/Daten/Transkriptionen/Synopse/transcriptions/' + event.data.data;
        }
        // data coming from child (transcription js)
        if (event.data.source === 'transcription' ) {
    		const i = event.data.data;
           	setFaksimileImg(i[0],i[1],i[2],i[3]);
        	selectedManuscript = i[0];
        }
    
    	if (event.data.source === 'transcription_onLoad') {
        	// if the transcription loads and there is already a manuscript selected,
        	// we simply display the corresponding image from that manuscript
        	if (selectedManuscript) {
            	console.log('here');
            	availableImages = event.data.data;
            	let imageFound=false;
            	for (let i = 0; i < availableImages.length; i++) {
    				const image = availableImages[i];
    				if (image && image[0] === selectedManuscript) {
        				console.log(image);
                    	imageFound=true;
        				setFaksimileImg(image[0], image[1], image[2], image[3]);
       				 	break;
    					}
					}
            	if (!imageFound) { // if no image found to display
                	// just display the first if exists
                	if (availableImages.length && availableImages[0]) {
                    	setFaksimileImg(availableImages[0][0], availableImages[0][1], availableImages[0][2], availableImages[0][3]);
                    }
                }
            }
        }
	});
}

// set the image and the focus on the image according to xy data
function setFaksimileImg(hs, seite, xPos, yPos) {
	var zusatz = getZusatz(seite);
	// set the new image
	//imageFrame.src = "Bilder/" + hs + zusatz + seite + ".jpg";
	// Get the document object of the iframe
	const imageFrameDoc = imageFrame.contentDocument || imageFrame.contentWindow.document;

	// Get the img element from the document object
	const imgElement = imageFrameDoc.getElementById("imgContainer");

	// Set the src attribute of the img element
	imgElement.src =  "Bilder/" + hs + zusatz + seite + ".jpg";
	//console.log('setImg');
	// wait for the iframe to load before trying to access its contentWindow
    imgElement.onload = function() {
		var frameWindow = imageFrame.contentWindow;
		// scroll the window inside the frame to the given x and y positions
		frameWindow.scrollTo(xPos, yPos);
		frameWindow.scrollX = xPos;
        };
}

// assembles the needed zusatz
function getZusatz(seite) {
	var zusatz ="";
	var x = parseInt(seite);
	if (x < 10) {zusatz = "00";}
	if (x >= 10 && x < 100) {zusatz = "0";}
	if (x > 100) {zusatz = "";}
	return zusatz;
}




