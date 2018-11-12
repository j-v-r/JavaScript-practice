/*
Your company assigns each customer a membership ID, and you are implementing a check digit for those IDs.

The check digit should be calculated by adding up all digits in each membership ID. If the result of the sum is a number with more than a single digit, another iteration is required, and the digits of the result also should be added together. This process should repeat until a single-digit number is calculated.

For example, for the membership ID "55555" the sum of all digits is 25. Because this is not a single-digit number, 2 and 5 would be added, and the result, 7, would be the check digit.
*/

/**
 * @prop {string} membershipId: The customer's membership ID.
 * @return {number} The check digit.
 */

 // ORIGINAL CODE

 function createCheckDigit(membershipId) {
  // Write the code that goes here.
  return 0;
}

// MY SOLUTION

function createCheckDigit(membershipId) {
  	var checkDigit = membershipId.length;
  	var sumOfDigits = null;
  	if (checkDigit > 1) {
  		for(var i = 0; i < checkDigit; i++) {
  			sumOfDigits += Number(membershipId.charAt(i));
  		}
  		if(String(sumOfDigits).length > 1) {
  			return createCheckDigit(String(sumOfDigits));
  		}
  		else {
  			checkDigit = sumOfDigits;
  			return checkDigit;
  		}
  	}
  	else {
  		return Number(membershipId);
  	} 
};