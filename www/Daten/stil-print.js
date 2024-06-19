function doPrint()
{
    //Nicht zu druckende Elemente ausblenden.
    document.images[0].style.visibility="hidden";
    document.images[1].style.visibility="hidden";
    document.form1.schliessen.style.visibility = "hidden";

    //Drucken
    window.print();

    //Nicht zu druckende Elemente wieder einblenden.
    document.images[0].style.visibility="visible";
    document.images[1].style.visibility="visible";
    document.form1.schliessen.style.visibility = "visible";

}