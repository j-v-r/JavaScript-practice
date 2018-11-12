/*
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 
*/

// MY SOLUTION

function LongestWord(sen) { 
    var longestWord = "";
    var numberOfLettersInLongestWord = 0;
    var lettersInWord = 0;
    var thisWord = "";
    
for(var i = 0; i < sen.length; i++) {
    var thisChar = sen[i];
    if((thisChar.charCodeAt() > 64 && thisChar.charCodeAt() < 123) || (thisChar.charCodeAt() > 47 && thisChar.charCodeAt() < 58)) {
        lettersInWord += 1;
        if(lettersInWord === numberOfLettersInLongestWord) {
            longestWord = longestWord;
            thisWord += thisChar;
        }
        else if(lettersInWord > numberOfLettersInLongestWord) {
            thisWord += thisChar;
            numberOfLettersInLongestWord = lettersInWord;
            longestWord = thisWord;    
        }
        else {
            thisWord += thisChar;
        }
    }
    if(thisChar.charCodeAt() === 32) {
        thisWord = "";
        lettersInWord = 0;
        }
    }
    else {
        return longestWord; 
    }
          
}