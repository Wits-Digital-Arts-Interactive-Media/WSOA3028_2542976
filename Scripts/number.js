let secretNumber = Math.floor(Math.random() * 1000) + 1;
let lastGuess = null;
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const guessResult = document.getElementById('guess-result');
const guessGame = document.getElementById('guess-game');
const temperatureIndicator = document.getElementById('temperature-indicator');

function updateBackground(difference) {
    const maxDifference = 1000;
    const percentage = Math.min(100, (difference / maxDifference) * 100);
    const hue = Math.floor(percentage * 2.4); // 0 is red (hot), 240 is blue (cold)
    guessGame.style.background = `hsl(${hue}, 80%, 50%)`;
}

function updateTemperature(difference) {
    const maxDifference = 1000;
    const percentage = Math.min(100, (difference / maxDifference) * 100);
    temperatureIndicator.style.left = `${percentage}%`;
}

function getFeedback(currentGuess, lastGuess) {
    const currentDifference = Math.abs(currentGuess - secretNumber);
    const maxDifference = 1000;
    const percentage = (currentDifference / maxDifference) * 100;

    if (lastGuess === null) {
        if (percentage <= 5) {
            return "WOW! Incredibly close on your first try! Are you psychic?";
        } else if (percentage <= 10) {
            return "Amazing start! You're very warm! Did you peek?";
        } else if (percentage <= 20) {
            return "Great first guess! You're getting warm! Lucky guess or secret genius?";
        } else {
            return currentGuess < secretNumber ? "Too low, but keep going! The only way is up!" : "Too high, but you've got this! Time to come back down to Earth!";
        }
    }

    const lastDifference = Math.abs(lastGuess - secretNumber);
    
    if (currentDifference < lastDifference) {
        if (percentage <= 1) {
            return "INCREDIBLE! You're practically on fire! Should I call the fire department?";
        } else if (percentage <= 3) {
            return "SO CLOSE! The heat is intense! Are you melting yet?";
        } else if (percentage <= 5) {
            return "You're RED HOT! Just a little more tweaking! You're making this look easy!";
        } else if (percentage <= 10) {
            return "Getting hotter! You're on a roll! Save some talent for the rest of us!";
        } else if (percentage <= 20) {
            return "Warming up nicely! Keep that momentum going! You're making me look bad!";
        } else {
            return "Better! You're on the right track! Slow and steady wins the race... sometimes.";
        }
    } else {
        if (percentage <= 5) {
            return "Still super close! Don't give up now! The number is practically begging you to guess it!";
        } else if (percentage <= 10) {
            return "Cooled off a bit, but you're still very warm! Did the number hurt your feelings?";
        } else if (percentage <= 20) {
            return "Slightly cooler, but you're still in the game! The number is playing hard to get, huh?";
        } else if (percentage <= 40) {
            return "Brrr! Getting colder! Did you mistake this for a 'Guess the Wrong Number' game?";
        } else if (percentage <= 60) {
            return "Wow, that's... creative? Are you trying to find the number by process of elimination?";
        } else {
            return "Impressive! I didn't know it was possible to get that far off. You've got a talent for this... just not the talent we're looking for!";
        }
    }
}
guessBtn.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    if (isNaN(userGuess)) {
        guessResult.textContent = "Please enter a valid number.";
    } else if (userGuess === secretNumber) {
        guessResult.textContent = `Congratulations! You guessed the number ${secretNumber}!`;
        updateBackground(0);
        updateTemperature(0);
        secretNumber = Math.floor(Math.random() * 1000) + 1; // Reset for a new game
        lastGuess = null;
    } else {
        const difference = Math.abs(userGuess - secretNumber);
        updateBackground(difference);
        updateTemperature(difference);
        guessResult.textContent = getFeedback(userGuess, lastGuess);
        lastGuess = userGuess;
    }
});