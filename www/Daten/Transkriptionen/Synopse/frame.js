// the child frames
var selectFrame;
var synopseFrame;
// params for the page/transcription to load
var currentStrophe;

// query Params for the image to load and zoom
var man;
var img;

window.addEventListener('load', function() {
	selectFrame = document.getElementById("selectIframe");
	synopseFrame = document.getElementById("synopseIframe");
});


  // Listen for messages from the select frame
window.addEventListener("message", function(event) {
  	if (event.origin === "https://parzival.unibe.ch") {
    	// do sth with strophe
    	//console.log("Received message from select frame:", event.data);
        if (event.data.source === 'stropheSelect' ) {
        	setStrophe(event.data.data);
        }	
    }
});
               
// set the passed strophe and send it to the synopse html
function setStrophe(strophe) {
	if (strophe === currentStrophe) { return; } // guard
	currentStrophe=strophe;
	const stropheHtml=strophe+'.html';	
	const message = {
    	source: 'mainFrame',
    	data: stropheHtml
    };
	// send to synopse
  	synopseFrame.contentWindow.postMessage(message, "https://parzival.unibe.ch");
  }