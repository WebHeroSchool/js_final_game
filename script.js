const button = document.getElementById("section__start-game");
const level = document.getElementById("section__level");
const game = document.querySelector(".section-game");

// выбор уровня
let difficulty = document.querySelectorAll(".section__level-level");
difficulty.forEach(level => {
  level.addEventListener("click", () => {
    difficulty.forEach(lvl => lvl.classList.remove("rhomb"));
    level.classList.add("rhomb");
  });
})

// убрать карты
function removeCards() {
  document.querySelector(".section").style.display = "block";
  game.style.display = "none";
  game.innerHTML = '';
  game.className = "section-game";
}

// показать карты
function showCard(number) {
  for (let i=0; i<number; i++) {
    let card = document.createElement ("div");
    let cardInside = document.createElement ("div");
    let cardFront = document.createElement ("div");
    let cardBack = document.createElement ("div");

    card.className = "throw-card";
    game.appendChild(card);

    cardInside.className = "card-inside";
    card.appendChild(cardInside);

    cardFront.className = "card-front";
    cardInside.appendChild(cardFront);

    cardBack.className = "card-back";
    cardInside.appendChild(cardBack);

    let rotate = () => {
      let number = Math.round(Math.random());
      cardInside.classList.toggle("rotate");
      if (number === 1) cardBack.classList.add("card-bug");
      let cards = document.querySelectorAll(".throw-card");
      cards.forEach(card => card.addEventListener("click", removeCards));
      };
      card.addEventListener("click", rotate);
  }
}

// простой, средний, сложный уровни
function chooseDifficulty(level) {
	if (level === "Простой") {
		showCard(3);
		game.classList.add("easy");
	} else if (level === "Средний") {
		showCard(6);
		game.classList.add("normal");
	} else {
		showCard(10);
		game.classList.add("hard");
	}

}

// старт игры
function startGame() {
  let level = document.querySelector(".rhomb").innerText;
  chooseDifficulty(level);
  document.querySelector(".section").style.display = "none";
  game.style.display = "flex";
}

button.addEventListener("click", startGame);