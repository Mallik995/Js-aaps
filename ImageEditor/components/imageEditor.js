let myform = document.getElementById('myform');
let targetimage = document.getElementById('targetimage');
let inputrange = document.querySelectorAll('.slider');

myform.addEventListener('submit', function (e) {
    e.preventDefault();
    let urlimage = document.getElementById('onlineurl');
    let onlineurlVal = urlimage.value;
    targetimage.setAttribute('src', onlineurlVal);
})

for (let i = 0; i <= inputrange.length - 1; i++) {
    inputrange[i].addEventListener('input', editimage);
}

function editimage() {
    let gs = document.getElementById('gs');
    let blur = document.getElementById('blur');
    let huerotate = document.getElementById('hue-rotate');
    let sepia = document.getElementById('sepia');

    let gsVal = gs.value;
    let blurVal = blur.value;
    let huerotateVal = huerotate.value;
    let sepiaVal = sepia.value;

    // targetimage.style.filter = 'grayscale(' + gsVal + '%) blur(' + blurVal + '%)';
    // targetimage.style.filter = 'grayscale(' + gsVal + '%) blur(' + blurVal + 'px) hue-rotate(' + huerotateVal + 'deg) sepia(' + sepiaVal + ' %)';
    targetimage.style.filter = 'blur(' + blurVal + 'px)';

}
