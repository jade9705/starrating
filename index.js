'use strict';

const valueNum = document.querySelector('.rating__value');
const valueStars = document.querySelectorAll('.rating__star');

let clickedStarIndex = 3;

valueStars.forEach ((star, index) => {
    star.addEventListener('click', () => {
        clickedStarIndex = index;
        // star.classList.toggle('rating__star--on');
        starLight();
})})

const starLight =  () => {
   valueStars.forEach((star, index) => {
   if (clickedStarIndex >= index) {
       star.className = "rating__star rating__star--on";
   } else {
       star.className = "rating__star";

   }

   })

}