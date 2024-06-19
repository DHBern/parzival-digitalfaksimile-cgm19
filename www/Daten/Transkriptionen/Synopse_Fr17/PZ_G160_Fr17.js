// Listen for messages from the frames and send it further to parent
window.addEventListener("message", function(event) {
    window.parent.postMessage(event.data, 'https://parzival.unibe.ch');
});

window.addEventListener('load', function() {
  initScrollSynchronization();
});


var tid;
function initScrollSynchronization () {
	tid = setInterval(() => syncFrame(), 25);
}
function syncFrame () {
	if (document.all && !window.opera) {
		var scrollTop = frame0.document.body.scrollTop;
		var scrollLeft = frame0.document.body.scrollLeft;
	} else {
		var scrollTop = frame0.pageYOffset;
		var scrollLeft = frame0.pageXOffset;
		}
	frame1.scrollTo (scrollLeft, scrollTop);
}

