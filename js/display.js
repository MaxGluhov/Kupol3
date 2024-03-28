// Здесь меняю отображение купола, делаю его динамичным, убирают непрозрачность частицам
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('turn2');
    button.addEventListener('click', () => {
        button.style.display = 'none';
        const kupolX = document.querySelectorAll('#kupX');
        const kupolY = document.querySelectorAll('#kupY');
        const kupolZ = document.querySelectorAll('#kupZ');
        let isAnimating = false;

        kupolX.forEach(el => {
            let currentBrightness = 0;
            let direction = 0.02;
            let brightnessInterval = setInterval(() => {
                currentBrightness += direction;
                el.style.filter = `brightness(${currentBrightness})`;
                if (currentBrightness <= 0 || currentBrightness >= 1) {
                    clearInterval(brightnessInterval);
                }
            }, 0);
        });

        kupolY.forEach(el => {
            let currentBrightness = 0;
            let direction = 0.02;
            let brightnessInterval = setInterval(() => {
                currentBrightness += direction;
                el.style.filter = `brightness(${currentBrightness})`;
                if (currentBrightness <= 0 || currentBrightness >= 1) {
                    clearInterval(brightnessInterval);
                }
            }, 0);
        });

        kupolZ.forEach(el => {
            let currentBrightness = 0;
            let direction = 0.02;
            let brightnessInterval = setInterval(() => {
                currentBrightness += direction;
                el.style.filter = `brightness(${currentBrightness})`;
                if (currentBrightness <= 0 || currentBrightness >= 1) {
                    clearInterval(brightnessInterval);
                }
            }, 0);
        });

    });
});






