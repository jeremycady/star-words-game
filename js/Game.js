/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(){
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null;
     }

     /**
      * hides the start screen overlay
      * sets the activePhrase property to a random phrase
      * and calls the addPhraseToDisplay() method on the active phrase
      */
     startGame() {

     }

     /**
      * randomly retrieves one phrase from the phrases array
      */
     getRandomPhrase() {
         
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