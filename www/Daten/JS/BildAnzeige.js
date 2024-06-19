function bildAnzeige() {
var LagenAngabe="";
var sz=unescape("%DF");
var spezKonkordanz="";
var lageTxt = ". Lage, ";
var blattTxt = "Bl. ";

if (zoom==50) {
	if (curSlide <= 9) {rZusatz = "00";}
	if (curSlide > 9) {rZusatz = "0";}
	if (curSlide > 99) {rZusatz = "";}
	
	if (curSlide <= 10) {lZusatz = "00";}
	if (curSlide > 10) {lZusatz = "0";}
	if (curSlide > 100) {lZusatz = "";}
	
	linkeSeite = lZusatz + (curSlide-1) + "v";
	rechteSeite = rZusatz + curSlide + "r";
	
	lSeitenAngabe = (curSlide-1) + "v / ";
	rSeitenAngabe = curSlide + "r";
	
	if (curSlide==1) {
	lSeitenAngabe = "(Einband innen) / ";
	blattTxt = "";
	}
    
    if (curSlide==0) {
    lSeitenAngabe = "";
    linkeSeite = "blind";
	rSeitenAngabe = "(Einband vorne)";
	blattTxt = "";
    lageTxt = "";	
	}
	
	if (curSlide==76) {
	rSeitenAngabe = "(Einbandmakulatur)";
	} else if (curSlide==77) {
        blattTxt = "";
        lSeitenAngabe = "(Einbandmakulatur) / ";
        rSeitenAngabe = "(hinterer Innendeckel, urspr&uuml;nglicher Zustand)";
        lageTxt = "";
    } else if (curSlide==78) {
        blattTxt = "";
        lSeitenAngabe = "(Einband hinten)";
        rSeitenAngabe = "";
        lageTxt = "";
    } else if (curSlide==79) {
        blattTxt = "";
        lSeitenAngabe = "";
        rSeitenAngabe = "(Pergamentblatt, Vorderseite)";
        lageTxt = "";
    } else if (curSlide==80) {
        blattTxt = "";
        lSeitenAngabe = "(Pergamentblatt, R&uuml;ckseite) / ";
        rSeitenAngabe = "(J&uuml;ngeres Wappenexlibris)";
        lageTxt = "";
    } else if (curSlide==81) {
        blattTxt = "";
        lSeitenAngabe = "(&Auml;lteres Wappenexlibris) / ";
        rSeitenAngabe = "(Beide Wappenexlibris hochgeklappt)";
        lageTxt = "";
    } else if (curSlide==82) {
        blattTxt = "";
        lSeitenAngabe = "(Pergamentstreifen, Vorderseite) / ";
        rSeitenAngabe = "(Pergamentstreifen, R&uuml;ckseite)";
        lageTxt = "";
    }
	
	//Werk Anzeige
	if (curSlide<71) {werk="Parzival";}
	if (curSlide==71) {werk="Parzival / Titurel";}
	if (curSlide>71 && curSlide <75) {werk="Titurel";}
	if (curSlide==75) {werk="Federproben / Prosa";}
	if (curSlide==76) {werk="Tagelieder";}	
	
	//Info Button
	if (curSlide<71) {document.getElementById('infoButton').href = "javascript:infoFenster('info/infoParzival.html')";}
	if (curSlide==71) {document.getElementById('infoButton').href = "javascript:infoFenster('info/infoTiturel.html')";}
	if (curSlide>71 && curSlide <=74) {document.getElementById('infoButton').href = "javascript:infoFenster('info/infoTiturel.html')";}
	if (curSlide==75) {document.getElementById('infoButton').href = "javascript:infoFenster('info/infoProsa.html')";}
	if (curSlide==76) {document.getElementById('infoButton').href = "javascript:infoFenster('info/infoTagelieder.html')";}	
		
	checkKonkordDoppelt();
	checkHand();
	checkLageDoppelt();
	abschnittMenu50();
	
					
	document.images["linkeSeite"].src = "../GBilder/G" + zoom + "/G" + linkeSeite + ".jpg";
	document.images["rechteSeite"].src = "../GBilder/G" + zoom + "/G" + rechteSeite + ".jpg";
	document.form1.Eingabe.value = "";
	document.getElementById('werkAnzeige').innerHTML = "Cgm 19 - " + werk;
	//document.getElementById('Seite').innerHTML = blattTxt + lSeitenAngabe + " / " + rSeitenAngabe;
    document.getElementById('Seite').innerHTML = blattTxt + lSeitenAngabe + rSeitenAngabe;
	document.getElementById('Konkordanz').innerHTML = konkordanz;
	document.getElementById('Schreiber').innerHTML = schreiber;
	document.getElementById('Lage').innerHTML = lagenNr + lageTxt + lagenName;
	document.images["Lagensymbol"].src = "LagensymboleDoppelt/" + lagenSymb + ".gif";
	
	window.defaultStatus = "M&uuml;nchener Wolfram-Handschrift (Cgm 19), " + blattTxt + " " + lSeitenAngabe + " / " + rSeitenAngabe + "  |  Bildgr" + oesz +"e: " + zoom + "%";return true;
		
	
	}
		
	else {
	
	//alert("Bildanzeige100: " + doppelSeite + " / " + curSlide  + " / " + rectoVerso);		
	if (curSlide <= 9) {lZusatz = "00";}
	if (curSlide > 9) {lZusatz = "0";}
	if (curSlide > 99) {lZusatz = "";}
	lSeitenAngabe = curSlide + rectoVerso;
	//lSeitenAngabe = linkeSeite;
	//alert("BildAnzeige.js, linkeSeite: " + linkeSeite);	
	if (curSlide==0 && rectoVerso=="v") {
	   lSeitenAngabe = "(Einband innen)";
	   lageTxt = "";	
	   blattTxt = "";
	} else if (curSlide==-1) {
         alert("-1");
    } else if (curSlide==0 && rectoVerso=="r") {
        lSeitenAngabe = "(Einband vorne)";
	   lageTxt = "";	
	   blattTxt = "";
    }
	
	if (curSlide==76) {
	   lSeitenAngabe = "(Einbandmakulatur)";
	   lageTxt = "";	
	   blattTxt = "";
	} else if (curSlide==77 && rectoVerso=="r") {
        lSeitenAngabe = "(hinterer Innendeckel, urspr&uuml;nglicher Zustand)";
        lageTxt = "";	
	   blattTxt = "";
    } else if (curSlide==77 && rectoVerso=="v") {
        lSeitenAngabe = "(Einband hinten)";
        lageTxt = "";	
	   blattTxt = "";
    } else if (curSlide==79 && rectoVerso=="r") {
        lSeitenAngabe = "(Pergamentblatt, Vorderseite)";
        lageTxt = "";	
	    blattTxt = "";
    } else if (curSlide==79 && rectoVerso=="v") {
        lSeitenAngabe = "(Pergamentblatt, R&uuml;ckseite)";
        lageTxt = "";	
	   blattTxt = "";
    } else if (curSlide==80 && rectoVerso=="r") {
        lSeitenAngabe = "(J&uuml;ngeres Wappenexlibris)";
        lageTxt = "";	
	   blattTxt = "";
    } else if (curSlide==80 && rectoVerso=="v") {
        lSeitenAngabe = "(&Auml;lteres Wappenexlibris)";
        lageTxt = "";	
	   blattTxt = "";
    } else if (curSlide==81 && rectoVerso=="r") {
        lSeitenAngabe = "(Beide Wappenexlibris hochgeklappt)";
        lageTxt = "";	
	   blattTxt = "";
    } else if (curSlide==81 && rectoVerso=="v") {
        lSeitenAngabe = "(Pergamentstreifen, Vorderseite)";
        lageTxt = "";	
	   blattTxt = "";
    } else if (curSlide==82 && rectoVerso=="r") {
        lSeitenAngabe = "(Pergamentstreifen, R&uuml;ckseite)";
        lageTxt = "";	
	   blattTxt = "";
    }
	
	//Werk Anzeige
	if (curSlide==0) {werk="(Einband innen)";}
	else if (curSlide<=70) {werk="Parzival";}
	if (curSlide>=71 && curSlide<=74) {werk="Titurel";}
	if (curSlide==74 && rectoVerso=="v") {werk="Federproben";}
	if (curSlide==75 && rectoVerso=="r") {werk="Prosa";}
	if (curSlide==75 && rectoVerso=="v") {werk="Tagelieder";}
	if (curSlide>75) {werk="(Einband innen)";}	
	
	//Info Button
	if (curSlide<=70) {document.getElementById('infoButton').href = "javascript:infoFenster('info/infoParzival.html')";}
	if (curSlide>=71 && curSlide<=74) {document.getElementById('infoButton').href = "javascript:infoFenster('info/infoTiturel.html')";}
	if (curSlide==74 && rectoVerso=="v") {document.getElementById('infoButton').href = "javascript:infoFenster('info/infoTiturel.html')";}
	if (curSlide==75 && rectoVerso=="r") {document.getElementById('infoButton').href = "javascript:infoFenster('info/infoProsa.html')";}
	if (curSlide==75 && rectoVerso=="v") {document.getElementById('infoButton').href = "javascript:infoFenster('info/infoTagelieder.html')";}	
	
	checkKonkord();
	checkHand();
	checkLage();
	abschnittMenu100();
	// neu
	linkeSeite = curSlide;
	var welchesBild = "../GBilder/G" + zoom + "/G" + lZusatz + linkeSeite + rectoVerso + ".jpg";
	document.images["linkeSeite"].src = "../GBilder/G" + zoom + "/G" + lZusatz + linkeSeite + rectoVerso + ".jpg";
	// Ende neu
	//document.images["linkeSeite"].src = "../GBilder/G" + zoom + "/G" + lZusatz + linkeSeite + ".jpg";
	document.images["rechteSeite"].src = "../GBilder/G" + zoom + "/blind.gif";
	document.form1.Eingabe.value = "";
	document.getElementById('werkAnzeige').innerHTML = "Cgm 19 - " + werk;
	document.getElementById('Seite').innerHTML = blattTxt + lSeitenAngabe;
	document.getElementById('Schreiber').innerHTML = schreiber;
	document.getElementById('Lage').innerHTML = lagenNr + lageTxt + lagenName;
	document.images['Lagensymbol'].src = "Lagensymbole/" + lagenSymb + ".gif";
	document.getElementById('Konkordanz').innerHTML = konkordanz;
	window.defaultStatus = "M&uuml;nchener Wolfram-Handschrift (Cgm 19), " + blattTxt + " " + lSeitenAngabe + "  |  Bildgr" + oesz +"e: " + zoom + "%";return true;
	 
	}

    
}

