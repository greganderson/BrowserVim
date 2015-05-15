if (window == top) {
	window.addEventListener('keypress', doKeyPress, false); //add the keyboard handler
}
 
trigger_key_j = 106; // j key
trigger_key_k = 107; // k key
function doKeyPress(e){
	if (e.keyCode == trigger_key_j){
		window.scrollBy(0,50);
	}
	else if (e.keyCode == trigger_key_k) {
		window.scrollBy(0,-50);
	}
	else {
		alert(e.keyCode);
	}
}
