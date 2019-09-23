console.log('its hot');

const toCelsius =  () => {
    let tempInput = document.getElementById('temperatureInput').value
    tempInput = parseFloat(tempInput);
    return convertedTemp = (tempInput-32) / 1.8;
}

const toFahrenheit =  () => {
    let tempInput = document.getElementById('temperatureInput').value
    tempInput = parseFloat(tempInput);
    return convertedTemp = (tempInput*1.8) + 32;
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
  console.log(convertedTemp, e);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);