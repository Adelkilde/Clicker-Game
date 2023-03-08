"use strict";
window.addEventListener("load", ready);

let points = 0;
let lives = 0;
let isGameRunning = false;

function ready() {
    console.log("JavaScript ready!");
    document.querySelector("#game").classList.add("hidden");
    document.querySelector("#btn_start").addEventListener("click", start);
    document.querySelector("#btn_restart").addEventListener("click", start); 
    document.querySelector("#btn_go_to_start").addEventListener("click", showStartScreen);
  
  }

function showGameScreen() {
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
  document.querySelector("#game").classList.remove("hidden");
}


function showStartScreen() {
  document.querySelector("#game").classList.add("hidden")
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

function resetLives() {
  lives = 3;
  document.querySelector("#balls1").classList.remove("broken_balls");
  document.querySelector("#balls2").classList.remove("broken_balls");
  document.querySelector("#balls3").classList.remove("broken_balls");
  document.querySelector("#balls1").classList.add("active_balls");
  document.querySelector("#balls2").classList.add("active_balls");
  document.querySelector("#balls3").classList.add("active_balls");
}

function resetPoints() {
  points = 0;
  displayPoints();
}

function start() {
  isGameRunning = true;
  

  resetLives()
  resetPoints()
  showGameScreen()

  // document.querySelector("#sound_epicgamer").play

  startAllAnimations();
  startTimer();

  document.querySelector("#gamergunk1_container").addEventListener("click", clickGunk);
  document.querySelector("#gamergunk2_container").addEventListener("click", clickGunk);
  document.querySelector("#gamergunk3_container").addEventListener("click", clickGunk);
  document.querySelector("#stinkypants_container").addEventListener("click", clickPants);
  document.querySelector("#chadsoap_container").addEventListener("click", clickSoap);
  document.querySelector("#hairyballs_container").addEventListener("click", clickBalls);

  document.querySelector("#gamergunk1_container").addEventListener("animationiteration", gunkRestart);
  document.querySelector("#gamergunk2_container").addEventListener("animationiteration", gunkRestart);
  document.querySelector("#gamergunk3_container").addEventListener("animationiteration", gunkRestart);
  document.querySelector("#stinkypants_container").addEventListener("animationiteration", pantsRestart);
}

function startAllAnimations() {
document.querySelector("#gamergunk1_container").classList.add("falling");
document.querySelector("#gamergunk2_container").classList.add("falling");
document.querySelector("#gamergunk3_container").classList.add("falling");
document.querySelector("#stinkypants_container").classList.add("falling");
document.querySelector("#chadsoap_container").classList.add("falling");
document.querySelector("#hairyballs_container").classList.add("falling");

document.querySelector("#gamergunk1_container").classList.add("position1");
document.querySelector("#gamergunk2_container").classList.add("position2");
document.querySelector("#gamergunk3_container").classList.add("position3");
document.querySelector("#stinkypants_container").classList.add("position3");
document.querySelector("#chadsoap_container").classList.add("position4");
document.querySelector("#hairyballs_container").classList.add("position5");

document.querySelector("#gamergunk1_container").classList.add("speed1");
document.querySelector("#gamergunk2_container").classList.add("speed1");
document.querySelector("#gamergunk3_container").classList.add("speed1");
document.querySelector("#stinkypants_container").classList.add("speed1");
document.querySelector("#chadsoap_container").classList.add("speed1");
document.querySelector("#hairyballs_container").classList.add("speed1");
}

function clickGunk() {
  console.log("Click gunk");
  const gunk = this;

  gunk.removeEventListener("click", clickGunk);
  gunk.classList.add("paused");
  gunk.querySelector("img").classList.add("zoom_out");
  gunk.addEventListener("animationend", gunkGone);

  incrementPoints();
}

function gunkGone() {
  console.log("gunk gone");
  const gunk = this;

  gunk.removeEventListener("animationend", gunkGone);
  gunk.querySelector("img").classList.remove("zoom_out");
  gunk.classList.remove("paused");

  if (isGameRunning) {
  gunkRestart.call(this);
  }

  gunk.addEventListener("click", clickGunk);
}

function gunkRestart() {
  console.log("gunk restart");
  const gunk = this;

  gunk.classList.remove("position1","position2","position3","position4","position5");
  const p = Math.ceil(Math.random() * 5);
  gunk.classList.add(`position${p}`);

  gunk.classList.remove("speed1", "speed2", "speed3");
  const s = Math.ceil(Math.random() * 3);
  gunk.classList.add(`speed${s}`);
  
  gunk.classList.remove("falling");
  gunk.offsetWidth;
  gunk.classList.add("falling");
}

function clickPants() {
  console.log("Click pants");
  const pants = this;

  pants.removeEventListener("click", clickPants);
  pants.classList.add("paused");
  pants.querySelector("img").classList.add("sniff");
  pants.addEventListener("animationend", pantsGone);

  incrementPoints();
  incrementPoints();
}

function pantsGone() {
  console.log("pants gone");
  const pants = this;

  pants.removeEventListener("animationend", pantsGone);
  pants.querySelector("img").classList.remove("sniff");
  pants.classList.remove("paused");

  if (isGameRunning) {
  pantsRestart.call(this);
  }

  pants.addEventListener("click", clickPants);
}

function pantsRestart() {
  console.log("pants restart"); 
  const pants = this;

  pants.classList.remove("falling");
  pants.offsetWidth;
  pants.classList.add("falling");

  pants.classList.remove("position1","position2","position3","position4","position5");
  const p = Math.ceil(Math.random() * 5);
  pants.classList.add(`position${p}`);

  pants.classList.remove("speed1", "speed2", "speed3");
  const s = Math.ceil(Math.random() * 3);
  pants.classList.add(`speed${s}`);
}

function clickSoap() {
  console.log("Click soap");

  document.querySelector("#chadsoap_container").removeEventListener("click", clickSoap);
  document.querySelector("#chadsoap_container").classList.add("paused");
  document.querySelector("#chadsoap_sprite").classList.add("zoom_in");
  document.querySelector("#chadsoap_container").addEventListener("animationend", soapGone);

  // document.querySelector("#sound_bomb").currentTime = 0;
  // document.querySelector("#sound_bomb").play();

  decrementLives();
}

function soapGone() {
  document.querySelector("#chadsoap_container").removeEventListener("animationend", soapGone);
  document.querySelector("#chadsoap_sprite").classList.remove("zoom_in");

  document.querySelector("#chadsoap_container").classList.remove("paused");

  if (isGameRunning) {
    document.querySelector("#chadsoap_container").classList.remove("falling");
    document.querySelector("#chadsoap_container").offsetWidth;
    document.querySelector("#chadsoap_container").classList.add("falling");

    document.querySelector("#chadsoap_container").classList.remove("position1","position2","position3","position4","position5",);
    let position = Math.floor(Math.random() * 5) + 1;
    document.querySelector("#chadsoap_container").classList.add("position" + position);

    document.querySelector("#chadsoap_container").addEventListener("click", clickSoap);
  }
}

function clickBalls() {
  console.log("Click balls");
  document.querySelector("#hairyballs_container").removeEventListener("click", clickBalls);
  document.querySelector("#hairyballs_container").classList.add("paused");
  document.querySelector("#hairyballs_sprite").classList.add("glow");
  document.querySelector("#hairyballs_container").addEventListener("animationend", ballsGone);

  // document.querySelector("#sound_success").currentTime = 0;  
  // document.querySelector("#sound_success").play();

    if (lives < 3) {
    incrementLives();
    }
}

function ballsGone() {
  document.querySelector("#hairyballs_container").removeEventListener("animationend", ballsGone);
  document.querySelector("#hairyballs_sprite").classList.remove("glow");

  document.querySelector("#hairyballs_container").classList.remove("paused");

  if (isGameRunning) {
    document.querySelector("#hairyballs_container").classList.remove("falling");
    document.querySelector("#hairyballs_container").offsetWidth;
    document.querySelector("#hairyballs_container").classList.add("falling");

    document.querySelector("#hairyballs_container").classList.remove("position1","position2","position3","position4","position5",);
    let position = Math.floor(Math.random() * 5) + 1;
    document.querySelector("#hairyballs_container").classList.add("position" + position);

    document.querySelector("#hairyballs_container").addEventListener("click", clickBalls);
  }
}


function incrementPoints() {
  console.log("Give point");
  points++;
  console.log("Current " + points + "points");
  // if (points === 2) {
  //   levelComplete();
  // }
  displayPoints();
}

// function decrementPoints() {
//   console.log("Lose point");
//   points--;
//   console.log("Current " + points + "points");
//   displayPoints();
// }

function displayPoints() {
  console.log("Show points");
  document.querySelector("#gunk_count").textContent = points;
}

function decrementLives() {
  console.log("Lose health");

  showDecrementedLives();
  lives--;

  if (lives === 0) {
  gameOver();
  }

}

function incrementLives() {
  console.log("Get health");
  lives++;
  showIncrementedLives();
}

function showDecrementedLives() {
  document.querySelector("#balls" + lives).classList.remove("active_balls");
  document.querySelector("#balls" + lives).classList.add("broken_balls");
}

function showIncrementedLives() {
  document.querySelector("#balls" + lives).classList.remove("broken_balls");
  document.querySelector("#balls" + lives).classList.add("active_balls");
}

function gameOver() {
  console.log("Game Over");
  document.querySelector("#game_over").classList.remove("hidden");
  stopGame();
  // document.querySelector("#sound_epicfail").play();
  document.querySelector("#game_over_gunk").textContent = points;
}

function levelComplete() {
  console.log("Level Complete");
  document.querySelector("#level_complete").classList.remove("hidden");
  stopGame();
  // document.querySelector("#sound_epicwin").play();
  document.querySelector("#level_complete_gunk").textContent = points;
}

function startTimer() {
  document.querySelector("#time_sprite").classList.add("shrink");
  document.querySelector("#time_sprite").addEventListener("animationend", timeIsUp);
}

function timeIsUp() {
  console.log("Time's up!");

  if (points >= 15) {
  levelComplete();
  } else {
  gameOver();
  }
}

function stopGame() {
  isGameRunning = false;

  document.querySelector("#gamergunk1_container").classList.remove("falling");
  document.querySelector("#gamergunk2_container").classList.remove("falling");
  document.querySelector("#gamergunk3_container").classList.remove("falling");
  document.querySelector("#stinkypants_container").classList.remove("falling");
  document.querySelector("#chadsoap_container").classList.remove("falling");
  document.querySelector("#hairyballs_container").classList.remove("falling");

  document.querySelector("#gamergunk1_container").removeEventListener("click", clickGunk);
  document.querySelector("#gamergunk2_container").removeEventListener("click", clickGunk);
  document.querySelector("#gamergunk3_container").removeEventListener("click", clickGunk);
  document.querySelector("#stinkypants_container").removeEventListener("click", clickPants);
  document.querySelector("#chadsoap_container").removeEventListener("click", clickSoap);
  document.querySelector("#hairyballs_container").removeEventListener("click", clickBalls);

  // document.querySelector("#sound_dreams").pause();
  // document.querySelector("#sound_dreams").currentTime = 0;

  document.querySelector("#time_sprite").classList.remove("shrink");
}