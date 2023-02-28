"use strict"
window.addEventListener("load", start)

let points = 0;
let lives = 0;

function start() {
    console.log("JavaScript Runs!")

    points = 0;
    lives = 3;

    startAnimations();
    startPositions();
    registerClick();
    restartPositions();
}

function startAnimations(){
  document.querySelector("#gamergunk1_container").classList.add("falling");
  document.querySelector("#gamergunk2_container").classList.add("falling");
  document.querySelector("#gamergunk3_container").classList.add("falling");
  document.querySelector("#stinkypants_container").classList.add("falling");
  document.querySelector("#chadsoap_container").classList.add("falling");
  document.querySelector("#hairyballs_container").classList.add("falling");
}
function startPositions(){}
function registerClick(){}
function restartPositions(){}

function gunkClicked() {
  console.log("Click gunk");
  const gunk = this;

  gunk.removeEventListener("click", clickGunk);
}

function gunkGone() {

}

function gunkClicked() {}

function gunkGone() {}

function gunkRestart() {}

function underwearClicked() {}

function underwearGone() {}

function soapClicked() {}

function soapGone() {}

function ballsClicked() {}

function ballsGone() {}

function incrementPoints() {}

function displayPoints() {
  console.log("show points")
  document.querySelector("#gunk_count").textContent = points;
}

function decrementLives() {}