var currentStrophe;
var stropheSelect;

window.addEventListener('load', function() {
  // onload get select
  stropheSelect = document.getElementById("stropheSelect");
  // add eventlistener on selection change and send back the strophe to the parent (frame.html)
  stropheSelect.addEventListener("change", function(event) {
   		currentStrophe = event.target.value.split('_')[0];
		submit();

  });

  if (!currentStrophe) {
  	currentStrophe = 'str1'; // setting default on startup
  }

const backButton = document.getElementById('backButton');

backButton.addEventListener('click', function(event) {
  event.preventDefault(); // prevent the form from submitting
  navigateBy(-1);
});

const nextButton = document.getElementById('nextButton');

nextButton.addEventListener('click', function(event) {
  event.preventDefault(); // prevent the form from submitting
  navigateBy(1);
});

});


// navigates by a given mod
function navigateBy(mod) {
	targetStropheNumber = parseInt(currentStrophe.split('r')[1])+mod;
	if (targetStropheNumber > 0 && targetStropheNumber < 176) {
    	currentStrophe = 'str'+ parseInt(targetStropheNumber, 10).toString();
    	submit();
       	resetSelectBoxAccordingToVerse(targetStropheNumber);
    } else {
    	console.log('nothing to navigate');
    }
}


function submit() {
	const message = {
  		data: currentStrophe,
  		source: 'stropheSelect'
    };
    window.parent.postMessage(message, 'https://parzival.unibe.ch');
}


// resets the selected option of the select element according to the current verse
function resetSelectBoxAccordingToVerse(targetStropheNumber) {
	stropheSelect = document.getElementById("stropheSelect");
	if (targetStropheNumber % 5 !== 0) {
    	// if there is no entry for in the select for the current verse
    	// change selection to default option "Strophe wählen"
   		stropheSelect.selectedIndex = 0;
    } else {
    	// set the seletion to the current verse if there is an option for that verse available in the select
    	for (var i = 1; i < stropheSelect.options.length; i++) {
        	if (stropheSelect.options[i].value.split('_')[0] === currentStrophe) {
            	// there is an option for the verse, so we set it
            	stropheSelect.selectedIndex = i;
            	break;
        	}
    	}
    }
    
}
