var day_of_week = document.getElementById('day-of-week');
var current_date = document.getElementById("date");
var current_time = document.getElementById("time");
var time_zone = document.getElementById("time_zone");
var ul = document.getElementById("nav_links");
var navElements = document.querySelectorAll('a');


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        
        nav.classList.toggle('nav-active');
        nav.classList.toggle('nav-ease-in');

    });
    
}

navSlide();
// get the month by name
const month = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var weekday = new Array(7);

weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday"; 


// get current date

var today = new Date();
var day = weekday[today.getDay()];
var today_date = month[today.getMonth()] + ' ' + today.getDate() +  ' ' + today.getFullYear(); 


// document.getElementById("time-zone").innerHTML = "Time in: UTC"; 
// document.getElementById("time").innerHTML = '00:00:00';


navElements.forEach(function (element, index){
    element.addEventListener('click', function(e) {
        // e.preventDefault();
        let value_change;
        switch (index) 
        {
            case 1:
               document.getElementById("time-zone").innerHTML = "Time in: CAT";
                value_change = 1;
                StopLocalClock();
                gettime(value_change);
               break;
            case 2:
               document.getElementById("time-zone").innerHTML = "Time in: CTT";
                value_change = + 8;
                StopLocalClock();
                gettime(value_change);
           break;
            case 3:
                document.getElementById("time-zone").innerHTML = "Time in: EET";
                value_change = + 2;
                StopLocalClock();
                gettime(value_change);
               break;
            case 4:
               document.getElementById("time-zone").innerHTML = "Time in: EST";
               value_change = - 5; 
               StopLocalClock();
               gettime(value_change);
               break;
            case 5:
                document.getElementById("time-zone").innerHTML = "Time in: CST";
                value_change = - 6;
                StopLocalClock();
                gettime(value_change);
               break;
            default:
            case 0:
                document.getElementById("time-zone").innerHTML = "Time in: UTC";
                StartLocalClock()
                utc_time();
                break;
            
        }
    
    });
    
})




function utc_time() {
    var localtime = new Date();
    localtime.setHours(localtime.getHours() - 1);
    var hours = localtime.getHours();
    var minutes = localtime.getMinutes();
    var seconds = localtime.getSeconds();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var time = hours + ":" + minutes + ":" + seconds; + " ";
    if (hours > 11) {
        time += " PM";
    } else {
        time += " AM";
    }
    // console.log(time);
    document.getElementById("time").innerHTML = time;
};

var timeInterval = setInterval(utc_time, 1000);
function gettime(value_change) {

        var value;
        if (value_change) {
            value = value_change;
        }

        else {
            value = -1;
        }
        var change_time = new Date();
        change_time.setHours(change_time.getHours() + value)
        var hours = change_time.getHours();
        var minutes = change_time.getMinutes();
        var seconds = change_time.getSeconds();
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        var time = hours + ":" + minutes + ":" + seconds; + " ";
        if (hours > 11) {
            time += " PM";
        } else {
            time += " AM";
        }
        // console.log(time);
        document.getElementById("time").innerHTML = time;
}

function StopLocalClock() {
    clearInterval(timeInterval);
}

function StartLocalClock() {
    timeInterval = setInterval(utc_time, 1000);
}

day_of_week.innerHTML = day;
current_date.innerHTML = today_date;
