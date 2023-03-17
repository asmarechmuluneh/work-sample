const hourE1=document.getElementById("hour");
const minuteE1=document.getElementById("minutes");
const SecondE1=document.getElementById("seconds");
const ampmE1=document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new  Date().getMinutes();
    let s = new  Date().getSeconds();
    let ampm = "Am";