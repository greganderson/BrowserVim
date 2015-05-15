if (window == top) {
	window.addEventListener('keypress', doKeyPress, false); //add the keyboard handler
}
 
trigger_key_j = 106; // j
trigger_key_k = 107; // k
trigger_key_g = 103; // g
trigger_key_G = 71; // G
function doKeyPress(e){
	// Make sure the user isn't in a text box trying to type
	if (document.activeElement.nodeName == 'TEXTAREA' || document.activeElement.nodeName == 'INPUT') {
		return;
	}
	// Scroll down
	if (e.keyCode == trigger_key_j){
		window.scrollBy(0,50);
	}
	// Scroll up
	else if (e.keyCode == trigger_key_k) {
		window.scrollBy(0,-50);
	}
	// Scroll to top
	else if (e.keyCode == trigger_key_g) {
		window.scrollTo(0,0);
	}
	// Scroll to bottom
	else if (e.keyCode == trigger_key_G) {
		window.scrollTo(0,document.body.scrollHeight);
	}
	else {
		alert(e.keyCode);
	}
}
