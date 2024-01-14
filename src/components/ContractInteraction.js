import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const ContractInteractionComponent = () => {
  const [storedData, setStoredData] = useState(null);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const contractAddress = '';
    const abi = [...]; 

    // Load the smart contract
    const contract = new ethers.Contract(contractAddress, abi, provider);

    // Call the get function to retrieve data
    const fetchData = async () => {
      try {
        const data = await contract.get();
        setStoredData(data.toNumber());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Run once when the component mounts

  return (
    <div>
      <h2>Stored Data: {storedData}</h2>
    </div>
  );
};

export default ContractInteractionComponent;
