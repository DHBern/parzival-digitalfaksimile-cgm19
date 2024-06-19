var zoom = 50;
var Zusatz = "00";
var werk = "Titurel";
var oesz=unescape("%F6%DF");
var lSeitenAngabe = "";
var rectoVerso = "r";
linkeSeite = "";
curSlide = 234;


window.addEventListener('load', function() {
  setVars();
});


function setVars () {

	infoButton = document.getElementById('infoButton');
	infoButton.addEventListener("click", function() {
  		infoFenster('info/infoTiturelH.html');
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

	stropheEnter = document.getElementById("stropheEnter");
	stropheEnter.addEventListener("keypress", function(event) {
  		if (event.key === "Enter") {
        		checkVers2();
  		}
	});

	stropheEnterButton = document.getElementById('stropheEnterButton');
	stropheEnterButton.addEventListener("click", function() {
  		checkVers2();
	});



	checkURLParam(werk);
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

function showSlide() {
	if (browserOK) {
				
				
		if (isNaN(curSlide) == true) {
			document.form1.Eingabe.value="";
		return;
		}
						
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
		if (curSlide==235 && rectoVerso=="r") {return;}
		
				
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
			if (curSlide==234 && rectoVerso=="r") {return;}
			
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

function checkVers2() {

var versEingabe = document.form1.Vers.value;



vers = parseFloat(versEingabe);
console.log(vers);


if (vers =="" || isNaN(vers) == true || vers == "null" || vers == 0) {
		document.form1.Vers.value="";
		}


//Anfang und Schluss
if (vers < 1) {alert("Die erste Strophe des Titurel-Fragments ist Strophe 1"); document.form1.Vers.value=""; return;}
if (vers > 68) {alert("Die letzte Strophe des Titurel-Fragments ist Strophe 68"); document.form1.Vers.value=""; return;}



//Titurel
if ((vers >=1 && vers <=25) || (vers>=53 && vers<=56) || (vers==59)) {curSlide=234; rectoVerso="r";}
if (vers >=26 && vers <=52) {curSlide=234; rectoVerso="v";}
if ((vers >=57 && vers <=58) || (vers>=60 && vers<=68)) {curSlide=235; rectoVerso="r";}

showSlide();
}


