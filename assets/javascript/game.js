

let magicWord = document.getElementById("magicWord");
let wins = 0;
let counter = 10;
let oldLetters = [];




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
    // emptyWord[i] = "_";
    // magicWord.text(emptyWord[i] = "_");
    emptyWord[i] = "_"
}

magicWord.text(emptyWord.join(" "));

console.log(emptyWord)
let beerLetters = randomWord.length; 
// let magicWord = $("#magicWord");


// How many guesses they have left 

// let counter = (magicWord) + 3;

// // Letters already guessed  
// let oldLetters = document.getElementById("oldLetters");




// Main section for game to be in progress 
while (beerLetters > 0) {

    // Should this be an alert? 
    alert(emptyWord.join(" "));
    // magicWord.innerHTML = emptyWord.join(" ");


    // Should this be a prompt?
    let guess = prompt("Guess a letter!");


    // Trying to log the letters already guessed 
    function onKeyUp(event) {
        // oldLetters.push(guess);
        console.log(guess);
        oldLetters.innerText = guess;
    }

    // Might change this to the if else we learned in class 
    if (guess === null) {
        break; 
    } else if (guess.length !== 1) {
        alert("Please enter a single letter");
    } else { 
        for (let n = 0; n < randomWord.length; n++) {
            if (randomWord[n] === guess) {
                emptyWord[n] = guess;
                beerLetters--;
                counter--;
                // oldLetters.push(guess[n]);
                onKeyUp();
                // oldLetters.text(guess);
                // oldLetters.append(guess);
            }
        }
    }
    if (counter === 0) {
        alert("You died!");
    }
};

oldLetters.text(guess);


alert(emptyWord.join(" "));

// Confirms the user won with completed word 
alert("You did it! You guessed the right word, " + randomWord + "!");