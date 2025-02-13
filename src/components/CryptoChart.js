import React, { useEffect, useState } from 'react';

const CryptoChart = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        setBitcoinPrice(data.bitcoin.usd);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="chart-container">
      <h2>Bitcoin Price</h2>
      <div className="price-display">
        {bitcoinPrice ? (
          <span className="price">${bitcoinPrice.toLocaleString()}</span>
        ) : (
          <span>Loading...</span>
        )}
      </div>
      <p className="update-text">Updates every minute</p>
    </div>
  );
};

export default CryptoChart; 