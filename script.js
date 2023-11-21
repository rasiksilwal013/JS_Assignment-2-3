// Conversion rates 
const cadToUsdRate = 0.75;
const usdToCadRate = 1.33;
const usdToUsdRate = 1.00;
const cadToCadRate = 1.00;

// Function to convert from CAD to USD
function convertCadToUsd(amount) {
    return amount * cadToUsdRate;
}

// Function to convert from USD to CAD
function convertUsdToCad(amount) {
    return amount * usdToCadRate;
}

function convertUsdToUsd(amount){
    return amount * usdToUsdRate;
}

function convertCadTOCad(amount){
    return amount * cadToCadRate;
}


// Function to handle button click and perform currency conversion
function convertCurrency() {
    const amountInput = document.getElementById("amount");
    const fromCurrencySelect = document.getElementById("fromCurrency");
    const toCurrencySelect = document.getElementById("toCurrency");
    const resultParagraph = document.getElementById("result");

    // Get user input values
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;


    // Perform conversion based on selected currencies
    let result;
    if (fromCurrency === "CAD" && toCurrency === "USD") {
        result = convertCadToUsd(amount);
    } else if (fromCurrency === "USD" && toCurrency === "USD") {
        result = convertUsdToUsd(amount);
    }

    else if (fromCurrency === "CAD" && toCurrency === "CAD") {
        result = convertCadTOCad(amount);
    }
    
    else if (fromCurrency === "USD" && toCurrency === "CAD") {
        result = convertUsdToCad(amount);
    } else {
        alert("Invalid conversion. Please select different currencies.");
        return;
    }

    // Display the result with up to 3 digits after the decimal point
    resultParagraph.textContent = `${result.toFixed(2)}`;
}
