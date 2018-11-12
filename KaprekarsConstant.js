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