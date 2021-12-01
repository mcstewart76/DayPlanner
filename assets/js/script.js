//Moment times
const rowAdd = document.getElementsByClassName("rowAdder");
var currentTime = moment();
// append times to blocks

var timeBlock0 = moment().subtract(3,'h').format('hA');
var timeBlock1 = moment().subtract(2,'h').format('hA');
var timeBlock2 = moment().subtract(1,'h').format('hA');
var timeBlock3 = currentTime.format("hA")
var timeBlock4 = moment().add(1,'h').format('hA');
var timeBlock5 = moment().add(2,'h').format('hA');
var timeBlock6 = moment().add(3,'h').format('hA');
var timeBlock7 = moment().add(4,'h').format('hA');
var timeBlock8 = moment().add(5,'h').format('hA');
const timeBlocks = [timeBlock0, timeBlock1, timeBlock2, timeBlock3, timeBlock4, timeBlock5, timeBlock6, timeBlock7, timeBlock8];
$.each(timeBlocks, function(name, value){
console.log(`${name} = ${value}`)

});
if(currentTime.format("hA") == timeBlock3){
 $("#hour").text(timeBlock3);   
 $("#descriptBox").addClass("present");
//  $("#descriptBox").removeClass("past")
}
if(currentTime.format("hA") < timeBlock3){
       
    $("#descriptBox").addClass("future");
}
if(currentTime.format("hA") > timeBlock3){
       
    $("#descriptBox").addClass("past");
}

//create rows by appending classes


//text box
//at current time change color
//using if statement and local variable for current time

//save button on click function
//save button local storage