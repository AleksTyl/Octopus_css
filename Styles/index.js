let faceStyle = document.querySelector('.color');
let leg1 = document.querySelector('.leg1');
let leg2 = document.querySelector('.leg2');
let leg3 = document.querySelector('.leg3');
let leg4 = document.querySelector('.leg4');
let leg5 = document.querySelector('.leg5');
let leg6 = document.querySelector('.leg6');
let leg7 = document.querySelector('.leg7');
let leg8 = document.querySelector('.leg8');

let smile = document.querySelector('.happy-mouth');
let button = document.querySelector('.btn');
let mouth = document.getElementById('mouth');


button.addEventListener('click', function changeToSad(e) {
    mouth.classList.toggle('sad-mouth');
    faceStyle.classList.toggle('color2');
    leg1.classList.toggle('color2');
    leg2.classList.toggle('color2');
    leg3.classList.toggle('color2');
    leg4.classList.toggle('color2');
    leg5.classList.toggle('color2');
    leg6.classList.toggle('color2');
    leg7.classList.toggle('color2');
    leg8.classList.toggle('color2');
});


