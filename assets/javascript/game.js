var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];


var wins = 0;
var losses = 0;
var guesses = 9;
var guessArr = [];


document.onkeyup = function(event) { 

var userGuess = event.key;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	
	guessArr.push(userGuess);

	if (userGuess === computerGuess) {
		wins++;
		guesses--;
	} else {
		losses++;
		guesses--;
	}
	
	var html = "<p>Guess what letter I'm thinking of</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses: " + guesses + "</p>"+
          "<p>Your guesses so far: " + guessArr.toString()  + "</p>";

	// Injecting the HTML we just created into our div and updating the game information on our page.
	document.querySelector("#game").innerHTML = html;

	if (wins === 9 || losses === 9 || guesses === 0) {
		wins=0;
		losses=0;
		guesses=9;
		guessArr=[];
		var resetHtml = "<p>Guess what letter I'm thinking of</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses: " + guesses + "</p>"+
          "<p>Your guesses so far: </p>";
 
	document.querySelector("#game").innerHTML = resetHtml;
	}

}


