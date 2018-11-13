/*
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 
*/

// MY SOLUTION

function LetterChanges(str) { 
    var newString = "";
    
    function nextLetter(letter) {
        let char = letter.charCodeAt("0");
        if(char === 122) {
            char = 97;
        } 
        else if(char > 96 && char < 123) {
            char += 1;
        }
        else {
            return String.fromCharCode(char);
        }
        return String.fromCharCode(char);
    }
    function capVowel(letter) {
        switch(letter) {
            case "a":
                return "A";
            case "e":
                return "E";
            case "i":
                return "I";
            case "o":
                return "O";
            case "u":
                return "U";
            default:
                return letter;
        }
    }
    
    for(var i = 0; i < str.length; i++) {
        let char = str[i].charCodeAt(0);
        if(char > 96 && char < 123) {
            newString += capVowel(nextLetter(String.fromCharCode(char)));
        } else {
            newString += String.fromCharCode(char);
        }
    }
  
  return newString; 
         
}