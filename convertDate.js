/*
Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return value are strings.

For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the AP
*/

// ORIGINAL CODE

function formatDate(userDate) {

}

// MY SOLUTION

function formatDate(userDate) {
var returnedDate = "";
var firstSlash = userDate.search("/");
var secondSlash = userDate.lastIndexOf("/");
var day = userDate.slice((firstSlash + 1), secondSlash);
var month = userDate.slice(0, firstSlash);
var year = userDate.slice((secondSlash + 1));

if(month.length === 1) {
	month = "0" + month;
}
if(day.length === 1) {
	day = "0" + day;
}

returnedDate = returnedDate.concat(year, month, day);

return returnedDate;
}