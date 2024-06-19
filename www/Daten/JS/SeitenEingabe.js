function checkSeitenEingabe() {

var eingabeStatus=1; //Variable für Gültigkeit der Eingabe
xy = curSlide; //Wert für angezeigte Seite zwischenspeichern (50%-Grösse)
zz = linkeSeite;  //Wert für angezeigte Seite zwischenspeichern (100%- und 150%-Grösse)

if (seitenEingabe =="0") {return}

while (seitenEingabe.charAt(0)=="0") { //Führende 0'en abschneiden
		seitenEingabe = seitenEingabe.substring(1, seitenEingabe.length);
		}
		
		if (zoom==50) {
		formatEingabe50()
		}
		
		else {
		formatEingabe100()
		}
		
		document.form1.Eingabe.focus();
		
	
return eingabeStatus; 		
}




function formatEingabe50() {

var x = seitenEingabe.search(/v/);

	if (x==-1) { //Eingabe enthält kein v
	curSlide = parseInt(seitenEingabe);
	}
	else {       //Eingabe enthält ein v
	curSlide = parseInt(seitenEingabe)+1; 
	}
checkPageLimits50()

}

function formatEingabe100() {

var x = seitenEingabe.search(/v/);

	if (x!=-1) {//Eingabe enthält ein v
	curSlide = parseInt(seitenEingabe);
	rectoVerso = "v";
	linkeSeite = curSlide + rectoVerso;
	}
	else {      //Eingabe enthält kein v
	curSlide = parseInt(seitenEingabe);
	rectoVerso = "r";
	linkeSeite = curSlide + rectoVerso;
	}
checkPageLimits100()
}


function checkPageLimits50() {

if (curSlide<1) {
		alert("Die Münchener Wolfram-Handschrift (Cgm 19) beginnt mit (Einband innen) / 1r. \n Die Eingabe muss mindestens 1 sein.")
		document.form1.Eingabe.value = "";
		document.form1.Eingabe.focus();
		curSlide = xy; //Wert für Seite zurücksetzen auf angezeigete Seite
		eingabeStatus = 0;
		return eingabeStatus;
		}
		
		if (curSlide>76) {
		alert("Die M&uuml;nchener Wolfram-Handschrift (Cgm 19) endet mit Bl. 75v / (Einband innen). \n Die Eingabe darf höchstens 75 sein.")
		document.form1.Eingabe.value = "";
		document.form1.Eingabe.focus();
		// auskommentiert 15.4.08 
		curSlide = xy; //Wert für Seite zurücksetzen auf angezeigete Seite
		//curSlide = 76;
		eingabeStatus = 0;
		return eingabeStatus;
		}	

}

function checkPageLimits100() {

if (curSlide<1) {
		alert("Die M&uuml;nchener Wolfram-Handschrift (Cgm 19) beginnt mit Bl. 1r. \nEingabe muss mindestens 1 sein.")
		document.form1.Eingabe.value = "";
		document.form1.Eingabe.focus();
		linkeSeite = zz; //Wert für Seite zurücksetzen auf angezeigete Seite
		eingabeStatus = 0;
		return eingabeStatus;
		}
		
		if (curSlide>75) {
		alert("Die M&uuml;nchener Wolfram-Handschrift (Cgm 19) endet mit Bl. 75v. \nEingabe darf höchstens 75v sein.")
		document.form1.Eingabe.value = "";
		document.form1.Eingabe.focus();
		// auskommentiert 15.4.08 
		// linkeSeite = zz; //Wert für Seite zurücksetzen auf angezeigete Seite
		// eingefügt am 15.4.08: letzte Seite soll angesprungen werden
		curSlide = 76;
		linkeSeite = 75;
		eingabeStatus = 0;
		return eingabeStatus;
		}	

}

