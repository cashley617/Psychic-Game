
let currentWord = ''; 
let wins = 0;
let guessesRemaining = 8;
let lettersGuessed = [];
let beerWords = [
  'pint',
  'stein',
  'souripa',
  'lager',
  'saison',
  'porter',
  'wheat',
  'firkin',
  'ibu',
  'paleale',
  'hopped',
  'dryhopped',
  'session',
  'double',
  'lambic',
];


function initGame() {
    assignCurrentWord();
    setEventListeners();
    updateDOM();
}

initGame();


function wordHasBeenGuessed() {
    for (let i = 0; i < currentWord.length; i++) {
        if(lettersGuessed.includes(currentWord[i])) {

        } else {
            return false
        }
    }
    return true 
}; 

function assignCurrentWord() {
    const index = Math.floor(Math.random() * ((beerWords.length -1) - 0 + 1)) + 0;
    currentWord = beerWords[index];
}; 

function setEventListeners() {
    document.onkeyup = function(event) {
        lettersGuessed.push(event.key);
        if(wordHasBeenGuessed()) {
            wins++;
            document.getElementById("wins-count").textContent = wins;
            initGame();
        }
        shouldGuessesGoDown(event.key);
        updateDOM();
        checkIfUserLost();
    }
};

function checkIfUserLost() {
    if (guessesRemaining <= 0) {
        alert("Sorry, mate. Shit outta luck!");
    }
}; 

function shouldGuessesGoDown(lettersGuessed) {
    if(!currentWord.includes(lettersGuessed)) {
        guessesRemaining--;
    }
};

function updateDOM() {
    document.getElementById("guesses-remaining").textContent = guessesRemaining;
    document.getElementById("letters-guessed").textContent = lettersGuessed;
    showLettersOrDashes();
}; 

function showLettersOrDashes() {
    let displayWord = '';
    for (let i = 0; i < currentWord.length; i++) {
        if(lettersGuessed.includes(currentWord[i])) {
            displayWord = displayWord + currentWord[i] + ' ';
        } else {
            displayWord = displayWord + '_' + ' ';
        }
    }
    document.getElementById("display-word").textContent = displayWord;
}; 

