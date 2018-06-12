"use strict";
window.onload = function() {
  let category = {
    food: [
      "salad",
      "sandwich",
      "bread",
      "steak",
      "tuna",
      "fish",
      "rice",
      "spaghetti",
      "gumbo",
      "calas",
      "juba",
      "milkshake"
    ],
    animal: [
      "cow",
      "bull",
      "hen",
      "cock",
      "bitch",
      "dog",
      "falcon",
      "fox",
      "frog",
      "fish",
      "zebra",
      "goose",
      "gorilla",
      "panda",
      "pig",
      "hippo",
      "horse",
      "hyena",
      "jaguar",
      "lobster",
      "leopard",
      "monkey",
      "ostrich",
      "mouse",
      "cat",
      "donkey",
      "panther",
      "penguin",
      "parrot"
    ],
    cricketer: [
      "sehwag",
      "sreesanth",
      "sachin",
      "kohli",
      "dhoni",
      "harbhajan",
      "zaheerkhan",
      "sureshraina",
      "virendersehwag"
    ]
  };
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  let score = 0;
  let totalScore = 0;
  let guess = "";
  let guesses;
  let lives;
  let counter;
  let space;
  let list;
  let letters  = "";
  let correct="";
  let guessWord = [];
  let word;
  let choosecategory = category.food;
  let j = "";
  let res = "";
  let showLives = document.getElementById("mylives");
  let hintWord = document.getElementById("hint");
  let wordHolder = document.getElementById("hold");
  let showScore = document.getElementById("myScore");
  let showTotal = document.getElementById("myTotal");
  let images = [
    "hang_6.gif",
    "hang_5.gif",
    "hang_4.gif",
    "hang_3.gif",
    "hang_2.gif",
    "hang_1.gif",
    "hang_0.gif"
  ];
  $("chooseCategory").change(
    (choosecategory) => {
      choosecategory = category[$("#chooseCategory option:selected").val()];
      nextword();
    });
  let play = () => {
    if (choosecategory === " ") {
      index = Math.floor(Math.random() * Object.keys(category).length);
      choosecategory = Object.values(category);
      word = choosecategory[Math.floor(Math.random() * choosecategory.length)];
    } else {
      word = choosecategory[Math.floor(Math.random() * choosecategory.length)];
    }
    guesses = [];
    guessWord = [];
    score = 0;
    lives = 6;
    counter = 0;
    space = 0;
    result();
    buttons();
    mesg();
  };
  let result = () => {
     wordHolder = document.getElementById("hold");
     correct = document.createElement("ul");
    for (let i = 0; i < word.length; i++) {
      correct.setAttribute("id", "my-word");
      guess = document.createElement("p");
      guess.setAttribute("class", "guess");
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }
      guessWord[i] = "_";
      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  };
  let buttons = () => {
    let mybuttons = document.getElementById("buttons");
     letters = document.createElement("ul");
    for (let i = 0; i < alphabet.length; i++) {
      letters.id = "alphabet";
       list = document.createElement("span");
      list.id = "letter";
      list.innerHTML = `${alphabet[i]}`;
      check();
      mybuttons.appendChild(letters);
      letters.appendChild(list);
    }
  };
  let check = function() {
    list.onclick = function() {
      let guess = this.innerHTML;
      this.setAttribute("class", "active");
      this.onclick = null;
      for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          guessWord[i] = guess;
        }
      }
      let j = word.indexOf(guess);
      if (j === -1) {
        lives -= 1;
        mesg();
        console.log(lives);
      }
      let dashIndex = guessWord.indexOf("_");
      if (dashIndex === -1 && lives > 0) {
        showLives.innerHTML = `Good job`;
        console.log("Good job!!!");
        alert("Congratulations!!!you have found the word");
        totalScore += score;
        showTotal.innerHTML = `Your total score: ${totalScore}`;
      }
    };
  };
let mesg = () => {
    showLives.innerHTML = `You have ${lives} lives`;
    let myElem = document.getElementById("Div1");
    if (myElem === null) {
      let x = document.createElement("IMG");
      x.setAttribute("id", "Div1");
      x.setAttribute("src", images[lives]);
      x.setAttribute("width", "300");
      x.setAttribute("height", "220");
      x.setAttribute("alt", "The Hangman");
      document.body.appendChild(x);
    } else {
      myElem.parentElement.removeChild(myElem);
      let x = document.createElement("IMG");
      x.setAttribute("id", "Div1");
      x.setAttribute("src", images[lives]);
      x.setAttribute("width", "300");
      x.setAttribute("height", "220");
      x.setAttribute("alt", "The Hangman");
      document.body.appendChild(x);
    }
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
      alert("Game over!!");
    } else {
      score = lives * 10;
      showScore.innerHTML = `Your score is: ${score}`;
    }
  };
let nextword = () => {
    letters.parentNode.removeChild(letters);
    correct.parentNode.removeChild(correct);
    play();
  };
  play();
};
