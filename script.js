//this jqueries to get the currentDay id from the html
let todayIs = moment().format("dddd");
$("#currentDay").text(todayIs);

//this uses moment to format the string variable into the updated current day

console.log(todayIs);









/*
I need a div block for each hour slot and 
i need each blockto have or be attached to an if statement that says
if the time assigned to block is less than or before the current time then
display background color of block as grey or else
if the hour time is equal to the current time then
display background color of block as red or else
if the block hour time is after or greater than then
display background color of block as green
Each time slot block needs to be an input text box and
each input must be saved to local storage. 
*/