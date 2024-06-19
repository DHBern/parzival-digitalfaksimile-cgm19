window.addEventListener('message', function(event) {
  if (event.data.type === 'html') {
  	console.log(event);
    // update document with HTML content
    document.open();
    document.write(event.data.content);
    document.close();
  }
});


function writeIntoFrame(content) {
	var rechtsFrame = window.frames["rechts"];
	rechtsFrame.document.open();
    rechtsFrame.write(content);
    rechtsFrame.close();
}

function addListeners(){
	faksImg = document.getElementById('faksImg');
	faksImg.addEventListener("click", function() {
  		vollbild();
	});
}

function vollBild() {
	var content2='<html><body marginwidth=\"0\" marginheight=\"0\" topmargin=\"0\" leftmargin=\"0\"><img src=\"' + bildURL + '\" onClick=\"self.close()\"></body></html>';
    var breite=screen.availWidth;
	var hoehe=screen.availHeight;
    var ff=window.open("","","width=breite,height=hoehe,scrollbars,resizable,");
	// ff.document.open();
	// ff.document.write(content2);
    // ff.document.close();
}

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