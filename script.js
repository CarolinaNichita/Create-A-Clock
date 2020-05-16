const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + "; Minute: " + min + "; Second: " + sec);

let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
let secPosition = sec * 360 / 60;

function runTheClock() {
     
     hrPosition = hrPosition+(3/360); //Hour arm moves the distance of one hour, so 360 over 12, which is 30 over 3600 seconds
     minPosition = minPosition+(6/60); //We looking for one sixtieh of the degrees of the second hand: (1/60)*6 => 6/60
     secPosition = secPosition+6; //Divide 360 degrees by 60 seconds = 6 degrees

     HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
     MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
     SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);