var geladeneSeiteG160;
var geladeneSeiteFr17;
var imgRightSrc;
var imgLeftSrc;


document.addEventListener("DOMContentLoaded", function() {
  faksimileG160('14r');
  faksimileFr17('1r');
  setLinks();
});


// setting styles
// generic event listener for all seitenangabe elements
function setLinks() {
	const faksimileLinks = document.querySelectorAll('.faksimileLink');
	faksimileLinks.forEach(function(faksimileLink) {
    	faksimileLink.style.cursor = "pointer";
    });
	
    document.addEventListener("click", function(event) {
        const faksimileLink = event.target.closest('.faksimileLink');
        if (faksimileLink) {
        	geladeneSeiteFr17 = faksimileLink.getAttribute("data");
        	faksimileFr17(geladeneSeiteFr17);
           }
    });

	const faksimile160Links = document.querySelectorAll('#faksimile160Link');
	faksimile160Links.forEach(function(faksimileLink) {
    	faksimileLink.style.cursor = "pointer";
    });
	
    document.addEventListener("click", function(event) {
        const faksimileLink = event.target.closest('#faksimile160Link');
        if (faksimileLink) {
        	geladeneSeiteG160 = faksimileLink.getAttribute("data");
        	faksimileG160(geladeneSeiteG160);
           }
    });
}

function faksimileG160(seite) {
	sendLeftImage('../../../GBilder/G150/G0' + seite + '.jpg');
}


function faksimileFr17(seite) {
	sendRightImage('../../../GBilder/017_150/017_00' + seite + '.jpg');
}

// send the image to the parent html
function sendRightImage(imgSrc) {
	if (!imgSrc || imgRightSrc === imgSrc) { return; } //guard
	imgRightSrc = imgSrc;
	const message = {
    	source: 'rightTransFrame',
    	data: imgRightSrc
    };
	// send to synopse
  	window.parent.postMessage(message, 'https://parzival.unibe.ch');
}

// send the image to the parent html
function sendLeftImage(imgSrc) {
	if (!imgSrc || imgLeftSrc === imgSrc) { return; } //guard
	imgLeftSrc = imgSrc;
	const message = {
    	source: 'leftTransFrame',
    	data: imgLeftSrc
    };
	// send to synopse
  	window.parent.postMessage(message, 'https://parzival.unibe.ch');
}


function faksimileNL(seite) {

var Pfad=self.document.URL
if (Pfad.search(/http:/)!=-1) {
	var lastSlash=Pfad.lastIndexOf("/")
	var relPfad1=Pfad.substring(0,lastSlash)
	lastSlash=relPfad1.lastIndexOf("/")
	var relPfad2=relPfad1.substring(0,lastSlash)
	lastSlash=relPfad2.lastIndexOf("/")
	var relPfad3=relPfad2.substring(0,lastSlash)
	bildURL= relPfad3 + "/cod857bilder/D150/D" + seite + ".jpg";
	}
else {bildURL="../../cod857bilder/D150/D" + seite + ".jpg";}

var content='<html>'
content+='\n<head>'
content+='<title>St. Gallen, Stiftsbibliothek, Cod. 857, S. ' + seite + '</title>'
content+='\n<script type="text/javascript" nonce="ec462eb7394471d1f4ec98e73242ad2c5ce7ef921ce999b8d234c889c12efc62">'
content+='\n'
content+='\nfunction Vollbild() {'
content+='\n'
content+='\nvar content2=\'<html><body marginwidth=\"0\" marginheight=\"0\" topmargin=\"0\" leftmargin=\"0\"><img src=\"' + bildURL + '\" onClick=\"self.close()\"></body></html>\''
content+='\nvar breite=screen.availWidth;'
content+='\nvar hoehe=screen.availHeight;'
content+='\nvar ff=window.open("","","width=breite,height=hoehe,scrollbars,resizable,")'
content+='\nff.document.open()'
content+='\nff.document.write(content2)'
content+='\nff.document.close()'
content+='\n}'
content+='\n</script>'
content+='\n'
content+='\n'
content+='\n</head>'
content+='\n<body>'
content+='\n<img src="' + bildURL + '"'
content+=' onClick="Vollbild()">'
content+='\n</body>'
content+='\n</html>';
parent.frames['rechts'].document.open();
parent.frames['rechts'].document.write(content);
parent.frames['rechts'].document.close();
statusZeileNL(seite);
}

function statusZeile() {
	ue = "M%FCnchener";
	strich = " %7C ";
		window.defaultStatus="Links: " + unescape(ue) + " Wolfram-Handschrift (Cgm 19), Bl. " + top.oben.geladeneSeiteG160 + unescape(strich) + " Rechts: Parzival-Fragment 17  (Cgm 194/III), Bl. " + top.oben.geladeneSeiteFr17; 
		window.status="Links: " + unescape(ue) + " Wolfram-Handschrift (Cgm 19), Bl. " + top.oben.geladeneSeiteG160 + unescape(strich) + " Rechts: Parzival-Fragment 17  (Cgm 194/III), Bl. " + top.oben.geladeneSeiteFr17; 
		return true;	
}
