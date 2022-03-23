if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loaded());
} else {
    loaded();
}

// grab all overlays from Dom
//what ever your giv Array.from will creat one
function loaded() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));

    //Create a way to add a event listener for all overlays
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
        overlay.classList.remove('visible');
    });
})



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
       // console.log(turnedCard, cardA);
      // console.log({cardA, cardB});
      //console.log(cardA.dataset.framework);
     // console.log(cardB.dataset.framework);
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

////
const winner = document.getElementById("modal");
const reset = document.querySelector(".reset-btn");
const playAgain = document.querySelector(".play-again-btn");

// Access the reset button

function displayModal() {
// Access the modal <span> element (x) that closes the modal
const modalClose = document.getElementsByClassName("close")[0];
	// When the game is won set modal to display block to show it
	winner.style.display= "block";

	// When the user clicks on <span> (x), close the modal
	modalClose.onclick = function() {
		winner.style.display = "none";
	};
// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == winner) {
			winner.style.display = "none";
		}
	};
}

function winGame() {
	if (matched.length === 12) {
	
		displayModal();
	}
}

deck.addEventListener("click", function(evt) {
	if (evt.target.nodeName === "LI") {
		// To console if I was clicking the correct element 
		console.log(evt.target.nodeName + " Was clicked");
		// Start the timer after the first click of one card
	// Executes the timer() function
		if (timeStart === false) {
			timeStart = true; 
			timer();
		}
		// Call flipCard() function
		flipCard();
	}

	//Flip the card and display cards img
	function flipCard() {
		// When <li> is clicked add the class .flip to show img
		evt.target.classList.add("flip");
		// Call addToOpened() function
		addToOpened();
	}
	 
	//Add the fliped cards to the empty array of opened
	function addToOpened() {
		/* If the opened array has zero or one other img push another 
		img into the array so we can compare these two to be matched
		*/
		if (opened.length === 0 || opened.length === 1) {
			// Push that img to opened array
			opened.push(evt.target.firstElementChild);
		}
		// Call compareTwo() function
		compareTwo();
	}
}); //Event Listener


reset.addEventListener('click', resetEverything);

/*
Event Listener to listen for a click on the play
again button, once clicked call resetEverything()
*/
playAgain.addEventListener('click',function() {
	winner.style.display = "none";
	resetEverything();
});