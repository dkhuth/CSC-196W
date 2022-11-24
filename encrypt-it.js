/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);
 
  
 
  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    console.log("Window loaded!");
    document.getElementById("encrypt-it").addEventListener('click',handleClick);
    document.getElementById("normal-size").addEventListener("click", fontSize);
		document.getElementById("bigger-size").addEventListener("click", fontSize);
    document.getElementById("all-caps").addEventListener("change", upper);
    document.getElementById("reset").addEventListener('click',reset);
    
  }
  


  function handleClick(){
    var plainText = document.getElementById("input-text").value;
    var ciphertext =shiftCipher(plainText);
    ciphertext =shiftCipher(ciphertext);
    document.getElementById("result").innerText = ciphertext;
    console.log("button clicked");


  }
  
  function fontSize(){
    if (document.getElementById("normal-size").checked){
			
      document.getElementById("result").style.fontSize = "12pt";
		
    } else {
			
      document.getElementById("result").style.fontSize = "24pt";
		
    }
	}

    
  
  function upper() {
    if(document.getElementById("all-caps").checked){
      
      document.getElementById("results").innertext.toUpperCase();
    
    }else{

      document.getElementById("results").innertext.toLowerCase();
    }
   
  }

  function reset(){
    document.getElementById("all-caps").checked = false;
    document.getElementById("results").innerText =" ";
    document.getElementById("input-text").value="";
    document.getElementById("result").style.fontSize = "12pt";
    document.getElementById("normal-size").checked = true;
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  /**
 * Returns an encrypted version of the given text, where
 * each letter is shifted alphabetically ahead by 1 letter,
 * and 'z' is shifted to 'a' (creating an alphabetical cycle).
 */
function shiftCipher(text) {
  text = text.toLowerCase();
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] < 'a' || text[i] > 'z') {
      result += text[i];
    } else if (text[i] == 'z') {
      result += 'a';
    } else { // letter is between 'a' and 'y'
      let letter = text.charCodeAt(i);
      let resultLetter = String.fromCharCode(letter + 1);
      result += resultLetter;
    }
  }
  return result;
}
}());
