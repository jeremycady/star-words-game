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
   * onscreen keyboard calls to the handleInteraction() method
   */
  document.getElementById('qwerty').addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
  });

  /**
   * Physical keyboard calls handleInteraction() method
   */
  document.addEventListener('keyup', e => {
    const buttons = document.querySelectorAll('.key');

    for (let button of buttons) {
      if (e.key === button.textContent && !button.disabled) {
        game.handleInteraction(button);
      }
    }
  });

     /**
      * App styles have been personalized and changes have been noted in the README.md file and the project submission notes
      */