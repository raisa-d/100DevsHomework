// file will have random functions we want to have throughout our site, use it on other files
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// using ES module to export it

// EXAMPLE: using commonJS (native node.js module system) to export functions
module.exports = {
    generateRandomNumber,
    celsiusToFahrenheit
}