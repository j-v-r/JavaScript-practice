/*
Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 
*/

// MY SOLUTION

function LetterCapitalize(str) { 
    var newString = "";
    
    for(var i = 0; i < str.length; i++) {
        if(i === 0) {
            newString += str[i].toUpperCase();
        }
        else if(str[i].charCodeAt(0) === 32) {
            newString += (" " + str[i+1].toUpperCase());
            str = (str.substring(0, (i + 1) ) + str.substring(i+2));
        }
        else {
            newString += str[i];
        }
    }
        return newString; 
    }