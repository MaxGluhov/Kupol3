
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('turn1');
    button.addEventListener('click', () => {
        button.style.display = 'none';
        const kupol = document.querySelectorAll('.Kupoly_all');
        let isAnimating = false;

        kupol.forEach(el => {
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