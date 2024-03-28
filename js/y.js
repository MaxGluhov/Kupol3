const buttonY = document.getElementById('Y');
const buttonX = document.getElementById('X');
const buttonZ = document.getElementById('Z');


const elementX = document.getElementById('kupX');
const elementZ = document.getElementById('kupZ');
const elementY = document.getElementById('kupY');


buttonY.addEventListener('click', function () {

    elementX.style.display = 'none';
    elementZ.style.display = 'none';


    elementY.style.display = 'block';
});

buttonX.addEventListener('click', function () {

    elementY.style.display = 'none';
    elementZ.style.display = 'none';


    elementX.style.display = 'block';
});

buttonZ.addEventListener('click', function () {

    elementX.style.display = 'none';
    elementY.style.display = 'none';


    elementZ.style.display = 'block';
});

