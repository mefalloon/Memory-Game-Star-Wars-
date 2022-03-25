//state of its loading process.
//once loaded -- it will call the fuction given
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loaded());
} else {
  // if not its already loaded
  loaded();
}

// grab all overlays from Dom
function loaded() {
  let overlays = Array.from(document.getElementsByClassName("overlay-text"));

  //Create a way to add a event listener for all overlays
  overlays.forEach((overlay) => {
    //for each overlay we want to add a listener
    overlay.addEventListener("click", () => {
      overlay.classList.remove("visible");
    });
  });

 timerBegins()
}
////// Variables
const allCards = document.querySelectorAll(".cards");
const winner = document.querySelector('.winner');
const timer = document.querySelector('#countdown');
let turnedCard = false;
let cardA, cardB;
let total = 0;
let seconds = 100;


function timerBegins(total){
    setInterval(()=>{
        seconds = seconds - 1
        timer.innerText = seconds
        if(total<=0) {
            interval = clearInterval (interval);
            winOrLoseEl.innerText = "you lost!"
        }
    }, 1000)


};

//FIND A WINNER
// check if all cards are flipped
// function that uses the winner div and removes the hide
function findWinner(){
    const matchedCards = document.querySelectorAll(".flip");
    if(matchedCards.length === 12) {
       winner.classList.remove("hide");
    }
}
//FLIP EACH CARD
function flipcard() {
  this.classList.add("flip");
  //this keyword refers to different objects depending on how it is used
  if (!turnedCard) {
    turnedCard = true;
    cardA = this;
  } else {
    turnedCard = false;
    cardB = this;

    if (cardA.dataset.framework === cardB.dataset.framework) {
      // match sequence
      cardA.removeEventListener("click", flipcard);
      cardB.removeEventListener("click", flipcard);
      // if not a match then it will not flip the card (below)
    } else {
      // set a time for how long the inccorect card can stay open

      setTimeout(() => {
        cardA.classList.remove("flip");
        cardB.classList.remove("flip");
        //1 second = 1000 milliseconds
      }, 1050);

    }
  }
  findWinner() //call function
  console.log(findWinner)
}
//SHUFFLE CARDS
// Must create a random algorthium for cards
//assign a number to each card and make it random
(function shuffle() {
  allCards.forEach((card) => {
    //returns a number b/t 0-1 xcluded 1
    let randomCards = Math.floor(Math.random() * 12);
    //multply by 12 for 12 cards
    card.style.order = randomCards;
    //shuffle needs to start before games does
  });
})();

allCards.forEach((card) => card.addEventListener("click", flipcard));

