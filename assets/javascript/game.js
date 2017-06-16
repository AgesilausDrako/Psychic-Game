//Establish the computer's choices in a variable
var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//Global variables for wins, losses, guesses, and the guess storage array
var wins = 0;
var losses = 0;
var guesses = 9;
var guessArr = [];

//Function fired my keyup event
document.onkeyup = function(event) { 

var userGuess = event.key;
//Computer's random guess
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	//Array for guess storage 
	if (!guessArr.includes(userGuess)) {
		guessArr.push(userGuess);
	} else {
		userGuess = false;
	}

	if (userGuess === computerGuess) {
		wins++;
		guesses--;
	} else {
		losses++;
		guesses--;
	}
	//HTML intended to update the site after each guess
	var html = "<p>Guess what letter I'm thinking of</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses: " + guesses + "</p>"+
          "<p>Your guesses so far: " + guessArr.toString()  + "</p>";

	//Query selector updates the div with the HTML above 
	document.querySelector("#game").innerHTML = html;

	/*Reset which changes wins, losses, and guesses to 0 after 
	9 attempts and clears the array*/
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


