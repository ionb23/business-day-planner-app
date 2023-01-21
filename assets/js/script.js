var today = moment();
$("#currentDay").text(today.format("dddd, MMMM do YYYY"));

var containerEl = $('.container');

var dayStart = 9;
var dayEnd = 17;

console.log(dayStart);
// console.log(dayStart.format("h:mm"));
console.log(moment(dayStart,'HH').format('HH:mm'));
console.log(moment(dayEnd,'HH').format('HH:mm'));


console.log(dayEnd-dayStart);

for(i = dayStart; i >= dayEnd; i++) {
    // Create a new '<div>' for each hours in the business day
    var timeslotEl = $('<div>');
    
}