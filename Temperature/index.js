document.getElementById("convertButton").addEventListener("click", function () {
    const input = parseFloat(document.getElementById("input").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let convertedTemperature;
    let unitName;

    if (isNaN(input)) {
        alert("Please enter a valid number.");
        return;
    }

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        convertedTemperature = (input * 9 / 5) + 32;
        unitName = "Fahrenheit";
    }
      else if (fromUnit === "celsius" && toUnit === "celsius") {
        convertedTemperature = input ;
        unitName = "Celsius";
    }  else if (fromUnit === "celsius" && toUnit === "kelvin") {
        convertedTemperature = input + 273.15 ;
        unitName = "kelvin";
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        convertedTemperature = (input - 32) * 5 / 9;
        unitName = "Celsius";
    } 
    else if (fromUnit === "fahrenheit" && toUnit === "fahrenheit") {
        convertedTemperature = input ;
        unitName = "fahrenheit";
    }    else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        convertedTemperature = (input - 32) * (5/9) + 273.15;
        unitName = "fahrenheit";
    }
    else if (fromUnit === "kelvin" && toUnit === "celsius") {
        convertedTemperature = input - 273.15;
        unitName = "Celsius";
    } 
    else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        convertedTemperature = (input - 273.15) * 9/5 + 32 ;
        unitName = "fahrenheit";
    }   
     else if (fromUnit === "kelvin" && toUnit === "kelvin") {
        convertedTemperature = input  ;
        unitName = "kelvin";
    } 

    document.getElementById("result").innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unitName}`;
});
