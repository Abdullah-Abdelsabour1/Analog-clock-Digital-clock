let hours = document.getElementById("hr");
let minutes = document.getElementById("mn");
let seconds = document.getElementById("sc");
let deg = 6 ;
setInterval (()=> {
    let currentTime = new Date();
    let hr = currentTime.getHours() * 30;
    let mn = currentTime.getMinutes() * deg;
    let sc = currentTime.getSeconds() * deg;
    hours.style.transform = `rotateZ(${ hr + (mn / 12)}deg)` ;
    minutes.style.transform = `rotateZ(${mn}deg)` ;
    seconds.style.transform = `rotateZ(${sc}deg)` ;
});

let h = document.querySelector(".h");
let m = document.querySelector(".m");
let s = document.querySelector(".s");
let session = document.querySelector(".session");
setInterval (()=> {
    let currentTime = new Date();
     h.innerHTML = (currentTime.getHours()<10 ? "0" : "") + currentTime.getHours();
     m.innerHTML = (currentTime.getMinutes()<10 ? "0" : "") + currentTime.getMinutes();
     s.innerHTML = (currentTime.getSeconds()<10 ? "0" : "") + currentTime.getSeconds();
     if (currentTime.getHours()> 12){
      session.innerHTML = "PM";
     }
     else {
      session.innerHTML = "AM";
     }
});


