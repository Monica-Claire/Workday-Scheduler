// display current day and time
const d = new Date();
document.getElementById("currentDay").innerHTML = d;

//editable time blocks for tasks

//event listener for click
document.getElementById("hour9").addEventListener("keypress", console.log("press"));
//convert to a variable to be able to store it?

//save when click save
//add event listener to catch button click
document.getElementById("save").addEventListener("click", console.log("save"));

//save to local storage when press save button
localStorage.setItem();

//pull from local storage on refresh
const tasks = localStorage.getItem();

//add color coding based on time