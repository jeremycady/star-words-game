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
        this.activePhrase = this.getRandomPhrase();
        const phrase = new Phrase(this.activePhrase);
        phrase.addPhraseToDisplay();
     }

     /**
      * randomly retrieves one phrase from the phrases array
      * @return {object} a phrase object
      */
     getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
     }

     /**
      * Disables the selected letter's onscreen keyboard button
      * If the phrase does not include the guessed letter, the wrong CSS class is added to the selected letter's keyboard button and the removeLife() method is called 
      * If the phrase includes the guessed letter, the chosen CSS class is added to the selected letter's keyboard button, the showMatchedLetter() method is called on the phrase, and the checkForWin() method is called. If the player has won the game, the gameOver() method is called
      */
     handleInteraction() {

     }

     /**
      * checks if the player has revealed all of the letters in the active phrase
      */
     checkForWin() {

     }

     /**
      * removes a life from the scoreboard 
      * increments the missed property
      * if the player has lost the game calls the gameOver() method
      */
     removeLife() {

     }

     /**
      * displays a final "win" or "loss" message by showing the original start screen overlay styled with either the win or lose CSS class
      */
     gameOver() {

     }

     /**
      * After a game is completed, the gameboard is reset so that clicking the "Start Game" button loads a new game
      */
 }