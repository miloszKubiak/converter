const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const spanOne = document.querySelector('.one');
const spanTwo = document.querySelector('.two');
let fahrenheit;
let celcius;

const swap = () => {
    if (spanOne.innerText === '°C') {
        spanOne.innerText = '°F';
        spanTwo.innerText = '°C';
    } else {
        spanOne.innerText = '°C';
        spanTwo.innerText = '°F';
    }
};

changeBtn.addEventListener('click', swap);