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

const celToFahr = () => {
    fahrenheit = converter.value * 1.8 + 32;
    result.innerText = `${converter.value}°C is ${fahrenheit.toFixed(1)}°F`;
    converter.value = '';
};

const fahrToCel = () => {
    celcius = (converter.value * - 32) / 1.8;
    result.innerText = `${converter.value}°F is ${celcius.toFixed(1)}°C`;
    converter.value = '';    
};

const conversion = () => {

}

changeBtn.addEventListener('click', swap);
convBtn.addEventListener('click', conversion)