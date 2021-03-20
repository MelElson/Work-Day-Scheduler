var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));


// look at current time
var time = moment();
//var clearEl = $('#clear');
var hour = moment().hours();


function startSchedule() {

    $(".time-block").each(function () {
        var id = $(this).attr("id");   //looks at "id" time in html
        var planner = localStorage.getItem(id);

        if (planner !== null) {
            $(this).children(".planner").val(planner);
        }
    });
}

startSchedule();
var saveBtn = $(".saveBtn");
//saves user input into local storage
saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");  
    var planner = $(this).siblings(".planner").val();
    localStorage.setItem(time, planner);
    
});

// change row based on time. color reps past preset or future
function colorBlock() {
    hour = time.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));
        hour = parseInt(hour);

        if (thisHour > hour) {
            $(this).addClass("future")
            console.log(time)
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
            console.log(time)
        }
        else {
            $(this).addClass("past");
           
        }
    })

    
    clear.addEventListener("click", function () {
        localStorage.clear();
        location.reload();
      });
}


colorBlock();