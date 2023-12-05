let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')
let rankineInput = document.querySelector('#rankine > input')
let reaumurInput = document.querySelector('#reaumur > input')

let clearBtn = document.getElementById('clearBtn');  /*add this line of code*/
let convertBtn = document.getElementById('convertBtn'); /*add this line of code*/

function roundNumber(number) {
    return Math.round(number * 100) / 100;
}

function showInvalidMessage() {  /*create this function*/
    alert('Please enter a valid temperature humans.'); /*Think this is same like printf in C for now. i will make it more clear in future*/
}

function convertTemperature() { /*Just creating a function*/
    let cTemp = parseFloat(celsiusInput.value);
    let fTemp = parseFloat(fahrenheitInput.value);
    let kTemp = parseFloat(kelvinInput.value);
    let rTemp = parseFloat(rankineInput.value);
    let reTemp = parseFloat(reaumurInput.value);

    if (!isNaN(cTemp)) {   /*if(condition) !isNaN means "not equals to is Not a Number"*/
        fTemp = (cTemp * (9 / 5)) + 32;
        kTemp = cTemp + 273.15;
        rTemp = cTemp * (9 / 5) + 491.67;
        reTemp = cTemp * (4 / 5);
    } else if (!isNaN(fTemp)) {
        cTemp = (fTemp - 32) * (5 / 9);
        kTemp = (fTemp - 32) * (5 / 9) + 273.15;
        rTemp = fTemp + 459.67;
        reTemp = cTemp * (4 / 5);
    } else if (!isNaN(kTemp)) {
        cTemp = kTemp - 273.15;
        fTemp = (kTemp - 273.15) * (9 / 5) + 32;
        rTemp = kTemp * (9 / 5);
        reTemp = cTemp * (4 / 5);
    } else if (!isNaN(rTemp)) {
        cTemp = (rTemp - 491.67) * (5 / 9);
        fTemp = rTemp - 459.67;
        kTemp = rTemp * (5 / 9);
        reTemp = cTemp * (4 / 5);
    } else if (!isNaN(reTemp)) {
        cTemp = reTemp * (5 / 4);
        fTemp = (reTemp * (9 / 4)) + 32;
        kTemp = cTemp + 273.15;
        rTemp = cTemp * (9 / 5) + 491.67;
    } else {
        showInvalidMessage();  /*function call we define this function above see once*/
        return;
    }

    celsiusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
    rankineInput.value = roundNumber(rTemp);
    reaumurInput.value = roundNumber(reTemp);
}

convertBtn.addEventListener('click', convertTemperature);  /*when we click Convert button then it converts*/

clearBtn.addEventListener('click', () => {  /*This is for ClearAll button*/
    celsiusInput.value = ""; /*if you use celsiusInput.value="5" then after you press ClearAll button then 5 will be shown to your screen try this once */
    fahrenheitInput.value = "";
    kelvinInput.value = "";
    rankineInput.value = "";
    reaumurInput.value = "";
});
/*happing coding*/