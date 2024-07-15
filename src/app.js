/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const suits = ["♥", "♠", "♣", "♦"];
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

function getRandomCard() {
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  return { suit: randomSuit, value: randomValue };
}

function displayRandomCard() {
  const card = getRandomCard();

  const cardSuitTop = document.getElementById("cardSuitTop");
  const cardValue = document.getElementById("cardValue");
  const cardSuitBottom = document.getElementById("cardSuitBottom");

  cardSuitTop.textContent = card.suit;
  cardValue.textContent = card.value;
  cardSuitBottom.textContent = card.suit;

  if (card.suit === "♥" || card.suit === "♦") {
    cardSuitTop.style.color = "red";
    cardSuitBottom.style.color = "red";
  } else {
    cardSuitTop.style.color = "black";
    cardSuitBottom.style.color = "black";
  }
}

window.onload = displayRandomCard;
