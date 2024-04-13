//initializing counter to 0
let manu_counter = 0;
let manuFoul_counter = 0
let liverpool_counter = 0;
let liverpoolFoul_counter = 0;

//declaring variables
const manu = document.getElementById('manchester-score');
const manuBtn = document.getElementById('manchester-goal-button');
const manuFoul = document.getElementById('manchester-fouls');
const manuFoulBtn = document.getElementById('manchester-foul-button');
const liverPool = document.getElementById('liverpool-score');
const liverPoolBtn = document.getElementById('liverpool-goal-button');
const liverPoolFoul = document.getElementById('liverpool-fouls');
const liverPoolFoulBtn = document.getElementById('liverpool-foul-button');
const resetBtn = document.getElementById('reset')

//increment manu counter
manuBtn.addEventListener('click', () => {
    manu_counter++;
    manu.value = manu_counter;
});

manuFoulBtn.addEventListener('click', () => {
    manuFoul_counter ++;
    manuFoul.value = manuFoul_counter;
})

//Increment liverpool counter
liverPoolBtn.addEventListener('click', () => {
    liverpool_counter++;
    liverPool.value = liverpool_counter;
})

liverPoolFoulBtn.addEventListener('click', () => {
    liverpoolFoul_counter  ++;
    liverPoolFoul.value = liverpoolFoul_counter ;
})

//reset button
resetBtn.addEventListener('click', () => {
    manu_counter = 0;
    manuFoul_counter = 0
    liverpool_counter = 0;
    liverpoolFoul_counter = 0;
})
