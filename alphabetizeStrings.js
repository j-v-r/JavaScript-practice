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
   
// keep this function call here 
AlphabetSoup(readline());