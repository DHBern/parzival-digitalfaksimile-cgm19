window.addEventListener('load', function() {
	// set the variables needed
	verschieben(this.parent.xPos,this.parent.yPos)
	
});

function verschieben(xPos,yPos) {
	//alert("verschieben");
console.log(xPos);
console.log(yPos);
	this.scrollTo(xPos,yPos);
	console.log('scrolled, yeah!!!');
}

function vollbild() {
// todo: replace
	var content='<html><body marginwidth=\"0\" marginheight=\"0\" topmargin=\"0\" leftmargin=\"0\"><img src=\"g071r.jpg\" onClick=\"self.close()\"></body></html>';
	//alert(content);
	var breite=screen.availWidth;
	var hoehe=screen.availHeight;
	var ff=window.open("","","width=breite,height=hoehe,scrollbars,resizable,");
	ff.document.open();
	ff.document.write(content);
	ff.document.close();
};

function fenster(url) {
	var hoehe = screen.availHeight;
	var breite = screen.availWidth;
	var win;
	win=window.open (url, "Faksimilefenster", "width=breite,height=hoehe,resizable=yes,scrollbars=yes, screenX=0, screenY=0");
	win.resizeTo(breite,hoehe),
	win.moveTo(0,0);
}
