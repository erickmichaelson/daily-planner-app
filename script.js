


//this jqueries to get the currentDay id from the html
let todayIs = moment().format("dddd");
$("#currentDay").text(todayIs);

//this uses moment to format the string variable into the updated current day

console.log(todayIs);


signUpButton.addEventListener("click", function(event) {
    event.preventDefault();
  
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
  
    if (email === "") {
      displayMessage("error", "Email cannot be blank");
    } else if (password === "") {
      displayMessage("error", "Password cannot be blank");
    } else {
      displayMessage("success", "Registered successfully");
  
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      renderLastRegistered();
    }
  });

function renderLastRegistered() {
    var email = localStorage.getItem("email");
    var password = localStorage.getItem("password");
  
    if (!email || !password) {
      return;
    }
  
    userEmailSpan.textContent = email;
    userPasswordSpan.textContent = password;
  }
  





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