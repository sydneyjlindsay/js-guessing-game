function* guessingGame() {
	// console.log(yield game.say('Hey there!'));
	// console.log(yield game.say('Woah', 'This is cool'));
	// console.log(yield game.ask('Woah', 'This is cool'));
	// console.log(yield game.choose('Woah', 'This is cool', 'Hello world'));
	// console.log(yield game.say('That\'s all folks!', 'THE END'));

yield game.say("Hey there, let's play a guessing game!");

var myName = yield game.ask("Before we begin, what is your name?");

yield game.say("Hello "+myName+".  I'm going to pick a number between zero and 100.");

yield game.say("If you guess my number correctly, you win. If you guess incorrectly, you can guess again. Let's begin.");

var numRandom = Math.floor(Math.random() *100);
console.log(numRandom);

var complete = false; 
var guess = null; 
	
	do {
		guess = yield game.ask("What is your guess?");
		if (guess === numRandom) {
			complete = true;
			}
		} 
		while (!complete)
}




