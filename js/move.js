document.addEventListener('DOMContentLoaded', function () {

    // Код от предыдущего скрипта, изменяющего скорость анимации
    const slowDownButton = document.getElementById('slowDownButton');
    slowDownButton.addEventListener('click', () => {
        const polElements = document.querySelectorAll('.pol');
        polElements.forEach(el => {
            const currentAnimationDuration = window.getComputedStyle(el).animationDuration;
            const currentDuration = parseFloat(currentAnimationDuration.replace('s', ''));
            if (currentDuration > 0) {
                el.style.animationDuration = `${currentDuration + 1}s`;
            }
        });
    });

    // Код, увеличивающий прозрачность элементов
    const increaseOpacityButton = document.getElementById('slowDownButton');
    increaseOpacityButton.addEventListener('click', () => {
        const kupolElements = document.querySelectorAll('.Kupol');
        kupolElements.forEach(el => {
            const currentOpacity = window.getComputedStyle(el).opacity;
            const currentOpacityValue = parseFloat(currentOpacity);
            if (currentOpacityValue < 1) {
                el.style.opacity = currentOpacityValue + 0.2;
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', function () {

    // Код от предыдущего скрипта, изменяющего скорость анимации
    const slowDownButton = document.getElementById('speedUpButton');
    slowDownButton.addEventListener('click', () => {
        const polElements = document.querySelectorAll('.pol');
        polElements.forEach(el => {
            const currentAnimationDuration = window.getComputedStyle(el).animationDuration;
            const currentDuration = parseFloat(currentAnimationDuration.replace('s', ''));
            if (currentDuration > 0) {
                el.style.animationDuration = `${currentDuration - 1}s`;
            }
        });
    });

    // Код, увеличивающий прозрачность
    const increaseOpacityButton = document.getElementById('speedUpButton');
    increaseOpacityButton.addEventListener('click', () => {
        const kupolElements = document.querySelectorAll('.Kupol');
        kupolElements.forEach(el => {
            const currentOpacity = window.getComputedStyle(el).opacity;
            const currentOpacityValue = parseFloat(currentOpacity);
            if (currentOpacityValue < 2) {
                el.style.opacity = currentOpacityValue - 0.2;
            }
        });
    });

});
// Здесь меняю отображение купола, делаю его динамичным, убирают непрозрачность частицам
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('turn');
    button.addEventListener('click', () => {
        button.style.display = 'none';
        const kupol = document.querySelectorAll('.Kupol');
        const kupolOpacity = document.querySelectorAll('.pol');
        let isAnimating = false;


        kupolOpacity.forEach(el => {
            let currentOpacity = 1;
            let opacityInterval = setInterval(() => {
                currentOpacity -= 0.02;
                el.style.opacity = currentOpacity;
                if (currentOpacity <= 0) {
                    clearInterval(opacityInterval);
                }
            }, 10);
        });

        kupol.forEach(el => {
            let currentBrightness = 0;
            let direction = 0.02;
            let brightnessInterval = setInterval(() => {
                currentBrightness += direction;
                el.style.filter = `brightness(${currentBrightness})`;
                if (currentBrightness <= 0 || currentBrightness >= 1) {
                    clearInterval(brightnessInterval);
                }
            }, 10);
        });
        if (!isAnimating) {
            isAnimating = true;
            const kupol = document.querySelectorAll('.Kupol');

            kupol.forEach(el => {
                let currentScale = 1.1;
                let direction = 0.007;
                let scaleInterval = setInterval(() => {
                    currentScale += direction;
                    el.style.transform = `scale(${currentScale})`;
                    if (currentScale <= 0.9 || currentScale >= 1.2) {
                        direction = -direction;
                    }
                }, 10);
                el.dataset.scaleInterval = scaleInterval;
            });
        } else {
            isAnimating = false;
            const kupol = document.querySelectorAll('.Kupol');

            kupol.forEach(el => {
                clearInterval(el.dataset.scaleInterval);
                el.style.transform = 'scale(1)';
            });
        }
    });
});