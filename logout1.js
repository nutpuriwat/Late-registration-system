function LogOut(){
	alert("คุณได้ออกจากระบบ");
	window.location.href = "index.html";
}
var timer = document.getElementById("timer");
var duration = 10; // duration in seconds

setInterval(updateTimer, 1000);

function updateTimer() {
	duration--;
	if ( duration < 1 ) {
		LogOut();
	} 
}

window.addEventListener("mousemove", resetTimer);
window.addEventListener("keypress", resetTimer);

function resetTimer() {
	duration = 900;
}

