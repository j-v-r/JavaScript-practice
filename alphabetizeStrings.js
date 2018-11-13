/*
Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. 
*/

function AlphabetSoup(str) { 
    var stringArray = [];
    var sortedString = "";
    
    for(var i = str.length; i > 0; i--) {
        stringArray.push(str[i - 1]);
    }  
    stringArray.sort();
    sortedString = stringArray.toString().replace(/,/g, "");
    
    return sortedString; 
}