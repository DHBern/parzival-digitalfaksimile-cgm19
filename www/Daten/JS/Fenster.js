function infoFenster(URL1) {

var breite = 500
var hoehe = 500
links=(screen.width-breite)/2 
oben=(screen.height-hoehe)/4 

F1=open(URL1,"","scrollbars=yes, resizable=yes, status=yes, width="+ breite+",height="+ hoehe+",top="+ oben+",screenY="+oben+",left="+ links+",screenX="+links)
}


function grossFenster(URL2) {

var breite = screen.availWidth-10;
var hoehe = screen.availHeight-10;
links=0
oben=0 

F1=open(URL2,"","scrollbars=yes, resizable=yes, status=yes, width="+ breite+",height="+ hoehe+",top="+ oben+",screenY="+oben+",left="+ links+",screenX="+links)
F1.resizeTo(screen.availWidth,screen.availHeight);
}


function transkriptionen(URL3) {

var breite = screen.availWidth-10;
var hoehe = screen.availHeight-10;
links=0
oben=0 

F1=open(URL3,"","scrollbars=yes, resizable=yes, status=yes, width="+ breite+",height="+ hoehe+",top="+ oben+",screenY="+oben+",left="+ links+",screenX="+links)
F1.resizeTo(screen.availWidth,screen.availHeight);

}


function initialenInfoFenster(URL4) {

var breite = 500
var hoehe = 500
links=(screen.width-breite)/2 
oben=(screen.height-hoehe)/4 

F1=open(URL4,"","scrollbars=yes, resizable=yes, status=yes, width="+ breite+",height="+ hoehe+",top="+ oben+",screenY="+oben+",left="+ links+",screenX="+links)
}


function erlFenster(URL5) {

var breite = 800
var hoehe = 500
links=(screen.width-breite)/2 
oben=(screen.height-hoehe)/4 

F1=open(URL5,"","scrollbars=yes, resizable=yes, status=yes, width="+ breite+",height="+ hoehe+",top="+ oben+",screenY="+oben+",left="+ links+",screenX="+links)
}