// display current day and time
const d = new Date();
document.getElementById("currentDay").innerHTML = d;

//add color coding based on time
$(document).ready(function(){
    function hourUpdater(){
        let currentHour = moment().hours()
        $(".hour").each(function(){
            let hour = $(this).attr("id")
            if (hour < currentHour) {
                $(this).addClass("past")
            } else if (hour === currentHour) {
                $(this).addClass("present")
            } else {$(this).addClass("future")}
        })
    }
    hourUpdater()
    //pull from local storage to show tasks on refresh 
    //use .each
    function refresh(){
        $(".textarea").each(function(){
            let description = localStorage.getItem($(this).parent().attr("id"))
            $(this).val(description)
        })
    }
    refresh()
})



//save button functionality
$(".saveBtn").on("click", function(){
    //saves text as var value
    let value = $(this).siblings(".textarea").val()
    //saves time as var time
    let time = $(this).parent().attr("id")
    //saves both variables to local storage
    localStorage.setItem(time, value)
})

