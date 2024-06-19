function bildAnzeige() {

var sz=unescape("%DF");

var blattTxt = "Bl. ";


	
	linkeSeite = curSlide + rectoVerso;
		
			
	checkKonkord();
		
	document.images["linkeSeite"].src = "H" + zoom + "/H" + linkeSeite + ".jpg";
	document.getElementById('Seite').innerHTML = blattTxt + linkeSeite;
	document.getElementById('Konkordanz').innerHTML = konkordanz;
	
	window.defaultStatus = "Wien, Nationalbibliothek, Cod. ser. nova 2663, " + blattTxt + " " + linkeSeite + "  |  Bildgr" + oesz +"e: " + zoom + "%";return true;
	
	   
}

