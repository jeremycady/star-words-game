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
            } else {
                ul.innerHTML += `<li class="hide letter ${this.phrase.phrase[i]}">${this.phrase.phrase[i]}</li>`;
            }
         }
     }

    /**
     * checks if a letter is in the phrase
     */
     checkLetter() {

     }

     /**
      * reveals the letter(s) on the board that matches the player's selection
      */
     showMatchedLetter() {

     }
 }