// display current day and time
const d = new Date();
document.getElementById("currentDay").innerHTML = d;

//editable time blocks for tasks
//code from 5.1.7

//Add task here was clicked
$(".taskarea").on("click", "span", function(){
    console.log("was clicked")
    //.textarea not connecting - how do we get it to connect?
   
    //get current text
    var task = $(this)
    .text()
    .trim();
    //need to create a variable for the task area - how?

    //create new input element
    var taskInput = $("<input>")
    .attr("type", "text")
    .addClass("form-control")
    .val(task);

    //swap out elements
    $(this).replaceWith(taskInput);

    //automatically focus on new element
    taskInput.trigger("focus");
});
