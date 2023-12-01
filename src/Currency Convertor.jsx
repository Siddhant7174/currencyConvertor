import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyConverter = () => {
  const [sourceCurrency, setSourceCurrency] = useState('INR');
  const [targetCurrency, setTargetCurrency] = useState('USD');
  const [sourceValue, setSourceValue] = useState(1);
  const [targetValue, setTargetValue] = useState(null);

  useEffect(() => {
    const convertCurrency = async () => {
      try {
        const response = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/${sourceCurrency}`
        );

        const exchangeRate = response.data.rates[targetCurrency];
        setTargetValue((sourceValue * exchangeRate).toFixed(2));
      } catch (error) {
        console.error('Error fetching exchange rates:', error.message);
      }
    };
    convertCurrency();
  }, [sourceCurrency, targetCurrency, sourceValue,targetValue]);

  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
        <label>
          Source Currency:
          <input
            type="text"
            value={sourceValue}
            onChange={(e) => setSourceValue(e.target.value)}
          />
          <select
            value={sourceCurrency}
            onChange={(e) => setSourceCurrency(e.target.value)}
          >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="AED">AED</option>
            <option value="GBP">GBP</option>
            <option value="CAD">CAD</option>
            <option value="CAD">CAD</option>
            <option value="SGD">SGD</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
            <option value="PKR">PKR</option>
            <option value="ZAR">ZAR</option>
            <option value="ALL">ALL</option>
            {/* Add other currencies as needed */}
          </select>
        </label>
      </div>
      <div>
        <label>
          Target Currency:
          <input type="text" value={targetValue} readOnly />
          <select
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="AED">AED</option>
            <option value="GBP">GBP</option>
            <option value="CAD">CAD</option>
            <option value="CAD">CAD</option>
            <option value="SGD">SGD</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
            <option value="PKR">PKR</option>
            <option value="ZAR">ZAR</option>
            <option value="ALL">ALL</option>
            <option value="INR">INR</option>
            {/* Add other currencies as needed */}
          </select>
        </label>
      </div>
    </div>
  );
};

export default CurrencyConverter;
