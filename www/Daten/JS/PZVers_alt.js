function checkVers(vWerk) {

var versEingabe = document.form1.Vers.value;

//Auf Zweistelligkeit hinter Komma prüfen
var p = versEingabe.search(/\./);

if (p!=-1) {
var punkt = versEingabe.indexOf(".");
var einer = versEingabe.substring(punkt+1);
	
	if (einer.length!=2) {
	alert("Versangaben m&uuml;ssen nach der Abschnittangabe (abgetrennt durch Punkt) stets zweistellig eingegeben werden (z.B. 114.05, 469.07, 795.20). Alternativ kann aber auch nur die Abschnittziffer eingegeben werden (z.B. 114, 469, 795).");
	document.form1.Vers.value="";
	return;
	}
}

vers = parseFloat(versEingabe);


if (vers =="" || isNaN(vers) == true || vers == "null" || vers == 0) {
		document.form1.Vers.value="";
		}



if (vWerk=="vParzival") {

if (vers < 1) {alert("Der erste Vers des Parzival ist 1.01"); document.form1.Vers.value=""; return;}
if (vers > 827.30) {alert("Der letzte Vers des Parzival ist 827.30"); document.form1.Vers.value=""; return;}

//Fehlende Verse abfangen
if (vers==116.17) {alert("Der Vers 116.17 fehlt.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
if (vers==116.18) {alert("Der Vers 116.18 fehlt.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
if (vers >=228.17 && vers <=228.24) {alert("Die Verse 228.17-228.24 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
if (vers >=336.00 && vers <=337.30) {alert("Die Verse 336.01-337.30 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
if (vers==455.09) {alert("Der Vers 455.09 fehlt.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
if (vers==791.08) {alert("Der Vers 791.08 fehlt.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}

//Seite laden gemäss Verseingabe


//Parzival
if (vers >=1.00 && vers <=5.28) {curSlide=1; rectoVerso="r"; seiteKorrektur();}
if (vers >=5.29 && vers <=10.26) {curSlide=1; rectoVerso="v"; seiteKorrektur();}
if (vers >=10.27 && vers <=16.03) {curSlide=2; rectoVerso="r"; seiteKorrektur();}
if (vers >=16.04 && vers <=21.12) {curSlide=2; rectoVerso="v"; seiteKorrektur();}
if (vers >=21.13 && vers <=26.18) {curSlide=3; rectoVerso="r"; seiteKorrektur();}
if (vers >=26.19 && vers <=31.24) {curSlide=3; rectoVerso="v"; seiteKorrektur();}
if (vers >=31.25 && vers <=37.12) {curSlide=4; rectoVerso="r"; seiteKorrektur();}
if (vers >=37.13 && vers <=42.20) {curSlide=4; rectoVerso="v"; seiteKorrektur();}
if (vers >=42.21 && vers <=47.28) {curSlide=5; rectoVerso="r"; seiteKorrektur();}
if (vers >=47.30 && vers <=53.15) {curSlide=5; rectoVerso="v"; seiteKorrektur();}
if (vers >=53.16 && vers <=58.25) {curSlide=6; rectoVerso="r"; seiteKorrektur();}
if (vers >=58.26 && vers <=64.06) {curSlide=6; rectoVerso="v"; seiteKorrektur();}
if (vers >=64.07 && vers <=69.24) {curSlide=7; rectoVerso="r"; seiteKorrektur();}
if (vers >=69.25 && vers <=75.24) {curSlide=7; rectoVerso="v"; seiteKorrektur();}
if (vers >=75.25 && vers <=81.26) {curSlide=8; rectoVerso="r"; seiteKorrektur();}
if (vers >=81.27 && vers <=88.12) {curSlide=8; rectoVerso="v"; seiteKorrektur();}
if (vers >=88.13 && vers <=95.01) {curSlide=9; rectoVerso="r"; seiteKorrektur();}
if (vers >=95.02 && vers <=101.17) {curSlide=9; rectoVerso="v"; seiteKorrektur();}
if (vers >=101.18 && vers <=107.30) {curSlide=10; rectoVerso="r"; seiteKorrektur();}
if (vers >=108.00 && vers <=114.14) {curSlide=10; rectoVerso="v"; seiteKorrektur();}
if (vers >=114.15 && vers <=120.22) {curSlide=11; rectoVerso="r"; seiteKorrektur();}
if (vers >=120.23 && vers <=127.07) {curSlide=11; rectoVerso="v"; seiteKorrektur();}
if (vers >=127.08 && vers <=134.01) {curSlide=12; rectoVerso="r"; seiteKorrektur();}
if (vers >=134.02 && vers <=141.09) {curSlide=12; rectoVerso="v"; seiteKorrektur();}
if (vers >=141.10 && vers <=148.10) {curSlide=13; rectoVerso="r"; seiteKorrektur();}
if (vers >=148.11 && vers <=155.02) {curSlide=13; rectoVerso="v"; seiteKorrektur();}
if (vers >=155.03 && vers <=162.04) {curSlide=14; rectoVerso="r"; seiteKorrektur();}
if (vers >=162.05 && vers <=169.04) {curSlide=14; rectoVerso="v"; seiteKorrektur();}
if (vers >=169.05 && vers <=175.30) {curSlide=15; rectoVerso="r"; seiteKorrektur();}
if (vers >=176.00 && vers <=182.02) {curSlide=15; rectoVerso="v"; seiteKorrektur();}
if (vers >=182.03 && vers <=189.11) {curSlide=16; rectoVerso="r"; seiteKorrektur();}
if (vers >=189.12 && vers <=196.21) {curSlide=16; rectoVerso="v"; seiteKorrektur();}
if (vers >=196.22 && vers <=204.02) {curSlide=17; rectoVerso="r"; seiteKorrektur();}
if (vers >=204.03 && vers <=211.19) {curSlide=17; rectoVerso="v"; seiteKorrektur();}
if (vers >=211.20 && vers <=218.26) {curSlide=18; rectoVerso="r"; seiteKorrektur();}
if (vers >=218.27 && vers <=226.04) {curSlide=18; rectoVerso="v"; seiteKorrektur();}
if (vers >=226.05 && vers <=234.19) {curSlide=19; rectoVerso="r"; seiteKorrektur();}
if (vers >=234.20 && vers <=241.08) {curSlide=19; rectoVerso="v"; seiteKorrektur();}
if (vers >=241.09 && vers <=248.08) {curSlide=20; rectoVerso="r"; seiteKorrektur();}
if (vers >=248.09 && vers <=255.12) {curSlide=20; rectoVerso="v"; seiteKorrektur();}
if (vers >=255.13 && vers <=262.26) {curSlide=21; rectoVerso="r"; seiteKorrektur();}
if (vers >=262.27 && vers <=270.14) {curSlide=21; rectoVerso="v"; seiteKorrektur();}
if (vers >=270.15 && vers <=278.06) {curSlide=22; rectoVerso="r"; seiteKorrektur();}
if (vers >=278.07 && vers <=285.20) {curSlide=22; rectoVerso="v"; seiteKorrektur();}
if (vers >=285.21 && vers <=293.11) {curSlide=23; rectoVerso="r"; seiteKorrektur();}
if (vers >=293.12 && vers <=300.23) {curSlide=23; rectoVerso="v"; seiteKorrektur();}
if (vers >=300.24 && vers <=308.22) {curSlide=24; rectoVerso="r"; seiteKorrektur();}
if (vers >=308.23 && vers <=316.17) {curSlide=24; rectoVerso="v"; seiteKorrektur();}
if (vers >=316.18 && vers <=323.28) {curSlide=25; rectoVerso="r"; seiteKorrektur();}
if (vers >=323.29 && vers <=331.14) {curSlide=25; rectoVerso="v"; seiteKorrektur();}
if (vers >=331.15 && vers <=340.30) {curSlide=26; rectoVerso="r"; seiteKorrektur();}
if (vers >=341.00 && vers <=348.15) {curSlide=26; rectoVerso="v"; seiteKorrektur();}
if (vers >=348.16 && vers <=355.24) {curSlide=27; rectoVerso="r"; seiteKorrektur();}
if (vers >=355.25 && vers <=362.23) {curSlide=27; rectoVerso="v"; seiteKorrektur();}
if (vers >=362.24 && vers <=370.03) {curSlide=28; rectoVerso="r"; seiteKorrektur();}
if (vers >=370.04 && vers <=377.20) {curSlide=28; rectoVerso="v"; seiteKorrektur();}
if (vers >=377.21 && vers <=385.03) {curSlide=29; rectoVerso="r"; seiteKorrektur();}
if (vers >=385.04 && vers <=392.18) {curSlide=29; rectoVerso="v"; seiteKorrektur();}
if (vers >=392.19 && vers <=399.16) {curSlide=30; rectoVerso="r"; seiteKorrektur();}
if (vers >=399.17 && vers <=406.10) {curSlide=30; rectoVerso="v"; seiteKorrektur();}
if (vers >=406.11 && vers <=413.26) {curSlide=31; rectoVerso="r"; seiteKorrektur();}
if (vers >=413.27 && vers <=420.24) {curSlide=31; rectoVerso="v"; seiteKorrektur();}
if (vers >=420.25 && vers <=428.13) {curSlide=32; rectoVerso="r"; seiteKorrektur();}
if (vers >=428.14 && vers <=435.15) {curSlide=32; rectoVerso="v"; seiteKorrektur();}
if (vers >=435.16 && vers <=440.30) {curSlide=33; rectoVerso="r"; seiteKorrektur();}
if (vers >=441.00 && vers <=446.07) {curSlide=33; rectoVerso="v"; seiteKorrektur();}
if (vers >=446.08 && vers <=451.20) {curSlide=34; rectoVerso="r"; seiteKorrektur();}
if (vers >=451.21 && vers <=457.05) {curSlide=34; rectoVerso="v"; seiteKorrektur();}
if (vers >=457.06 && vers <=462.18) {curSlide=35; rectoVerso="r"; seiteKorrektur();}
if (vers >=462.19 && vers <=467.30) {curSlide=35; rectoVerso="v"; seiteKorrektur();}
if (vers >=468.00 && vers <=473.15) {curSlide=36; rectoVerso="r"; seiteKorrektur();}
if (vers >=473.16 && vers <=478.26) {curSlide=36; rectoVerso="v"; seiteKorrektur();}
if (vers >=478.27 && vers <=484.08) {curSlide=37; rectoVerso="r"; seiteKorrektur();}
if (vers >=484.09 && vers <=489.22) {curSlide=37; rectoVerso="v"; seiteKorrektur();}
if (vers >=489.23 && vers <=495.04) {curSlide=38; rectoVerso="r"; seiteKorrektur();}
if (vers >=495.05 && vers <=500.23) {curSlide=38; rectoVerso="v"; seiteKorrektur();}
if (vers >=500.24 && vers <=506.08) {curSlide=39; rectoVerso="r"; seiteKorrektur();}
if (vers >=506.09 && vers <=511.23) {curSlide=39; rectoVerso="v"; seiteKorrektur();}
if (vers >=511.24 && vers <=517.09) {curSlide=40; rectoVerso="r"; seiteKorrektur();}
if (vers >=517.10 && vers <=522.22) {curSlide=40; rectoVerso="v"; seiteKorrektur();}
if (vers >=522.23 && vers <=528.05) {curSlide=41; rectoVerso="r"; seiteKorrektur();}
if (vers >=528.06 && vers <=533.16) {curSlide=41; rectoVerso="v"; seiteKorrektur();}
if (vers >=533.17 && vers <=539.01) {curSlide=42; rectoVerso="r"; seiteKorrektur();}
if (vers >=539.02 && vers <=544.16) {curSlide=42; rectoVerso="v"; seiteKorrektur();}
if (vers >=544.17 && vers <=549.29) {curSlide=43; rectoVerso="r"; seiteKorrektur();}
if (vers >=549.30 && vers <=555.14) {curSlide=43; rectoVerso="v"; seiteKorrektur();}
if (vers >=555.15 && vers <=560.29) {curSlide=44; rectoVerso="r"; seiteKorrektur();}
if (vers >=560.30 && vers <=566.13) {curSlide=44; rectoVerso="v"; seiteKorrektur();}
if (vers >=566.14 && vers <=572.02) {curSlide=45; rectoVerso="r"; seiteKorrektur();}
if (vers >=572.03 && vers <=577.30) {curSlide=45; rectoVerso="v"; seiteKorrektur();}
if (vers >=578.00 && vers <=583.28) {curSlide=46; rectoVerso="r"; seiteKorrektur();}
if (vers >=583.29 && vers <=589.30) {curSlide=46; rectoVerso="v"; seiteKorrektur();}
if (vers >=590.00 && vers <=595.29) {curSlide=47; rectoVerso="r"; seiteKorrektur();}
if (vers >=595.30 && vers <=602.12) {curSlide=47; rectoVerso="v"; seiteKorrektur();}
if (vers >=602.13 && vers <=608.16) {curSlide=48; rectoVerso="r"; seiteKorrektur();}
if (vers >=608.17 && vers <=614.18) {curSlide=48; rectoVerso="v"; seiteKorrektur();}

//Bilder auf Bll. 49/50

if (vers >=614.19 && vers <=620.10) {curSlide=51; rectoVerso="r"; seiteKorrektur();}
if (vers >=620.11 && vers <=626.02) {curSlide=51; rectoVerso="v"; seiteKorrektur();}
if (vers >=626.03 && vers <=631.24) {curSlide=52; rectoVerso="r"; seiteKorrektur();}
if (vers >=631.25 && vers <=637.21) {curSlide=52; rectoVerso="v"; seiteKorrektur();}
if (vers >=637.22 && vers <=643.18) {curSlide=53; rectoVerso="r"; seiteKorrektur();}

//Leerseite auf Bl. 53vif

if (vers >=643.19 && vers <=649.16) {curSlide=54; rectoVerso="r"; seiteKorrektur();}
if (vers >=649.17 && vers <=653.08) {curSlide=54; rectoVerso="v"; seiteKorrektur();}
if (vers >=653.09 && vers <=659.01) {curSlide=55; rectoVerso="r"; seiteKorrektur();}
if (vers >=659.02 && vers <=664.16) {curSlide=55; rectoVerso="v"; seiteKorrektur();}
if (vers >=664.17 && vers <=670.03) {curSlide=56; rectoVerso="r"; seiteKorrektur();}
if (vers >=670.04 && vers <=675.22) {curSlide=56; rectoVerso="v"; seiteKorrektur();}
if (vers >=675.23 && vers <=681.10) {curSlide=57; rectoVerso="r"; seiteKorrektur();}
if (vers >=681.11 && vers <=686.28) {curSlide=57; rectoVerso="v"; seiteKorrektur();}
if (vers >=686.29 && vers <=692.16) {curSlide=58; rectoVerso="r"; seiteKorrektur();}
if (vers >=692.17 && vers <=697.30) {curSlide=58; rectoVerso="v"; seiteKorrektur();}
if (vers >=698.00 && vers <=703.07) {curSlide=59; rectoVerso="r"; seiteKorrektur();}
if (vers >=703.08 && vers <=708.09) {curSlide=59; rectoVerso="v"; seiteKorrektur();}
if (vers >=708.10 && vers <=713.14) {curSlide=60; rectoVerso="r"; seiteKorrektur();}
if (vers >=713.15 && vers <=718.20) {curSlide=60; rectoVerso="v"; seiteKorrektur();}
if (vers >=718.21 && vers <=723.28) {curSlide=61; rectoVerso="r"; seiteKorrektur();}
if (vers >=723.29 && vers <=729.06) {curSlide=61; rectoVerso="v"; seiteKorrektur();}
if (vers >=729.07 && vers <=734.17) {curSlide=62; rectoVerso="r"; seiteKorrektur();}
if (vers >=734.18 && vers <=740.05) {curSlide=62; rectoVerso="v"; seiteKorrektur();}
if (vers >=740.06 && vers <=745.23) {curSlide=63; rectoVerso="r"; seiteKorrektur();}
if (vers >=745.24 && vers <=751.08) {curSlide=63; rectoVerso="v"; seiteKorrektur();}
if (vers >=751.09 && vers <=756.23) {curSlide=64; rectoVerso="r"; seiteKorrektur();}
if (vers >=756.24 && vers <=762.11) {curSlide=64; rectoVerso="v"; seiteKorrektur();}
if (vers >=762.12 && vers <=767.29) {curSlide=65; rectoVerso="r"; seiteKorrektur();}
if (vers >=767.30 && vers <=774.28) {curSlide=65; rectoVerso="v"; seiteKorrektur();}
if (vers >=774.29 && vers <=780.13) {curSlide=66; rectoVerso="r"; seiteKorrektur();}
if (vers >=780.14 && vers <=785.24) {curSlide=66; rectoVerso="v"; seiteKorrektur();}
if (vers >=785.25 && vers <=791.07) {curSlide=67; rectoVerso="r"; seiteKorrektur();}
if (vers >=791.08 && vers <=796.23) {curSlide=67; rectoVerso="v"; seiteKorrektur();}
if (vers >=796.24 && vers <=802.06) {curSlide=68; rectoVerso="r"; seiteKorrektur();}
if (vers >=802.07 && vers <=807.13) {curSlide=68; rectoVerso="v"; seiteKorrektur();}
if (vers >=807.14 && vers <=812.19) {curSlide=69; rectoVerso="r"; seiteKorrektur();}
if (vers >=812.20 && vers <=817.30) {curSlide=69; rectoVerso="v"; seiteKorrektur();}
if (vers >=818.00 && vers <=823.18) {curSlide=70; rectoVerso="r"; seiteKorrektur();}
if (vers >=823.19 && vers <=827.30) {curSlide=70; rectoVerso="v"; seiteKorrektur();}

}

if (vWerk=="vTiturel") {

if (vers < 1) {alert("Der erste Vers des Titurel ist 1.01"); document.form1.Vers.value=""; return;}
if (vers > 170.04) {alert("Der letzte Vers des Titurel ist 175.04"); document.form1.Vers.value=""; return;}

//Titurel
if (vers >=1.00 && vers <=28.04) {curSlide=71; rectoVerso="r"; seiteKorrektur();}
if (vers >=29.00 && vers <=61.04) {curSlide=71; rectoVerso="v"; seiteKorrektur();}
if (vers >=62.00 && vers <=90.04) {curSlide=72; rectoVerso="r"; seiteKorrektur();}
if (vers >=90.05 && vers <=113.02) {curSlide=72; rectoVerso="v"; seiteKorrektur();}
if (vers >=113.03 && vers <=138.03) {curSlide=73; rectoVerso="r"; seiteKorrektur();}
if (vers >=138.04 && vers <=161.02) {curSlide=73; rectoVerso="v"; seiteKorrektur();}
if (vers >=161.03 && vers <=175.04) {curSlide=74; rectoVerso="r"; seiteKorrektur();}

}

}

function seiteKorrektur() {
	
	if (zoom==50 && rectoVerso=="v") {curSlide++;}

linkeSeite = curSlide+rectoVerso;
showSlide();
}