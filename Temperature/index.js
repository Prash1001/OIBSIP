document.getElementById("convert").addEventListener("click", function () {
    const input = parseFloat(document.getElementById("input").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let converted;
    let unitName;

    if (isNaN(input)) {
        alert("Please enter a valid number.");
        return;
    }

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        converted = (input * 9 / 5) + 32;
        unitName = "Fahrenheit";
    }
      else if (fromUnit === "celsius" && toUnit === "celsius") {
        converted = input ;
        unitName = "Celsius";
    }  else if (fromUnit === "celsius" && toUnit === "kelvin") {
        converted = input + 273.15 ;
        unitName = "kelvin";
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        converted = (input - 32) * 5 / 9;
        unitName = "Celsius";
    } 
    else if (fromUnit === "fahrenheit" && toUnit === "fahrenheit") {
        converted = input ;
        unitName = "fahrenheit";
    }    else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        converted = (input - 32) * (5/9) + 273.15;
        unitName = "fahrenheit";
    }
    else if (fromUnit === "kelvin" && toUnit === "celsius") {
        converted = input - 273.15;
        unitName = "Celsius";
    } 
    else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        converted = (input - 273.15) * 9/5 + 32 ;
        unitName = "fahrenheit";
    }   
     else if (fromUnit === "kelvin" && toUnit === "kelvin") {
        converted = input  ;
        unitName = "kelvin";
    } 

    document.getElementById("result").innerHTML = `Converted Temperature: ${converted.toFixed(2)} ${unitName}`;
});
