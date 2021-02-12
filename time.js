// designed by milad gharibi - instagram @xcripts
const days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'
];

let weekSection = document.getElementById("week-container");
let timeSection = document.getElementById("time-container");
let dateSection = document.getElementById("date-container");

const tick = new Audio("snd/tick.mp3");

setInterval(time, 1000); // 1second

function time() {
    let date = new Date();

    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    if (sec < 10) { sec = "0" + sec; }
    if (min < 10) { min = "0" + min; }
    if (hrs < 10) { hrs = "0" + hrs; }
    let fullTime = `${hrs}:${min}:${sec}`;

    let dd = date.getDay();
    weekSection.innerHTML = days[dd];
    let mm = date.getMonth()+1;
    let yy = date.getFullYear().toString().substring(2);
    if (dd < 10) { dd = "0" + dd; }
    if (mm < 10) { mm = "0" + mm; }
    let fullDate = `${dd}.${mm}.${yy}`;

    timeSection.innerHTML = fullTime;
    dateSection.innerHTML = fullDate;
    
    tick.play();
}
