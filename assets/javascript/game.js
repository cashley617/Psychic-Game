
// List of beer words 
let beerWord = [
    "pint",
    "stein",
    "souripa",
    "lager",
    "saison",
    "porter",
    "wheat",
    "firkin"
];

// Equation to randomize the beer words list 
let randomWord = beerWord[Math.floor(Math.random() * beerWord.length)];

// Variable to create an empty array, for the selected beer word 
let emptyWord = []; 

// For loop to add placeholders for the empty letters 
for (let i = 0; i < randomWord.length; i++) {
    emptyWord[i] = "_";
}

let beerLetters = randomWord.length; 

// Main section for game to be in progress 
while (beerLetters > 0) {

    // Should this be an alert? 
    alert(emptyWord.join(" "));

    // Should this be a prompt?
    let guess = prompt("Guess a letter!");

    // Might change this to the if else we learned in class 
    if (guess === null) {
        break; 
    } else if (guess.length !== 1) {
        alert("Please enter a single letter");
    } else {
        // Insert game stats 
        for (let n = 0; n < randomWord.length; n++) {
            if (randomWord[n] === guess) {
                emptyWord[n] = guess;
                beerLetters--;
            }
        }
    }
};

alert(emptyWord.join(" "));

// Confirms the user won with completed word 
alert("You did it! You guessed the right word, " + randomWord + "!");