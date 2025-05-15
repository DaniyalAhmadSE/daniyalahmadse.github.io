document.addEventListener('DOMContentLoaded', () => {
    loadBackgroundImage();
    initCardWhenReady();
});

function loadBackgroundImage() {
    const backgroundWrapper = document.querySelector('.background-wrapper');

    if (backgroundWrapper) {
        const bgImg = new Image();
        bgImg.src = 'assets/images/background.jpg';

        bgImg.onload = () => {
            backgroundWrapper.style.backgroundImage = `url('${bgImg.src}')`;
            backgroundWrapper.classList.add('loaded');
        };
    }
}

function initCardWhenReady() {
    const profileCard = document.querySelector('.profile-card');
    const profileImage = document.querySelector('.profile-image');
    const fontReadyPromise = document.fonts.ready;

    const imgLoadPromise = new Promise(resolve => {
        if (profileImage.complete) {
            resolve();
        } else {
            profileImage.onload = () => resolve();
        }
    });

    Promise.all([imgLoadPromise, fontReadyPromise]).then(() => {
        profileCard.classList.add('visible');
    });
}
