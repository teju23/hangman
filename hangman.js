window.onload = function () {
  var category = [
    ['salad', 'sandwich', 'bread', 'steak', 'tuna', 'steak', 'fish', 'rice', 'spaghetti'],
    ['gumbo', 'calas', 'juba', 'milkshake']
  ]
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  var score=0;
  var guess = "";
  var guesses ;
  var lives ;
  var counter;
  var space ;
  const letter="";
  const guessWord = [];
  var word;
  var choosecategory;
  let j = "";
  var res = '';
  var showLives = document.getElementById('mylives');
  var hintWord = document.getElementById('hint');
    var wordHolder = document.getElementById('hold');
    var showScore=document.getElementById('myScore');
  play = () => {
     
       index = Math.floor(Math.random() * category.length);
       choosecategory = category[index];
       word = choosecategory[Math.floor(Math.random() * choosecategory.length)];
      guesses = [];
      lives = 10;
      counter = 0;
      space = 0;
      buttons();
      result();
      mesg();
    }
  result = function () {
     wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');
    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('p');
      guess.setAttribute('class', 'guess');
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
  }

  check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          guessWord[i] = guess;
          //  console.log(word[i]);
          //  counter += 1;
        }
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        mesg();
        console.log(lives);
      }
      var dashIndex = guessWord.indexOf("_");
      if (dashIndex === -1 && lives>1) {
        
        showLives.innerHTML =`Good job`;
        console.log('Good job!!!');
         alert('Congratulations!!!you have found the word');

      }
    }
  }

  var buttons = () => {
    mybuttons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('span');
      list.id = 'letter';
      list.innerHTML = `${alphabet[i]}`;
      check();
      mybuttons.appendChild(letters);
      letters.appendChild(list);
    }
  }
  mesg = () => {
   showLives.innerHTML = `You have ${lives} lives`;

    if (lives < 1) {
      showLives.innerHTML = 'Game Over';
      alert('Game over!!');
      } else{
         
         score = lives * 10;
         showScore.innerHTML = `Your score is: ${score}`;
      }
  }

 nextword=()=>{
   letters.parentNode.removeChild(letters);
   correct.parentNode.removeChild(correct);
   play();
   score += score;
    
 }
  play();
}