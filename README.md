# Currency Converter

A simple and user-friendly web application to convert currencies. It fetches real-time exchange rates from the ExchangeRate-API to provide up-to-date conversion results.

## Features

* **Intuitive Interface:** Clean and easy-to-use design.
* **Wide Range of Currencies:** Supports multiple popular currencies.
* **Real-time Exchange Rates:** Fetches the latest exchange rates for accurate conversions.
* **Clear Result Display:** Shows the converted amount clearly.
* **Easy Clearing:** A "Clear" button to reset the converter.

## Technologies Used

* HTML
* CSS
* JavaScript
* [ExchangeRate-API](https://www.exchangerate-api.com/) for exchange rate data.

## Setup

To run this currency converter locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
    Replace `<repository-url>` with the URL of your GitHub repository.

2.  **Open `index.html` in your web browser:**
    Simply navigate to the cloned directory and open the `index.html` file. The currency converter will run directly in your browser.

### API Key

This application uses the ExchangeRate-API to fetch currency exchange rates. **You will need to replace `'YOUR_API_KEY'` in the `app.js` file with your own API key from ExchangeRate-API.**

1.  Go to the [ExchangeRate-API website](https://www.exchangerate-api.com/) and sign up for a free account to get your API key.
2.  Open the `app.js` file.
3.  Locate the following line:
    ```javascript
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    ```
4.  Replace `'YOUR_API_KEY'` with the API key you obtained.

## Usage

1.  Enter the amount you want to convert in the "Amount" field.
2.  Select the original currency from the "From Currency" dropdown.
3.  Select the target currency from the "To Currency" dropdown.
4.  Click the "Convert" button.
5.  The converted amount will be displayed in the result area.
6.  Click the "Clear" button to reset the converter.

## Disclaimer

Please note that the exchange rates are provided by the ExchangeRate-API and may vary slightly from other sources.

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please feel free to open a pull request or submit an issue on GitHub.

## License

MIT License
