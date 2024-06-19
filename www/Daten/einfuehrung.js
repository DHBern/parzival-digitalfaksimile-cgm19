var fenster;
var timeout;
var xPosition;
var yPosition;
var bild;

window.addEventListener('load', function() {
  setRegisterListeners();
  setBildLinkListeners();
  setBildLinkGast();
  setBildLinkFull();
  // BilderVorladen('../GBilder/G150/G0049r.jpg','../GBilder/G150/G0049v.jpg','../GBilder/G150/G0050r.jpg','../GBilder/G150/G0050v.jpg','../GBilder/Ambrosiana/B32inf-136r.jpg');
});


function setRegisterListeners() {
	const registerLinks = document.querySelectorAll('.registerLink');
	registerLinks.forEach(function(registerLink) {
    	registerLink.style.cursor = "pointer";
    });
	
    document.addEventListener("click", function(event) {
        const registerLink = event.target.closest('.registerLink');
        if (registerLink) {
        	const data = registerLink.getAttribute("data").split(',');
        	openImage(data[0],parseInt(data[1],10), parseInt(data[2], 10), 'register');
           }
    });
}

function setBildLinkListeners() {
		const bildLinks = document.querySelectorAll('.bildLink');
	bildLinks.forEach(function(bildLink) {
    	bildLink.style.cursor = "pointer";
    });
	
    document.addEventListener("click", function(event) {
        const bildLink = event.target.closest('.bildLink');
        if (bildLink) {
        	const data = bildLink.getAttribute("data").split(',');
        	openImage(data[0],parseInt(data[1],10), parseInt(data[2], 10), 'bildLink');
           }
    });
}

function setBildLinkGast() {
	const bildLinkGasts = document.querySelectorAll('.bildLinkGast');
	bildLinkGasts.forEach(function(bildLink) {
    	bildLink.style.cursor = "pointer";
    });
	
    document.addEventListener("click", function(event) {
        const bildLink = event.target.closest('.bildLinkGast');
        if (bildLink) {
        	const data = bildLink.getAttribute("data").split(',');
        	openImage(data[0],parseInt(data[1],10), parseInt(data[2], 10), 'bildLinkGast');
           }
    });
}

function setBildLinkFull() {
	const bildLinkFull = document.querySelectorAll('.bildLinkFull');
	bildLinkFull.forEach(function(bildLink) {
    	bildLink.style.cursor = "pointer";
    });
	
    document.addEventListener("click", function(event) {
        const bildLinkFull = event.target.closest('.bildLinkFull');
        if (bildLinkFull) {
        	const data = bildLinkFull.getAttribute("data").split(',');
        	openImage(data[0],parseInt(data[1],10), parseInt(data[2], 10), 'bildLinkFull');
           }
    });
}


function openImage(bild, xPos, yPos, mode) {
    const currentWindowscrollY = window.scrollY; // remember the current position in the current window
    const url = "openImage.html" + "?bild=" + encodeURIComponent(bild) + "&xPos=" + encodeURIComponent(xPos) + "&yPos=" + encodeURIComponent(yPos) + "&imgMode=" + encodeURIComponent(mode);
	var windowFeatures = "width=1200,scrollbars=yes,height=580,resizable=yes,status=yes";
	if (mode === "bildLink") {
    	windowFeatures = "width="+xPos+",scrollbars=yes,height="+yPos+",resizable=yes,status=yes";
    }

	if (mode === "bildLinkFull") {
    	windowFeatures = "width=1200,scrollbars=yes,height=1080,resizable=yes,status=yes";
    }
	if (mode === "bildLinkGast") {
    	windowFeatures = "width=1200,scrollbars=yes,height=1080,resizable=yes,status=yes";
    }

    let newWindow = window.open(url, "_blank", windowFeatures);
    newWindow.addEventListener("beforeunload", function() {
        window.scrollTo(0, currentWindowscrollY); // scroll back to previous position when new window is closed
    });
}

function BilderVorladen() {
  document.Vorladen = new Array();
  if (document.images) {
    for (var i = 0; i < BilderVorladen.arguments.length; i++) {
      document.Vorladen[i] = new Image();
      document.Vorladen[i].src = BilderVorladen.arguments[i];
    }
  }
}