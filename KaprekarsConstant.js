/*
Have the function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit number with at least two distinct digits. Your program should perform the following routine on the number: Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number), and subtract the smaller number from the bigger number. Then repeat the previous step. Performing this routine will always cause you to reach a fixed number: 6174. Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). Your program should return the number of times this routine must be performed until 6174 is reached. For example: if num is 3524 your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174. 
*/

// MY SOLUTION

function KaprekarsConstant(num) { 
    var output = 0;
    var ascendingOrder = 0;
    var descedingOrder = 0;
    
    function arrayToNumber(input) {
        var number = 0;
        var string = input.toString();
        string = string.replace(/,/gi, "");
        number = Number(string);
        return number;
    }
    
    function descending(input) {
        var numberArray = [];
        var output = 0;
        var number = input.toString();
        for(var i = 0; i < number.length; i++) {
            numberArray.push(number[i]);
        }
        output = arrayToNumber(numberArray.sort(function(a, b){return b-a}));
        return output;
    }

    function ascending(input) {
		var numberArray = [];
    	var output = 0;
    	var number = input.toString();
    	for(var i = 0; i < number.length; i++) {
       		numberArray.push(number[i]);
    	}
    	output = arrayToNumber(numberArray.sort(function(a, b){return a-b}));
        return output;
	}
	
	while(num != 6174) {
		var strOfNum = num.toString();
		while(strOfNum.length != 4) {
			strOfNum += "0";
		}
		num = Number(strOfNum);

	    ascendingOrder =  ascending(num);
        descendingOrder = descending(num);
        
	    if(ascendingOrder >  descendingOrder) {
	        num = ascendingOrder - descendingOrder;
            output += 1;
	    }
	    else {
	        num = descendingOrder - ascendingOrder
            output += 1;
	    }
	}
    return output; 
}