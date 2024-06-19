var zoom = 50;
var Zusatz = "00";
var werk = "Titurel";
var oesz=unescape("%F6%DF");
var lSeitenAngabe = "";
var rectoVerso = "r";
linkeSeite = "";
curSlide = 1;

window.addEventListener('load', function() {
	setVars();
  checkURLParam();
},  { once: true });


function setVars () {

	infoButton = document.getElementById('infoButton');
	infoButton.addEventListener("click", function() {
  		infoFenster('../info/infoTiturelM.html');
	});

	backButton = document.getElementById('prevButton');
	backButton.addEventListener('click', goPrev);

	nextButton = document.getElementById('nextButton');
	nextButton.addEventListener('click', goNext);

	button150 = document.getElementById('button150');
	button150.addEventListener('click', zoom150);

	button100 = document.getElementById('button100');
	button100.addEventListener('click', zoom100);

	button50 = document.getElementById('button50');
	button50.addEventListener('click', zoom50);

	buchSelect = document.getElementById("buchSelect");
	buchSelect.addEventListener("change", MM_jumpMenuParts);

	versEnter = document.getElementById("versEnter");
	versEnter.addEventListener("keypress", function(event) {
  		if (event.key === "Enter") {
        	event.preventDefault();
        	const inputValue = versEnter.value; 
        	checkVers(inputValue);
  		}
	});


	versEnterButton = document.getElementById('versEnterButton');
	versEnterButton.addEventListener("click", function() {
  		checkVers();
	});

	
	backButton2 = document.getElementById('prevButton2');
	backButton2.addEventListener('click', goPrev);

	nextButton2 = document.getElementById('nextButton2');
	nextButton2.addEventListener('click', goNext);
}


//Beginn ------------------------------------------

// Absenden mit Enter (Seite)
function submitenter(myfield,e)
{
var keycode;
if (window.event) keycode = window.event.keyCode;
else if (e) keycode = e.which;
else return true;

if (keycode == 13)
   {
   	seitenEingabe = document.form1.Eingabe.value;
		
		if(!window.seitenEingabe) {return;}
				
		else {
		
		var korrekt = checkSeitenEingabe();
			
			if (korrekt==0) {return;}
		
			else {
			showSlide();
			}
			
		
   return false;
   }
   }
else
   return true;
}

//Seiteneingabe mit Klick of Ok
function goPage() {		
		seitenEingabe = document.form1.Eingabe.value;
		if(!window.seitenEingabe) {document.form1.Eingabe.focus(); return;}
		else {
		var korrekt = checkSeitenEingabe();
			
			if (korrekt==0) {return;}
		
			else {
			showSlide();
			}
		
   return false;
   }
		
}

function checkURLParam() {
	if (window.location.search != "") {
		var param=window.location.search;
		if (param.search(/&/)!=-1) {
			var amp=param.indexOf("&");
			var param1=param.substring(1,amp)
			curSlide=parseFloat(param1);
			rectoVerso = param1.substring(3, param1.length);
			var param2=param.substring(amp + 1);
			zoom=param2;
			/*if (zoom!=50) {
				doppelSeite=false;
			}
			document.form1.Eingabe.focus();*/
			showSlide();
		}	else {	
			curSlide=parseFloat(param.substring(1));
			document.form1.Eingabe.focus();
			showSlide();
		}
	} else {
		curSlide = 1;
		rectoVerso = "r";
		document.form1.Eingabe.focus();
		showSlide();	
	}
}	


// Absenden mit Enter (Vers)
function submitenter2(myfield,e)
{
var keycode;
if (window.event) keycode = window.event.keyCode;
else if (e) keycode = e.which;
else return true;

if (keycode == 13)
   {
   	checkVers();
   return false;
   }
else
   return true;
}

//Browser-Kompatibilit�t
if(document.all && !document.getElementById) {
    document.getElementById = function(id) {
         return document.all[id];
    }
}


