//these variables use jquery to tap into html IDs
const firstInputEL = $('#nine-am');
var firstOutputEL =$("#first-event");


//this jqueries to get the currentDay id from the html
//this uses moment to format the string variable into the updated current day
let todayIs = moment().format("dddd");
$("#currentDay").text(todayIs);
console.log(todayIs);

//this function was supposed to input what is typed in the first input time block box
firstInputEL.addEventListener('input', letter => {
  console.log(letter);
  firstOutputEL.textContent = letter.target.value
});


//this creates a variable that is attached the time-block class using jquery
let timeBlock = $(".time-block");


  timeBlock.each(function(){
    //this conditional statement identifies each time block relative to the hour of day.
    if(currentTime === timeBlock) {
      $(this).addClass("present");
      $(this).removeClass("future");
      $(this).removeClass("past");
    } else if(currentTime < timeBlock) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } else {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    }});



$('#nine-save').click(setStorage);

  function setStorage(){  
    console.log("button clicked")
    var input = firstInputEL.value;

    localStorage.setItem("input", input);
    displayFirst();
  };

  function displayFirst() {
    var firstEvent = localStorage.getItem("input")

      if(!firstEvent){
        return;
      }

      firstOutputEL.textContent = firstEvent;
    };




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