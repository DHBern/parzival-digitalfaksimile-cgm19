var imageLeft;
var imageRight;


window.addEventListener('load', function() {
	imageLeft = document.getElementById("imageLeft");
	imageRight = document.getElementById("imageRight");
	// load frame2fram communication
	loadMessageListener();
});

function loadMessageListener() {
	// Listen for messages from the frames (onclick on link to change images)
	window.addEventListener("message", function(event) {
  		if (event.origin === "https://parzival.unibe.ch") {
        	if (event.data.source === 'leftTransFrame' ) {
            	const imageFrameDoc = imageLeft.contentDocument;
				const imgElement = imageFrameDoc.getElementById("imgContainer");
        		imgElement.src = event.data.data;
        	}
    	if (event.data.source === 'rightTransFrame' ) {
        	if (!imageRight){return;}
        		// imageRight.src = event.data.data;
				// Get the img element from the document object
        		const imageFrameDoc = imageRight.contentDocument;
				const imgElement = imageFrameDoc.getElementById("imgContainer");
        		imgElement.src = event.data.data;
        	}	
    	}
	});
}


