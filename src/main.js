/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function() {
//   let suit = ["club", "spade", "heart", "diamond"];
//   let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

//   function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   let card = document.querySelector(".card");
//   let cardnumber = document.querySelector("h1");

//   card.classList.add(suit[getRndInteger(0, suit.length)]);
//   cardnumber.innerHTML = number[getRndInteger(0, number.length)];
// };

function newcard() {
  console.log("newcard");
  let suit = ["club", "spade", "heart", "diamond"];
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let card = document.querySelector(".card");
  let cardnumber = document.querySelector("h1");

  card.classList.add(suit[getRndInteger(0, suit.length)]);
  cardnumber.innerHTML = number[getRndInteger(0, number.length)];
}

let suspect = [
  "https://deadline.com/wp-content/uploads/2018/11/miss-scarlet.jpg",
  "https://i.pinimg.com/originals/57/b4/88/57b488b62e595bc5664ee819867ff085.jpg"
];
