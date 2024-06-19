document.addEventListener("DOMContentLoaded", function() {
  const myBody = document.getElementById("myBody");
  const page = myBody.getAttribute("data");
  faksimilePZ(page);
  setLinks();
  setOtherLinks();
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
        	const page = faksimileLink.getAttribute("data");
      
        	faksimilePZ(page);
           }
    });
}


// setting styles
// generic event listener for all seitenangabe elements
function setOtherLinks() {
	const faksimileLinks = document.querySelectorAll('.otherFaksimileLink');
	faksimileLinks.forEach(function(faksimileLink) {
    	faksimileLink.style.cursor = "pointer";
    });
	
    document.addEventListener("click", function(event) {
        const faksimileLink = event.target.closest('.otherFaksimileLink');
        if (faksimileLink) {
        	const data = faksimileLink.getAttribute("data").split(',');
        	loadFaksimile(data[0], data[1]);
           }
    });
}


var geladeneSeite = "";

function faksimilePZ(seite) {
	//alert("faksimilePZ");
	/*alert("faksimile; seite: " + seite + " geladene Seite: " + geladeneSeite);*/
	if (geladeneSeite != seite) {
		
		var zusatz ="";
		var x = parseInt(seite);

		if (x < 10) {zusatz = "00";}
		if (x >= 10 && x < 100) {zusatz = "0";}
		if (x > 100) {zusatz = "";}


		var Pfad=self.document.URL
		if (Pfad.search(/https:/)!=-1) {
			var lastSlash=Pfad.lastIndexOf("/")
			var relPfad1=Pfad.substring(0,lastSlash)
			lastSlash=relPfad1.lastIndexOf("/")
			var relPfad2=relPfad1.substring(0,lastSlash)
			lastSlash=relPfad2.lastIndexOf("/")
			var relPfad3=relPfad2.substring(0,lastSlash)
			bildURL= relPfad3 + "/GBilder/G150/G" + seite + ".jpg";
			/*alert("bildURL: " + bildURL);*/
		}
		else {bildURL="../../GBilder/G150/G" + seite + ".jpg";}
		/*alert("bildURL: " + bildURL);*/
		var content='<html>'
		content+='\n<head>'
		content+='<title>Münchner Wolfram-Handschrift (Cgm 19) - Transkription, Bl. ' + seite + '</title>'
		content+='\n'
		content+='\n'
		content+='\n</head>'
		content+='\n<body marginwidth=\"0\" marginheight=\"0\" topmargin=\"0\" leftmargin=\"0\">'
		content+='\n<img id="faksImg" src="' + bildURL + '"'
		content+='>'
		content+='\n</body>'
		content+='\n</html>';
    
/*
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
        */
		
		parent.frames['rechts'].document.open();
		parent.frames['rechts'].document.write(content);
		parent.frames['rechts'].document.close();
		statusZeileNL(seite);
	}
	geladeneSeite = seite;
}

function statusZeileNL(seite) {
window.defaultStatus="Rechts: St. Gallen, Stiftsbibl., Cod. 857, Seite " + seite; 
window.status="Rechts: St. Gallen, Stiftsbibl., Cod. 857, Seite " + seite; 
return true;
}