// Browsertest
var browserName = navigator.appName;
var browserVer = parseInt(navigator.appVersion);
var browserOK = (((browserName == "Netscape") && (browserVer >= 5)) || 
	((browserName == "Microsoft Internet Explorer") && (browserVer >= 4)));



function showSlide() {
	if (browserOK) {
				
				
		//if (isNaN(curSlide) == true) {
		//document.form1.Eingabe.value="";
		//return;
		// }
						
		if (curSlide < 1) {
		curSlide=1;
		rectoVerso="r";
		}
		
		
		bildAnzeige();
		
		spalte = "";
		document.form1.Vers.value="";
		
		
	} else {
		
		alert("Sie verwenden den Browser " + browserName + " " + browserVer + ". Diese Anwendung ben�tigt Internet Explorer ab Version 5 bzw. Netscape ab Version 7 (unter Windows) oder Camino bzw. Netscape ab Version 7 (unter Macintosh).");
	}
}



function goNext() {

	
	
	
		//Stopp das Vorw�rtsbl�ttern am Ende der Hs.
		if (curSlide==4 && rectoVerso=="r") {return;}
		
				
		if (rectoVerso=="v") {
		curSlide++;
		rectoVerso = "r";
		linkeSeite = curSlide + rectoVerso;
		showSlide();
		return;
		}
		
		if (rectoVerso=="r") {
		rectoVerso = "v";
		linkeSeite = curSlide + rectoVerso;
		showSlide();
		return;
		
	showSlide();
	}
	
}



function goPrev() {
	
		

	
			//Stopp das Zur�ckbl�ttern am Anfang der Hs.
			if (curSlide==0 && rectoVerso=="v") {return;}
			
			if (rectoVerso=="v") {
			rectoVerso = "r";
			linkeSeite = curSlide + rectoVerso;
			showSlide();
			return;
			}
		
			if (rectoVerso=="r") {
			curSlide--;
			rectoVerso = "v";
			linkeSeite = curSlide + rectoVerso;
			showSlide();
			return;
			}
			
			showSlide();
		
	

}
		

function zoom150() {
		
		if (zoom==50) {
		zoom = 150;
		showSlide();	
		}
						
		if (zoom==100) {
		zoom = 150;
		showSlide();	
		}
		
		if (zoom==150) {
		return;
		}
}

function zoom100() {
		
		if (zoom==50) {
		zoom = 100;
		showSlide();	
		}
		
		if (zoom==100) {
		return;
		}
		
		if (zoom==150) {
		zoom = 100;
		showSlide();	
		}
}

function zoom50() {
		
		if (zoom==50) {
		return;
		}
		
		if (zoom!=50) {
			
		
		zoom = 50;
		showSlide();
		}	
}






//Menu Werk w�hlen
function werkWechsel(){ 
if (document.form1.menu1.value != "javascript:") {
var wWerk = document.form1.menu1.value;
rectoVerso = wWerk.substring(0,1);
curSlide = parseInt(wWerk.substring(1));
document.form1.menu1.selectedIndex = 0;

	if (zoom==50) {
		if (rectoVerso=="v") {curSlide++;}
	}
	
	else {
	linkeSeite = curSlide+rectoVerso;
	}
	
showSlide();
}

}

//Menu Abschnitte w�hlen
function MM_jumpMenuParts(){ 
if (document.form1.menu2.value != "javascript:") {
var blatt = document.form1.menu2.value;
rectoVerso = blatt.substring(0,1);
curSlide = parseInt(blatt.substring(1));
document.form1.menu2.selectedIndex = 0;
	
	linkeSeite = curSlide+rectoVerso;
		
showSlide();
}
}

