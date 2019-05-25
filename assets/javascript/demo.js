let possibleWords = ['cat', 'dog', 'tree'];
let currentWord = '';
let wins = 0; 
let guessesRemaining = 6; 
let lettersGuessed = [];
// let displayWord = '';

function initGame() {
    assignCurrentWord();
    setEventListeners();
    updateDOM();
}

initGame() 

function wordHasBeenGuessed() {
    for (let i = 0; i < currentWord.length; i++) {
        if(lettersGuessed.includes(currentWord[i])) {
         
        } else {
            return false
        }
    }
    return true 
}

function assignCurrentWord() {
    const index = Math.floor(Math.random() * ((possibleWords.length -1) - 0 + 1)) + 0;
    console.log(possibleWords[index]);
    currentWord = possibleWords[index];
}

function setEventListeners() {
    document.onkeyup = function(event) {
        console.log(event);
        lettersGuessed.push(event.key);
        console.log(lettersGuessed);
        if(wordHasBeenGuessed()) {
            wins++
            document.getElementById("wins-count").textContent = wins;
            initGame();
        } 
        shouldGuessesGoDown(event.key);
        console.log(currentWord, lettersGuessed, guessesRemaining);
        updateDOM();
        checkIfUserLost()
    }
}

function checkIfUserLost() {
    if (guessesRemaining <= 0) {
        alert("You lost")
        initGame();
    }
}

function shouldGuessesGoDown(letterGuessed) {
    if(!currentWord.includes(lettersGuessed)) {
        guessesRemaining--;
    } 
}

function updateDOM() {
    document.getElementById("guesses-remaining").textContent = guessesRemaining;
    document.getElementById("letters-guessed").textContent = lettersGuessed;
    showLettersOrDashes();
};

function showLettersOrDashes() {
    let displayWord = ''; 
    for (let i = 0; i < currentWord.length; i++) {
        if(lettersGuessed.includes(currentWord[i])) {
            displayWord = displayWord + currentWord[i] + " ";
        } else {
            displayWord = displayWord + "_" + " ";
        }
    }
    document.getElementById("display-word").textContent = displayWord;
}