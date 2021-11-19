let myform = document.getElementById('myform');
let targetimage = document.getElementById('targetimage');
let inputrange = document.querySelectorAll('.slider');
// console.log(inputrange);

myform.addEventListener('submit', function (e) {
    e.preventDefault();
    let urlimage = document.getElementById('onlineurl');
    let urlimageval = urlimage.value;
    if (urlimageval.length) {
        targetimage.setAttribute('src', urlimageval);
        urlimage.value = " ";
    }
});

for (let i = 0; i <= inputrange.length - 1; i++) {
    inputrange[i].addEventListener('input', editimage);
    // console.log(inputrange[i]);
}

function editimage() {
    let gs = document.getElementById('gs');
    let blur = document.getElementById('blur');
    let huerotate = document.getElementById('hue-rotate');
    let sepia = document.getElementById('sepia');

    // let gsVal = gs.value;
    // let blurVal = blur.value;
    // let huerotateVal = huerotate.value;
    // let sepiaVal = sepia.value;

    // // targetimage.style.filter = 'grayscale(' + gsVal + '%) blur(' + blurVal + '%)';
    // targetimage.style.filter = 'grayscale(' + gsVal + '%) blur(' + blurVal + 'px) hue-rotate(' + huerotateVal + 'deg) sepia(' + sepiaVal + ' %)';
    // // targetimage.style.filter = 'blur(' + blurVal + 'px)';


    let gsval = gs.value;
    let blurval = blur.value;
    let huerotateval = huerotate.value;
    let sepiaval = sepia.value;

    targetimage.style.filter = 'grayscale(' + gsval + '%) blur(' + blurval + 'px) hue-rotate(' + huerotateval + 'deg) sepia(' + sepiaval + '%)';

}

let sliderform = document.getElementById('slider-form');
sliderform.addEventListener('reset', function () {
    sliderform.reset();
    setTimeout(function () {
        editimage();
    }, 0)
})

