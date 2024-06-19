var availableImageData = [];

window.addEventListener('load', function() {
	
const imageLinks = document.querySelectorAll('.imageLink');
	imageLinks.forEach(function(imageLink) {
    	imageLink.style.cursor = "pointer";
    	availableImageData.push(imageLink.getAttribute('data').split(','));
    });

    // sending the available images back to parent (synopse.js)
    const message = {
    	source: 'transcription_onLoad',
        data: availableImageData
   	};
	console.log('availableImageData');
   	// send to parent, e.g. to the synopse
   	window.parent.postMessage(message, 'https://parzival.unibe.ch');

document.addEventListener("click", function(event) {
   const imageLink = event.target.closest('.imageLink');
   if (imageLink) {
       	const imgData = imageLink.getAttribute("data").split(',');
   		const message = {
           	source: 'transcription',
           	data: imgData,
        	availableImageData: availableImageData
   	    };
   		// send to parent, e.g. to the synopse
   		window.parent.postMessage(message, 'https://parzival.unibe.ch');
  }
});  

});

