var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var nine = $("#9");
var ten = $("#10");
var eleven = $("#11");
var twelve = $("#12");
var one = $("#1");
var two = $("#2");
var three = $("#3");
var four = $("#4");
var five = $("#5");
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