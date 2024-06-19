var pageData;
var geladeneSeiteTiturel;
var xPos;
var yPos;

document.addEventListener("DOMContentLoaded", function() {
  	const myBody = document.getElementById("myBody");
	pageData = myBody.getAttribute("data").split(',');
	Hs = pageData[0];
	geladeneSeiteTiturel = pageData[1];
	setLinks();
	// set image
	faksimileTiturelPositionieren(...pageData);
	
});


function setLinks() {
	const faksimileLinks = document.querySelectorAll('.faksimileLinkPos');
	faksimileLinks.forEach(function(faksimileLink) {
    	faksimileLink.style.cursor = "pointer";
    });
	
	
    document.addEventListener("click", function(event) {
        const faksimileLink = event.target.closest('.faksimileLinkPos');
        if (faksimileLink) {
        	const data = faksimileLink.getAttribute("data").split(',');
        	faksimileTiturelPositionieren(...data);
           }
    });
}


function faksimileTiturelPositionieren(hs, seite, xPos=0, yPos=0) {
	
	var zusatz = "";
	var x = parseInt(seite);

	if (x < 10) {zusatz = "00";}
	if (x >= 10 && x < 100) {zusatz = "0";}
	if (x > 100) {zusatz = "";}
	
	var datei = "../Synopse/Bilder/" + hs + zusatz + seite + ".jpg";
	
	// parent.frames.rechts.src = datei;
	geladeneSeiteTiturel = seite;
	
	// change status and scroll image
	statusZeileNL(hs, seite);
	

	var imgFrame = parent.frames["rechts"];
	var imgContainer = imgFrame.document.getElementById("imgContainer");
	imgContainer.src = datei;
	window.parent.rechts.scrollTo(xPos,yPos);
}


function statusZeileNL(hs, seite) {
	if (seite == "4r") {
		window.defaultStatus="Titurel-Hs. " + hs + ", Abklatsch von Bl. 3v"; 
		window.status="Titurel-Hs. " + hs + ", Abklatsch von Bl. 3v"; 
		return true;
	} else {
		window.defaultStatus="Titurel-Hs. " + hs + ", Bl. " + seite; 
		window.status="Titurel-Hs. " + hs + ", Bl. " + seite; 
		return true;
	}
}