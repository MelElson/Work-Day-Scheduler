var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));


var nine = $("#9am");
var ten = $("#10am");
var eleven = $("#11am");
var twelve = $("#12pm");
var one = $("#1pm");
var two = $("#2pm");
var three = $("#3pm");
var four = $("#4pm");
var five = $("#5pm");

// look at current time
var time = moment();
var clearEl = $('#clear');



function startSchedule() {

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var planner = localStorage.getItem(id);

        if (planner !== null) {
            $(this).children(".planner").val(planner);
        }
    });
}

startSchedule();
var saveBtn = $(".saveBtn");

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

        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
    clear.addEventListener("click", function () {
        localStorage.clear();
    
      });
}

clearEl.on('click', function () {
    displayEl.empty();
  });

colorBlock();