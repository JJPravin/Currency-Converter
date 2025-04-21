const apiKey = 'YOUR_API_KEY';
        const apiUrl = 'https://api.exchangerate-api.com/v4/latest/';

        const fromCurrencySelect = document.getElementById('fromCurrency');
        const toCurrencySelect = document.getElementById('toCurrency');
        const amountInput = document.getElementById('amount');
        const convertButton = document.querySelector('.primary-button');
        const clearButton = document.querySelector('#conversion-result .secondary-button');

        function updateToCurrencyOptions() {
            const selectedFromCurrency = fromCurrencySelect.value;
            toCurrencySelect.innerHTML = '<option value="">Select Currency</option>'; // Reset options

            Array.from(fromCurrencySelect.options).forEach(option => {
                if (option.value !== selectedFromCurrency && option.value !== '') {
                    const newOption = document.createElement('option');
                    newOption.value = option.value;
                    newOption.textContent = option.textContent;
                    toCurrencySelect.appendChild(newOption);
                }
                updateConvertButtonState();
            });
        }

        function updateConvertButtonState() {
            if (fromCurrencySelect.value !== '' && toCurrencySelect.value !== '' && fromCurrencySelect.value !== toCurrencySelect.value && parseFloat(amountInput.value) > 0) {
                convertButton.disabled = false;
            } else {
                convertButton.disabled = true;
            }
        }

        async function getExchangeRate(fromCurrency, toCurrency) {
            try {
                const response = await fetch(apiUrl + fromCurrency);
                const data = await response.json();
                if (data.rates && data.rates[toCurrency]) {
                    return data.rates[toCurrency];
                } else {
                    console.error(`Could not find exchange rate for ${toCurrency} in ${fromCurrency}.`);
                    return null;
                }
            } catch (error) {
                console.error("Error fetching exchange rate:", error);
                return null;
            }
        }

        async function convertCurrency() {
            const amount = parseFloat(amountInput.value);
            const fromCurrency = fromCurrencySelect.value;
            const toCurrency = toCurrencySelect.value;
            const resultTextElement = document.getElementById("result-text");

            if (!isNaN(amount) && amount > 0) {
                if (fromCurrency === toCurrency) {
                    resultTextElement.textContent = `${amount} ${fromCurrency} is equal to ${amount} ${toCurrency}`;
                    clearButton.style.display = 'inline-block';
                    convertButton.disabled = true; // Disable after conversion
                    return;
                }

                const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
                if (exchangeRate !== null) {
                    const convertedAmount = (amount * exchangeRate).toFixed(2);
                    resultTextElement.textContent = `${amount} ${fromCurrency} is approximately ${convertedAmount} ${toCurrency}`;
                    clearButton.style.display = 'inline-block';
                    convertButton.disabled = true; // Disable after conversion
                } else {
                    resultTextElement.textContent = "Failed to fetch real-time exchange rate.";
                    clearButton.style.display = 'none';
                }
            } else {
                resultTextElement.textContent = "Please enter a valid positive amount.";
                clearButton.style.display = 'none';
            }
        }

        function clearResult() {
            document.getElementById("result-text").textContent = "";
            document.querySelector('#conversion-result .secondary-button').style.display = 'none';
        }

        function clearAll() {
            document.getElementById("amount").value = "";
            fromCurrencySelect.selectedIndex = 0;
            toCurrencySelect.innerHTML = '<option value="">Select Currency</option>';
            convertButton.disabled = true; // Enable for new conversion
            document.getElementById("result-text").textContent = "";
            document.querySelector('#conversion-result .secondary-button').style.display = 'none';
            updateConvertButtonState(); // Re-evaluate if Convert button should be enabled
        }

        fromCurrencySelect.addEventListener('change', updateToCurrencyOptions);
        toCurrencySelect.addEventListener('change', updateConvertButtonState);
        amountInput.addEventListener('input', updateConvertButtonState);

        document.addEventListener('DOMContentLoaded', () => {
            updateToCurrencyOptions(); // Initial population of To Currency options
            document.querySelector('#conversion-result .secondary-button').style.display = 'none';
            convertButton.disabled = true; // Initially disable the convert button
        });