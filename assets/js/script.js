var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

var containerEl = $('#containerEl');
// var containerEl = document.querySelector(".container");

var dayStart = 9;
var dayEnd = 17;

console.log(moment().format('HH:mm'));

for (i = dayStart; i <= dayEnd; i++) {
    // Create a new '<div>' for each hour in the business day
    var timeContainer = $('<div>');
    timeContainer.addClass('row');
    containerEl.append(timeContainer);

    // Creates <div> that holds the time of the business day
    var timeOfDayEl = $('<div>');
    timeOfDayEl.addClass('hour col-1');
    timeOfDayEl.text(moment(i, 'HH').format('HH:mm'));
    timeContainer.append(timeOfDayEl);

    // Creates <div> that holds the detail about the activities for this time slot
    var timeSlotDetail = $('<input>');
    timeSlotDetail.addClass('col-10');
    timeSlotDetail.attr("id", "timeSlot" + i);
    timeContainer.append(timeSlotDetail);

    // Changes color of time slot based on current time of day
    if (moment(i.toString(), 'HH').format('HH') < moment().format('HH')) {
        timeSlotDetail.addClass('past');
    } else if (moment(i.toString(), 'HH').format('HH') == moment().format('HH')) {
        timeSlotDetail.addClass('present');
    } else timeSlotDetail.addClass('future');

    // Creates <div> that holds the lock element
    var timeSlotLock = $('<div>');
    timeSlotLock.addClass('col-1 saveBtn');

    timeContainer.append(timeSlotLock);

    var lockEl = $('<i class="fa-solid fa-lock"></i>');

    timeSlotLock.append(lockEl);
    // var storedEvent = $('timeSlot'+i);

    // timeSlotLock.on('click', function () {
    //     // localStorage.setItem("timeSlot"+i, JSON.stringify(storedScore));
    //     localStorage.setItem("timeSlot"+i, storedEvent);
    //     // if (isDark) {
    //     //   $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
    //     //   isDark = !isDark;
    //     // } else {
    //     //   $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
    //     //   isDark = !isDark;
    //     // }
    //   });

}

// ------------------

containerEl.children().on("click", ".saveBtn", function () {

    var selectedEl = $($(this).parent().children().eq(1));
    var selectedElID = selectedEl.attr('id');
    var enteredText = document.getElementById(selectedElID).value.trim();

    console.log(selectedEl);
    console.log(selectedElID);
    console.log(enteredText);

    localStorage.setItem(selectedElID, enteredText);

    document.getElementById(selectedElID).value = localStorage.getItem(selectedElID);


    // localStorage.setItem("timeSlot"+i, JSON.stringify(storedScore));
    // localStorage.setItem(selectedEl, selectedEl);
    // if (isDark) {
    //   $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
    //   isDark = !isDark;
    // } else {
    //   $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
    //   isDark = !isDark;
    // }
});

document.getElementById('timeSlot9').value = localStorage.getItem('timeSlot9');
document.getElementById('timeSlot10').value = localStorage.getItem('timeSlot10');
document.getElementById('timeSlot11').value = localStorage.getItem('timeSlot11');
document.getElementById('timeSlot12').value = localStorage.getItem('timeSlot12');
document.getElementById('timeSlot13').value = localStorage.getItem('timeSlot13');
document.getElementById('timeSlot14').value = localStorage.getItem('timeSlot14');
document.getElementById('timeSlot15').value = localStorage.getItem('timeSlot15');
document.getElementById('timeSlot16').value = localStorage.getItem('timeSlot16');
document.getElementById('timeSlot17').value = localStorage.getItem('timeSlot17');


