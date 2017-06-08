console.log("Hello, world!");
// Our array of possible computer choices.
var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking our wins, losses and guesses.
var wins = 0;
var losses = 0;
var guesses = 10;

document.onkeyup = function(event) { 

// Determine which key was pressed
var userGuess = event.key;

// Sets the computerGuess variable equal to a random choice from the computerChoice array.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	if (userGuess === computerGuess) {
		wins++;
		guesses--;
	} else {
		losses++;
		guesses--;
	}

	if (guesses === 0) {

	}

	var html = "<p>Guess what letter I'm thinking of</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses: " + guesses + "</p>"+
          "<p>Your guesses so far: " + userGuess + "</p>";

	// Injecting the HTML we just created into our div and updating the game information on our page.
	document.querySelector("#game").innerHTML = html;
}


