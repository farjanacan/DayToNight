'use strict';
const button = document.querySelector('.button');
const nightLabel = document.querySelector('.night');
const defaultTheme = document.querySelector('.day-theme');
const dayImages = document.querySelectorAll('.changeDay');
console.log(dayImages)


button.addEventListener('click', () => {
    console.log('default theme class list: '+ defaultTheme.classList);
    console.log('def style ' + defaultTheme.style.backgroundImage)
    if(defaultTheme.style.backgroundImage ===  ''){
        defaultTheme.classList.toggle('night-theme');
        defaultTheme.classList.toggle('day-theme');
    } else{

    }
    
    const defaultClass = defaultTheme.classList;
    console.log('current body class/ theme: ' + defaultClass)
    console.log('does default class contain day theme? ' + defaultClass.contains('day-theme'))
    if (defaultClass.contains('day-theme') ) {
        button.textContent = "Switch to Night";
        nightLabel.style.color = 'rgb(36 40 65 / 80%)';

    } else {
        button.textContent = 'Switch to Day';
        nightLabel.style.color = '#679CC0';

    }
})
for (let day of dayImages) {
    day.addEventListener('click', () => {
        console.log("day source " + day.src)
        if (day.src === 'file:///F:/Projects/DayToNight/day1.jpg') {
            defaultTheme.style.backgroundImage = "url('day1.jpg')";
        } else if (day.src === 'file:///F:/Projects/DayToNight/day2.jpg') {
            defaultTheme.style.backgroundImage = "url('day2.jpg')";
        } else {
            defaultTheme.style.backgroundImage = "url('day3.jpg')";
        }
    })
}