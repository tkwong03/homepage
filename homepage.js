function currentTime(){
//  constants used
    const date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

//  variables for getting times
    const year = date.getFullYear();

    const dayName = days[date.getDay()];
    const dayNum = date.getDate();

    const hour24 = date.getHours();
    var hour12 = hour24 % 12;
    if(hour12 == 0) hour12 = "12";
    else if (hour12 < 10) hour12 = "0" + hour12;

    const ampm = hour24 < 12 ? "AM" : "PM";

    var minutes = date.getMinutes();
    minutes = (minutes < 10) ? "0" + minutes : String(minutes);

    const month = months[date.getMonth()];

    document.getElementById("day").innerText = dayName;
    document.getElementById("hourminute").innerText = hour12 + "\n" + minutes;
    document.getElementById("ampm").innerText = ampm;
}
currentTime();
window.onload = function() { setInterval(currentTime, 1000); }
