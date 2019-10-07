console.log('its hot');

let convertedTemp = '';

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint
}

const toCelsius =  () => {
    let tempInput = document.getElementById('temperatureInput').value
    tempInput = parseFloat(tempInput);
    convertedTemp = (tempInput-32) / 1.8;
}

const toFahrenheit =  () => {
    let tempInput = document.getElementById('temperatureInput').value
    tempInput = parseFloat(tempInput);
    convertedTemp = (tempInput*1.8) + 32;
}


// Get a reference to the button element in the DOM
const button = document.getElementById("convert-button");

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = (e) => {
    if (document.getElementById('celsius').checked) { 
        toCelsius();
        
    } else if (document.getElementById('fahrenheit').checked) {
        toFahrenheit();
    }
    printToDom (convertedTemp, 'result');
    
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

const temp = document.getElementById('temperatureInput');

temp.addEventListener('keydown', (e) => {
    if(e.keyCode === 13){
      determineConverter();
    }
  });
//document.getElementById('temperatureInput').addEventListener("keydown", pressEnter)
