"use strict"
window.addEventListener("load", start)

let points = 0;
let lives = 0;

function start() {
    console.log("JavaScript Runs!")

    points = 0;
    lives = 3;

    document.querySelector("#gamergunk_container").classList.add("falling");
    document.querySelector("#stinkypants_container").classList.add("falling");
    document.querySelector("#hairyballs_container").classList.add("falling");
    document.querySelector("#chadsoap_container").classList.add("falling");

    document.querySelector("#gamergunk_container").addEventListener("click", clickCoin);
  document.querySelector("#chadsoap_container").addEventListener("click", clickBomb);
}