function checkVers(versEingabe) {
if (!versEingabe) {
	// if no versEingabe passed, then we read it out from the form. This is the case, when the button is pressed
 var versEingabe = document.form1.Vers.value;
}

vers = parseFloat(versEingabe);


if (vers =="" || isNaN(vers) || vers == "null" || vers == 0) {
		document.form1.Vers.value="";
		}


//Anfang und Schluss
if (vers < 31.00) {alert("Die erste Strophe des Titurel-Fragments ist Strophe 31"); document.form1.Vers.value=""; return;}
if (vers > 119) {alert("Die letzte Strophe des Titurel-Fragments ist Strophe 119"); document.form1.Vers.value=""; return;}


//Fehlende Strophen
if (vers>=46 && vers<=75) {alert("Die Strophen 46-75 fehlen.\nEin Verzeichnis der fehlenden Strophen befindet sich in der Info-Datei."); document.form1.Vers.value=""; return;}
if (vers>=91 && vers<=100) {alert("Die Strophen 91-100 fehlen.\nEin Verzeichnis der fehlenden Strophen befindet sich in der Info-Datei."); document.form1.Vers.value=""; return;}
if (vers>=102 && vers<=104) {alert("Die Strophen 102-104 fehlen.\nEin Verzeichnis der fehlenden Strophen befindet sich in der Info-Datei."); document.form1.Vers.value=""; return;}
if (vers>=120 && vers<=175) {alert("Die Strophen 120-175 fehlen.\nEin Verzeichnis der fehlenden Strophen befindet sich in der Info-Datei."); document.form1.Vers.value=""; return;}



//Titurel
if (vers >=31 && vers <=38) {curSlide=1; rectoVerso="r";}
if (vers >=39 && vers <=45) {curSlide=1; rectoVerso="v";}
if (vers >=76 && vers <=85) {curSlide=2; rectoVerso="r";}
if (vers >=86 && vers <=90) {curSlide=2; rectoVerso="v";}
if ((vers >=105 && vers <=111) || (vers==101)) {curSlide=3; rectoVerso="r";}
if (vers >=112 && vers <=119) {curSlide=3; rectoVerso="v";}

showSlide();
}


function bildAnzeige(from) {
console.log(from);

var sz=unescape("%DF");

var blattTxt = "Bl. ";


	
	linkeSeite = curSlide + rectoVerso;
	
	if (linkeSeite == "4r") {
		
		checkKonkord();
		
	document.images["linkeSeite"].src = "M" + zoom + "/M" + "00" + linkeSeite + ".jpg";
	document.getElementById('Seite').innerHTML = "Abkl. Bl. 3v";
	document.getElementById('Konkordanz').innerHTML = konkordanz;
			
	window.defaultStatus = "M&uuml;nchen, UB, 8� Cod. ms. 154, " + "Abkl. Bl. 3v" + "  |  Bildgr" + oesz +"e: " + zoom + "%";return true;
		
	} else {
		
		
			
	checkKonkord();
		
	document.images["linkeSeite"].src = "M" + zoom + "/M" + "00" + linkeSeite + ".jpg";
	document.getElementById('Seite').innerHTML = blattTxt + linkeSeite;
	document.getElementById('Konkordanz').innerHTML = konkordanz;
			
	// window.defaultStatus = "M&uuml;nchen, Universit&auml;tsbibliothek der LMU, 8� Cod. ms. 154, " + blattTxt + " " + linkeSeite + "  |  Bildgr" + oesz +"e: " + zoom + "%";return true;
	}
	    
}

function checkKonkord() {

if (curSlide==0) {konkordanz=""; return}


if (curSlide==1 && rectoVerso=="r") {konkordanz="31.01-38.02"; return}
if (curSlide==1 && rectoVerso=="v") {konkordanz="38.02-45.04"; return}
if (curSlide==2 && rectoVerso=="r") {konkordanz="76.02-85.03"; return}
if (curSlide==2 && rectoVerso=="v") {konkordanz="85.04-90.04"; return}
if (curSlide==3 && rectoVerso=="r") {konkordanz="105.03-111.04 mit 101.01-04"; return}
if (curSlide==3 && rectoVerso=="v") {konkordanz="112.01-119.02"; return}
if (curSlide==4 && rectoVerso=="r") {konkordanz="112.01-119.02"; return}


}