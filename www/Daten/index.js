var impressumArea;

window.addEventListener('load', function() {
  setListeners();
});


function setListeners() {
	impressumArea = document.getElementById('impressumArea');
	impressumArea.addEventListener("click", function() {
  		infoFenster('info/impressum.html');
	});

	anleitungsArea = document.getElementById('bedienungsanleitung');
	anleitungsArea.addEventListener("click", function() {
  		infoFenster('info/anleitung.html');
	});
}

