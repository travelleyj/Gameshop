const API_KEY = "63e5253f478852088da67f60";
const date = new Date().toDateString();

const getPlays = async () => {
  const response = await fetch(`https://api.restdb.io/rest/plays?q={"date":"${date}"}`, {
    headers: {
      "Content-Type": "application/json",
      "x-apikey": API_KEY,
    },
  });
  const data = await response.json();
  return data;
};

const checkMaxPlays = async () => {
    const plays = await getPlays();
    if (plays.length >= 3) {
      maxPlaysDisplay.style.display = "block";
      maxPlaysDisplay.innerHTML = "You have reached the maximum number of plays for today. Please come back tomorrow.";
      return false;
    }
    return true;
  };

const addPlay = async () => {
const date = new Date().toDateString();
const response = await fetch("https://api.restdb.io/rest/plays", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    "x-apikey": API_KEY,
    },
    body: JSON.stringify({ date }),
});
};

const startGame = async () => {
    const isAllowed = await checkMaxPlays();
    if (!isAllowed) {
      return;
    }
    
    await addPlay();
  };


const backButton = document.querySelector("#back-button");
backButton.addEventListener("click", function() {
  window.history.back();
});

const dinosaur = document.querySelector("#dinosaur");
const obstacle = document.querySelector(".obstacle");
const gameWindow = document.querySelector("#game-window");
const scoreDisplay = document.querySelector("#score");
const gameOverDisplay = document.querySelector("#game-over");

let score = 0;
let canJump = true;
let gameInterval = null;

const jump = () => {
  if (!canJump) {
    return;
  }

  canJump = false;
  setTimeout(() => {
    canJump = true;
  }, 100);

  dinosaur.style.bottom = "100px";
  setTimeout(() => {
    dinosaur.style.bottom = "0";
  }, 500);
};

const moveObstacle = () => {
  const obstacleLeft = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("right")
  );
  const dinosaurLeft = parseInt(
    window.getComputedStyle(dinosaur).getPropertyValue("left")
  );
  const dinosaurBottom = parseInt(
    window.getComputedStyle(dinosaur).getPropertyValue("bottom")
  );
  const obstacleWidth = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("width")
  );
  const dinosaurWidth = parseInt(
    window.getComputedStyle(dinosaur).getPropertyValue("width")
  );
  const dinosaurHeight = parseInt(
    window.getComputedStyle(dinosaur).getPropertyValue("height")
  );
  if (obstacleLeft <= dinosaurLeft + dinosaurWidth && obstacleLeft + obstacleWidth >= dinosaurLeft && dinosaurBottom <= 50) {
    clearInterval(gameInterval);
    gameOverDisplay.style.display = "block";
    gameOverDisplay.innerHTML = "Game Over! Score: " + score;
  }
  else if (obstacleLeft < -50) {
    obstacle.style.right = "100%";
    score++;
    scoreDisplay.innerHTML = "Score: " + score;
  } else {
    obstacle.style.right = obstacleLeft - 5 + "px";
  }
};

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    jump();
  }
});

gameInterval = setInterval(moveObstacle, 20);