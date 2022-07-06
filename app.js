'use strict';
const button = document.querySelector('.button');
const nightLabel = document.querySelector('.night');



button.addEventListener('click', () => {
    document.body.classList.toggle('night-theme');
    document.body.classList.toggle('day-theme');

    const bodyClass = document.body.className;
    if (bodyClass === 'night-theme') {
        button.textContent = "Switch to Day";
        nightLabel.style.color = '#679CC0';

    } else {
        button.textContent = 'Switch to Night';
        nightLabel.style.color = 'rgb(36 40 65 / 80%)';

    }
    console.log('current body class/ theme: ' + bodyClass);
})