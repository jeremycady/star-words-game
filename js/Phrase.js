/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase){
       this.phrase = phrase;
     }

     /**
      * adds the phrase to the gameboard
      */
     addPhraseToDisplay() {
         const div = document.getElementById('phrase');
         const ul = div.firstElementChild;

         for (let i=0; i<this.phrase.phrase.length; i++) {
            if (/^\s$/.test(this.phrase.phrase[i])) {
                ul.innerHTML += `<li class="space"> </li>`;
            } else if (/[a-z]/.test(this.phrase.phrase[i].toLowerCase())){
                ul.innerHTML += `<li class="hide letter ${this.phrase.phrase[i]}">${this.phrase.phrase[i].toUpperCase()}</li>`;
            }
         }
     }

    /**
     * checks if a letter is in the phrase
     * @param {string} letter = textContent of event target 
     * @return {boolean}} returns true if match, returns false if no match
     */
     checkLetter(letter) {
        for (let i=0; i<this.phrase.phrase.length; i++) {
            if (letter.toLowerCase() === this.phrase.phrase[i].toLowerCase()) {
                return true;
            }
        }
        return false;
     }

     /**
      * reveals the letter(s) on the board that matches the player's selection
      * @param {object} target = the event target
      */
     showMatchedLetter(target) {
        const letters = document.querySelectorAll('.hide');

        for (let letter of letters) {
            if (letter.textContent.toLowerCase() === target.textContent.toLowerCase()) {
                letter.className = `show letter ${target.textContent}`;
            }
        }
     }
 }