var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

var containerEl = $('#containerEl');
// var containerEl = document.querySelector(".container");

var dayStart = 9;
var dayEnd = 23;

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
    var timeSlotDetail = $('<div>');
    timeSlotDetail.addClass('col-10');
    timeContainer.append(timeSlotDetail);

    // if (i.toString() < moment().format('HH')) {
    //     timeSlotDetail.addClass('past');
    // } else if (i.toString() == moment().format('HH')) {
    //     timeSlotDetail.addClass('present');
    // } else timeSlotDetail.addClass('future');

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

}






// var test = 21;


// if (test.toString() < moment().format('HH')) {
//     console.log('past');
// } else if (test.toString() == moment().format('HH')) {
//     console.log('present');
// } else console.log('future');

// if (moment(test.toString(), 'HH').format('HH') < moment().format('HH')) {
//     console.log('past');
// } else if (moment(test.toString(), 'HH').format('HH') == moment().format('HH')) {
//     console.log('present');
// } else console.log('future');

// if (moment(test, 'HH').format('HH') < moment().format('HH')) {
//     console.log('past');
// } else if (moment(test, 'HH').format('HH') = moment().format('HH')) {
//     console.log('present');
// } else console.log('future');

