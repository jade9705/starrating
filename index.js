'use strict';

const valueNum = document.querySelector('.rating__value');

const valueStars = document.querySelectorAll('.rating__star');



valueStars.forEach ((star) => {
    star.addEventListener('click', () => {
        star.classList.toggle('rating__star--on');

})})