const button = document.getElementById("section__start-game");
const level = document.getElementById("section-level");
const mainGame = document.querySelector(".section-game");

let difficulty = document.querySelectorAll(".section__level-level");
difficulty.forEach(level => {
	level.addEventListener("click", () => {
		difficulty.forEach(lvl => lvl.classList.remove("rhomb"));
		level.classList.add("rhomb");
	});
})

function startGame() {
	let level = document.querySelector(".rhomb").innerText;
	document.querySelector(".section").style.display = "none";
	mainGame.style.display = "flex";
}

button.addEventListener("click", startGame);