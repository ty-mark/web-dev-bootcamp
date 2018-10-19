var p1b = document.querySelector("#p1");
var p2b = document.querySelector("#p2");
var setScore = document.querySelector("#setScore");
var reset = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
// var numInput = document.querySelector("input");
var numInput = document.getElementsByName("target")[0];
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;



p1b.addEventListener("click", function(){
	if (!gameOver) {
		p1Score++;
		p1Display.textContent = p1Score;
		if (p1Score == winningScore || p2Score == winningScore) {
			gameOver = true;
			p1Display.style.color = "green";
		}
	}
	
})

p2b.addEventListener("click", function(){
	if (!gameOver) {
		p2Score++;
		p2Display.textContent = p2Score;
		if (p1Score == winningScore || p2Score == winningScore) {
			gameOver = true;
			p2Display.style.color = "green";
		}
	}
	
})

reset.addEventListener("click", function(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.style.color = "black";
	p2Display.style.color = "black";
	gameOver = false;
})

numInput.addEventListener("change", function(){
	setScore.textContent = this.value;
	winningScore = Number(this.value);
})