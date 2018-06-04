window.onload=function (){
  var category=
  [ ['salad','sandwich','bread','steak','tuna','steak','fish','rice','spaghetti' ],
   ['bat','beast','bogey','bogeyman','bones','boo' ,'broomstick','cackles','cape']]
   var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
     'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
     't', 'u', 'v', 'w', 'x', 'y', 'z'
   ];

   var guess;
   var guesses=[];
   var lives=10;
   const index = Math.floor(Math.random() * category.length);
   const choosecategory = category[index];
   const word = choosecategory[Math.floor(Math.random() * choosecategory.length)];
   
  
   // var str = document.getElementById("demo").innerHTML;
     result = function () {
         wordHolder = document.getElementById('hold');
         correct = document.createElement('ul');
  for (var i = 0; i < word.length; i++) {
    correct.setAttribute('id', 'my-word');
    guess = document.createElement('li');
    guess.setAttribute('class', 'guess');
    if (word[i] === "-") {
      guess.innerHTML = "-";
      space = 1;
    } else {
      guess.innerHTML = "_";
    }

    guesses.push(guess);
    wordHolder.appendChild(correct);
    correct.appendChild(guess);
  }
  }
  mesg=()=>{
    for(var i=0;i<guesses.length;i++){
      if(word[i]==guess[i]){
        console.log("Correct!");
      }
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
             console.log(word[i]);
            //  counter += 1;
           }
         }
         var j=(word.indexOf(guess));
         if(j===-1){
           lives-=1;
           console.log(lives);
         }
        }
   }

    var buttons =function(){
      mybuttons=document.getElementById('buttons');
      letters=document.createElement('ul');
    
    for(var i=0;i<alphabet.length;i++){
      letters.id='alphabet';
      list = document.createElement('li');
      list.id='letter';
      list.innerHTML=alphabet[i];
      check();
      mybuttons.appendChild(letters);
      letters.appendChild(list);
    }
  }
// const arr = ['zaxes', 'zinky', 'jumps','jumbo'];
let j="";
var str="";
var res='';
var guess="";
buttons();
result();
mesg();
}