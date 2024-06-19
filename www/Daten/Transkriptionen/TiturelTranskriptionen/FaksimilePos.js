//var geladeneSeiteTiturel = "71r";

function faksimileTiturelPositionieren(hs, seite, xPos) {
	//alert("geladeneSeiteTiturel: " + geladeneSeiteTiturel);
	
	if (geladeneSeiteTiturel != seite) {
	
		var zusatz ="";
		var x = parseInt(seite);
		//alert("x" + x);

		if (x < 10) {zusatz = "00";}
		if (x >= 10 && x < 100) {zusatz = "0";}
		if (x > 100) {zusatz = "";}


		var Pfad=self.document.URL
		if (Pfad.search(/http:/)!=-1) {
			var lastSlash=Pfad.lastIndexOf("/");
			var relPfad1=Pfad.substring(0,lastSlash);
			lastSlash=relPfad1.lastIndexOf("/")
			relPfad1 = relPfad1.substring(0, lastSlash);
			bildURL= relPfad1 + "/Synopse/Bilder/" + hs + zusatz + seite + ".jpg";
		} else {
			bildURL="../Synopse/Bilder/" + hs + zusatz + seite + ".jpg";
		}
		
		var content='<html>'
		content+='\n<head>'
		content+='<title>Titurel-Hs. ' + hs + ', Bl. ' + seite + '</title>'
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
		content+='\nfunction horizontalAusrichten() {'
		content+='\nthis.window.moveBy(100,100);'
		//content+='\nalert(this.name);'
		content+='\n}'
		content+='\n</script>'
		content+='\n'
		content+='\n'
		content+='\n</head>'
		content+='\n<body>'
		content+='\n<img src="' + bildURL + '" '
		content+=' onClick="Vollbild()">'
		content+='\n</body>'
		content+='\n</html>';
		parent.frames['rechts'].document.open();
		parent.frames['rechts'].document.write(content);
		parent.frames['rechts'].document.close();
		//alert(window.parent.rechts.name);
		window.parent.rechts.scrollTo(xPos,0);
		statusZeileNL(hs, seite);
		geladeneSeiteTiturel = seite;
		return geladeneSeiteTiturel;
	}
}

function statusZeileNL(hs, seite) {
window.defaultStatus="Titurel-Hs. " + hs + ", Bl. " + seite; 
window.status="Titurel-Hs. " + hs + ", Bl. " + seite; 
return true;
}