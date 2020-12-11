var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	}

function generate(){
	var letter = '0123456789ABCDEF';
	var ran1 = "#";
	var ran2 = "#";
	for (var i=0; i<6; i++) {
	 ran1 = ran1 + letter[Math.floor(Math.random()*16)];
	 ran2 = ran2 + letter[Math.floor(Math.random()*16)];
	}
	color1.value = ran1;
	color2.value = ran2;
	setGradient();
}



body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", generate);