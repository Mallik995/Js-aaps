var margin = 0;
var carInterval;

function start() {

    carInterval = setInterval(runCar, 100);

    function runCar() {
        if (margin == 1500) {
            clearInterval(carInterval);
            margin = 0;
        }
        else {
            margin += 25;
            var car = document.getElementById("car");
            car.style.marginLeft = margin + "px";
        }
    }

}

function stop() {
    clearInterval(carInterval);
}