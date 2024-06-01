function generateRandom() {
    return Math.floor(Math.random() * 100) + 1;
}

function celciusToFahrenheit(celcius) {
    return(celcius * 9) / + 32;
}


//* Old ways/Default of exporting functions
module.exports = {
    generateRandom,
    celciusToFahrenheit
};