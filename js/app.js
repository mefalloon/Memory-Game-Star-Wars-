//state of its loading process.
//once loaded -- it will call the fuction given
if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loaded()); 
} else {// if not its already loaded
    loaded();
}

// grab all overlays from Dom
function loaded() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text')); 

    //Create a way to add a event listener for all overlays
    overlays.forEach(overlay => {
        //for each overlay we want to add a listener
        overlay.addEventListener('click', () => {
        overlay.classList.remove('visible');
    });
});

const allCards = document.querySelectorAll('.cards');

let turnedCard = false;
let cardA;
let cardB;

function flipcard() {
    this.classList.add('flip');
    
    if(!turnedCard){
        turnedCard = true;
        cardA = this;
    } else {
        turnedCard = false;
        cardB = this;
    
if (cardA.dataset.framework === 
    cardB.dataset.framework) {
        // match sequence
        cardA.removeEventListener('click', flipcard);
        cardB.removeEventListener('click', flipcard);
        // if not a match then it will not flip the card (below)
    } else {
         // second while the 2nd click gets stuck
         //adding both wont let the inccorect match to turn over
         // set a time for how long the inccorect card can stay open
        // cardDelay = setTimeout(cardA.classList.remove('flip'), 1200);
        //             setTimeout(cardB.classList.remove('flip'), 1200);
        setTimeout(() => {
            cardA.classList.remove('flip');
            cardB.classList.remove('flip');
            //1 second = 1000 milliseconds
            }, 1050);
        }
    }
}
// Must create a random algorthium for cards
//assign a number to each card and make it random
(function shuffle() {
    allCards.forEach(card => {
        //returns a number b/t 0-1 xcluded 1
        let randomCards = Math.floor(Math.random() * 12);
        //multply by 12 for 12 cards
        card.style.order = randomCards;
        //shuffle needs to start before games does
    });
    })();
allCards.forEach(card => card.addEventListener('click', flipcard));

}

