var citySceen = document.querySelector('.city-sceen');
var road = document.querySelector('.road');
var car = document.querySelector('.car');
var carAudio = document.querySelector('.carAudio');
var displayFlag = document.querySelector('.displayFlag');
var cloud = document.querySelector('.cloud');
var nseconds = document.getElementById('nSeconds').textContent;

let countDown = setInterval(function () {
    nseconds--;
    document.getElementById('nSeconds').textContent = nseconds;
    if (nseconds < 0) {
        clearInterval(countDown);
        displayFlag.remove();
        cloud.classList.add('cloudAnimation');
    }

}, 1000);

setInterval(function () {
    citySceen.classList.toggle('daytonight');
}, 8000);

document.addEventListener('keypress', keyControl);

let light = false;
let music = false;
// let mycarArr = ['src/images/lights-off.png', 'src/images/lights-on.png'];
let mycarArr = ['../src/images/lights-off.png', '../src/images/lights-on.png'];
function keyControl(e) {
    console.log(e.keyCode);
    if (e.keyCode == 32) //SpaceBar-Keyboard
    {
        road.classList.toggle('roadAnimationTogg');
        car.classList.toggle('carAnimationTogg');
    }
    if (e.keyCode == 108) //L-keyBorad
    {
        if (light) {
            car.setAttribute('src', mycarArr[0]);
            light = false;
        }
        else {
            car.setAttribute('src', mycarArr[1]);
            light = true;
        }
    }

    if (e.keyCode == 109)//m-keyboard
    {
        if (music) {
            carAudio.pause();
            music = false;
        }
        else {
            carAudio.play();
            music = true;
        }

    }
}

//https://youtu.be/kdgnczbh3dk
