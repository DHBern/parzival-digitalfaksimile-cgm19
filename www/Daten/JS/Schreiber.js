function checkHand() {

schreiber="";

if (zoom==50) {
	
	if (curSlide>=1 && curSlide<=32) {schreiber="Schreiber I";}
	if (curSlide==23) {schreiber="Schreiber I/IA";}
	if (curSlide==33) {schreiber="Schreiber I/II";}
	if (curSlide>=34 && curSlide<=54) {schreiber="Schreiber II";}
		
	//Bilder
	if (curSlide==50) {schreiber=""; return}
	
	if (curSlide==55) {schreiber="Schreiber II/III";}
	if (curSlide>=56 && curSlide<=68) {schreiber="Schreiber III";}
	if (curSlide==69) {schreiber="Schreiber IV/III/V";}
	if (curSlide==70) {schreiber="Schreiber V/III";}
	if (curSlide==71) {schreiber="Schreiber III/I";}
	if (curSlide>=72 && curSlide<=74) {schreiber="Schreiber I";}
	if (curSlide==75) {schreiber="(Federproben) / Schreiber VII";}
	if (curSlide==76) {schreiber="Schreiber VI";}
	}

else {
	//Einband innen (vorne)
	if (curSlide==0) {schreiber="";}
	
	if (curSlide>=1 && curSlide<=32) {schreiber="Schreiber I";}
	if (curSlide==22 && rectoVerso=="v") {schreiber="Schreiber I/IA";}
	if (curSlide==32 && rectoVerso=="v") {schreiber="Schreiber I/II";}
	if (curSlide>=33 && curSlide<=54) {schreiber="Schreiber II";}
	
	//Bilder
	if (curSlide==49 && rectoVerso=="r") {schreiber=""; return}
	if (curSlide==49 && rectoVerso=="v") {schreiber=""; return}
	if (curSlide==50 && rectoVerso=="r") {schreiber=""; return}
	if (curSlide==50 && rectoVerso=="v") {schreiber=""; return}
	
	//Leere Seite
	if (curSlide==53 && rectoVerso=="v") {schreiber=""; return}
	
	if (curSlide>=55 && curSlide<=68) {schreiber="Schreiber III";}
	if (curSlide==68 && rectoVerso=="v") {schreiber="Schreiber III/IV";}
	if (curSlide==69 && rectoVerso=="r") {schreiber="Schreiber IV/III/V";}
	if (curSlide==69 && rectoVerso=="v") {schreiber="Schreiber V/III";}
	if (curSlide==70 && rectoVerso=="r") {schreiber="Schreiber III";}
	if (curSlide==70 && rectoVerso=="v") {schreiber="Schreiber III";}
	if (curSlide>=71 && curSlide<=74) {schreiber="Schreiber I";}
	if (curSlide==75 && rectoVerso=="r") {schreiber="Schreiber VII";}
	if (curSlide==75 && rectoVerso=="v") {schreiber="Schreiber VI";}
	
	
	//Schriftproben
	if (curSlide==74 && rectoVerso=="v") {schreiber="(Federproben)"; return}
	
	
	
	//Einband innen (hinten)
	if (curSlide==76) {schreiber=""; return}	
		
	}


}