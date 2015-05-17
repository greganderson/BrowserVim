if (window == top) {
	window.addEventListener('keypress', doKeyPress, false); //add the keyboard handler
}
 
trigger_key_j = 106; // j
trigger_key_k = 107; // k
trigger_key_g = 103; // g
trigger_key_G = 71; // G
trigger_key_d = 100; // d
trigger_key_u = 117; // u
trigger_key_n = 110; // n
trigger_key_forward_slash = 47;
var keyword = null;

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
	// Scroll half a screen down
	else if (e.keyCode == trigger_key_d) {
		window.scrollBy(0,window.innerHeight/2);
	}
	// Scroll half a screen up
	else if (e.keyCode == trigger_key_u) {
		window.scrollBy(0,window.innerHeight/(-2));
	}
    else if (e.keyCode == trigger_key_forward_slash) {
        keyword = window.prompt("Search");
        window.find(keyword, false, false);
    }
    else if (e.keyCode == trigger_key_n) {
        if(!window.find(keyword, false, false)) {
            while (window.find(keyword, false, true)){
            };
        }
    }
	else {
		alert(e.keyCode);
	}
}
