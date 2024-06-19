function faksimileTiturelPositionieren(hs, seite, xPos,yPos) {
    //alert(xPos);
	var bildURL;
	
	this.parent.xPos = xPos;
	this.parent.yPos = yPos;
	
	var zusatz ="";
	var x = parseInt(seite);

	if (x < 10) {zusatz = "00";}
	if (x >= 10 && x < 100) {zusatz = "0";}
	if (x > 100) {zusatz = "";}

	var datei = "Bilder/" + hs + zusatz + seite + ".html";
	//alert(datei);
	
	parent.frames.rechts.location.href = datei;
	statusZeileNL(hs, seite);
}


function faksimileTiturel(hs, seite) {
//var bildURL;
var zusatz ="";
var x = parseInt(seite);

if (x < 10) {zusatz = "00";}
if (x >= 10 && x < 100) {zusatz = "0";}
if (x > 100) {zusatz = "";}


/*var Pfad=self.document.URL;
if (Pfad.search(/http:/)!=-1) {
	var lastSlash=Pfad.lastIndexOf("/");
	var relPfad1=Pfad.substring(0,lastSlash);
	bildURL= relPfad1 + "/Bilder/" + hs + zusatz + seite + ".jpg";
	}
else {bildURL="Bilder/" + hs + zusatz + seite + ".jpg";}*/


	var datei = "Bilder/" + hs + zusatz + seite + ".html";
	//alert(datei);
	
	parent.frames.rechts.location.href = datei;
	statusZeileNL(hs, seite);
}

function statusZeileNL(hs, seite) {
window.defaultStatus="Rechts: Titurel-Hs. " + hs + ", Bl. " + seite; 
window.status="Rechts: Titurel-Hs. " + hs + ", Bl. " + seite; 
return true;
}