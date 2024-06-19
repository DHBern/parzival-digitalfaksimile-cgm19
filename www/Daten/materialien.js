var erlaeuterungen;

window.addEventListener('load', function() {
  setListeners();
});

function setListeners() {
erlaeuterungen = document.getElementById('erlaeuterungen');
erlaeuterungen.addEventListener("click", function() {
  erlFenster('stil.html');
});
}

