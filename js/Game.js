/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(){
        this.missed = 0;
        this.phrases = [
            { phrase: 'I find your lack of faith disturbing'},
            { phrase: 'Never tell me the odds'},
            { phrase: 'There is no try'},
            { phrase: 'Pass on what you have learned'},
            { phrase: 'There is always a bigger fish'},
            { phrase: 'Unlimited power'},
            { phrase: 'So this is how liberty dies'},
            { phrase: 'I am one with the Force'}
        ];
        this.activePhrase = null;
     }

     /**
      * start the game
      */
     startGame() {
        // hides the start screen
        document.getElementById('overlay').style.display = 'none';

        // select random phrase and display it
        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
     }

     /**
      * randomly retrieves one phrase from the phrases array
      * @return {object} a phrase object
      */
     getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
     }

     /**
      * handles the interactions with the keyboard
      * @param {object} target = the event target from event listener
      */
     handleInteraction(target) {
        target.disabled = true;

        if (this.activePhrase.checkLetter(target.textContent)) {
            target.className += ' chosen';
            this.activePhrase.showMatchedLetter(target);
            this.checkForWin();
        } else {
            target.className += ' wrong';
            this.removeLife();
        }
        
     }

     /**
      * checks if the player has revealed all of the letters in the active phrase
      */
     checkForWin() {
        const hiddenLetters = document.querySelectorAll('.hide');

        if (hiddenLetters.length === 0) {
            this.gameOver('You have brought balance to the force!', true);
        }
     }

     /**
      * removes a life and ends game when lives run out
      */
     removeLife() {
        const scoreboard = document.getElementById('scoreboard');
        const ol = scoreboard.firstElementChild;
        const life = ol.lastElementChild;

        life.style.display = 'none';

        this.missed += 1;

        if (this.missed === 5) {
            this.gameOver('You have turned to the dark side!', false);
        }
    }

     /**
      * ends game, displays game over message
      * @param {string} message = message to display on game over
      * @param {boolean} didWin = true if won, false if lost
      */
     gameOver(message, didWin) {
        const overlay = document.getElementById('overlay');

        overlay.style.display = 'block';
        document.getElementById('game-over-message').textContent = message;

        if (didWin) {
            overlay.className = 'win';
        } else {
            overlay.className = 'lose';
        }

        this.reset();
        
     }

     /**
      * resets the game
      */
     reset() {
        // reset Game properties
        this.missed = 0;
        this.activePhrase = null;

        // reset phrase HTML
        const div = document.getElementById('phrase');
        const ul = div.firstElementChild;

        ul.innerHTML = '';

        // reset disabled keys
        const keys = document.querySelectorAll('.key');

        for (let key of keys) {
            key.disabled = false;
            key.className = 'key';
        }

        // reset hidden lives
        const lives = document.querySelectorAll('.tries');

        for (let life of lives) {
            life.style.display = 'inline-block'
        }
     }
 }