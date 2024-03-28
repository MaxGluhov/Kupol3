document.addEventListener('DOMContentLoaded', function () {
    const section1 = document.querySelector('.section1');
    const section2 = document.querySelector('.section2');
    const btn1 = document.querySelector('#btn_first');

    btn1.addEventListener('click', function () {
        section1.style.display = 'none';
        section2.style.display = 'block';
        section2.classList.add('fullscreen');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const section1 = document.querySelector('.section1');
    const section2 = document.querySelector('.section2');
    const btn = document.querySelector('#done');

    btn.addEventListener('click', function () {
        section2.style.display = 'none';
        section1.style.display = 'block';
        section1.classList.add('fullscreen');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const section1 = document.querySelector('.section1');
    const section3 = document.querySelector('.section3');
    const btn2 = document.querySelector('#btn_second');

    btn2.addEventListener('click', function () {
        section1.style.display = 'none';
        section3.style.display = 'block';
        section3.classList.add('fullscreen');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const section1 = document.querySelector('.section1');
    const section3 = document.querySelector('.section3');
    const btn = document.querySelector('#done1');

    btn.addEventListener('click', function () {
        section3.style.display = 'none';
        section1.style.display = 'block';
        section1.classList.add('fullscreen');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const section1 = document.querySelector('.section1');
    const section4 = document.querySelector('.section4');
    const btn1 = document.querySelector('#btn_third');

    btn1.addEventListener('click', function () {
        section1.style.display = 'none';
        section4.style.display = 'block';
        section4.classList.add('fullscreen');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const section1 = document.querySelector('.section1');
    const section4 = document.querySelector('.section4');
    const btn = document.querySelector('#done2');

    btn.addEventListener('click', function () {
        section4.style.display = 'none';
        section1.style.display = 'block';
        section1.classList.add('fullscreen');
    });
});

