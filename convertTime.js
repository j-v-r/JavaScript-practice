/*
Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. 
*/


// MY SOLUTION

function TimeConvert(num) { 
    var minutes = 0;
    var hours = 0;
    var output = "";
    
    if(num < 60) {
        output = "0:" + num.toString();
    }
    
    for(var i = 0; i < num; i++) {
        minutes += 1;
        if(minutes === 60) {
            hours += 1;
            minutes = 0;
        }
    }
    
    output = hours.toString() + ":" + minutes.toString();
    
  return output; 
         
}