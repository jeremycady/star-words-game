/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 let game = null;

 /**
  * Clicking the "Start Game" button creates a new Game object and starts the game
  */
 document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();
 });

  /**
   * Clicking an onscreen keyboard button results in a call to the handleInteraction() method for the clicked keyboard button
   */

   /**
    * Clicking the spaces between and around the onscreen keyboard buttons does not result in the handleInteraction() method being called
    */

    /**
     * Event listener has been added for the keydown or keyup event so that pressing a physical keyboard button results in the handleInteraction() method being called for the associated onscreen keyboard button
     */

     /**
      * App styles have been personalized and changes have been noted in the README.md file and the project submission notes
      */