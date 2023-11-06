document.addEventListener("DOMContentLoaded", function () {
    const inputTemp = document.getElementById('inputTemp');
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');
    const convertBtn = document.getElementById('convertBtn');
    const result = document.getElementById('result');

    convertBtn.addEventListener('click', () => {
        const inputValue = parseFloat(inputTemp.value);
        const from = fromUnit.value;
        const to = toUnit.value;

        if (from === to) {
            result.textContent = "Same unit, no conversion needed.";
            return;
        }

        let convertedValue;

        if (from === 'celsius' && to === 'fahrenheit') {
            convertedValue = (inputValue * 9/5) + 32;
        } else if (from === 'fahrenheit' && to === 'celsius') {
            convertedValue = (inputValue - 32) * 5/9;
        } else if (from === 'celsius' && to === 'kelvin') {
            convertedValue = inputValue + 273.15;
        } else if (from === 'kelvin' && to === 'celsius') {
            convertedValue = inputValue - 273.15;
        }

        if (!isNaN(convertedValue)) {
            result.textContent = `${inputValue} ${from.toUpperCase()} is ${convertedValue.toFixed(2)} ${to.toUpperCase()}`;
        } else {
            result.textContent = "Invalid input. Please enter a valid number.";
        }
    });
});
