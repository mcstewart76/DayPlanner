//Moment times
const rowAdd = document.getElementById("rowAdder");
const timeGrab = document.getElementsByClassName('hour');
const curTime = document.getElementById('currentDay')

var currentTime = moment();
// append times to blocks

var currentDate = moment().format('MMMM Do, YYYY');
var timeBlock0 = moment().subtract(3,'h').format('hA');
var timeBlock1 = moment().subtract(2,'h').format('hA');
var timeBlock2 = moment().subtract(1,'h').format('hA');
var timeBlock3 = currentTime.format("hA")
var timeBlock4 = moment().add(1,'h').format('hA');
var timeBlock5 = moment().add(2,'h').format('hA');
var timeBlock6 = moment().add(3,'h').format('hA');
var timeBlock7 = moment().add(4,'h').format('hA');
var timeBlock8 = moment().add(5,'h').format('hA');
curTime.innerHTML = currentDate; 
const timeBlocks = [timeBlock0, timeBlock1, timeBlock2, timeBlock3, timeBlock4, timeBlock5, timeBlock6, timeBlock7, timeBlock8];
$('.saveBtn').on('click', function(){
    // var descriptionBox = 
    // var currentDescriptTime = 
    // localStorage.setItem(descriptionBox, currentDescriptTime);
});

$.each(timeBlocks, function(name, value){
    //timeBlocks[index].classList.add(name)
    
    
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'justify-content-center', 'd-flex', 'flex-nowrap');
    const rowHour = document.createElement('div');
    rowHour.classList.add('hour', 'pl-3', 'd-flex');
    rowHour.setAttribute("id", value);
    rowHour.innerHTML = value;

   rowDiv.appendChild(rowHour);
    
    const rowDescript = document.createElement('textarea');
    rowDescript.classList.add('description', 'px-1', 'd-flex', 'descriptBox', 'time-block');
    rowDescript.setAttribute("id", value);
    rowDiv.appendChild(rowDescript);
    
    const rowSave = document.createElement('button');
    rowSave.classList.add('saveBtn', 'm-0', 'd-flex');
    rowSave.setAttribute("id", value);
    rowDiv.appendChild(rowSave);

    rowAdd.appendChild(rowDiv)

});

$.each($('.hour'), function(index, value) {
    if(index > 4){
        document.querySelector("#rowAdder > div:nth-child(5) > textarea").classList.add('future')
        document.querySelector("#rowAdder > div:nth-child(6) > textarea").classList.add('future')
        document.querySelector("#rowAdder > div:nth-child(7) > textarea").classList.add('future')
        document.querySelector("#rowAdder > div:nth-child(8) > textarea").classList.add('future')
        document.querySelector("#rowAdder > div:nth-child(9) > textarea").classList.add('future')
    }
    else if(index = 4){
        document.querySelector("#rowAdder > div:nth-child(4) > textarea").classList.add('present')
    }
    $(".descriptBox").addClass("past")
    
});


//create rows by appending classes


//text box
//at current time change color
//using if statement and local variable for current time

//save button on click function
//save button local storage