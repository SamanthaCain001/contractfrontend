import React, { useState, useEffect } from 'react';
import './App.css';
import { ethers } from 'ethers';

function App() {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      setProvider(provider);
      
      try {
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
          setAccount(accounts[0].address);
          updateBalance(provider, accounts[0].address);
        }
      } catch (error) {
        console.error('Error checking connection:', error);
      }
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask or Rainbow Wallet!');
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      setProvider(provider);
      
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      
      setAccount(address);
      updateBalance(provider, address);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      alert('Failed to connect wallet: ' + error.message);
    }
  };

  const updateBalance = async (provider, address) => {
    try {
      const balance = await provider.getBalance(address);
      setBalance(ethers.formatEther(balance));
    } catch (error) {
      console.error('Failed to get balance:', error);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setBalance(null);
    setProvider(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Edge6 Frontend</h1>
        <h2>Rainbow Wallet Connection</h2>
        
        {!account ? (
          <div>
            <p>Connect your wallet to get started</p>
            <button 
              onClick={connectWallet}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                backgroundColor: '#1e90ff',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                marginTop: '20px'
              }}
            >
              Connect Rainbow Wallet
            </button>
          </div>
        ) : (
          <div style={{ textAlign: 'center', color: 'white' }}>
            <p>✅ Wallet Connected</p>
            <p><strong>Address:</strong> {account}</p>
            {balance && (
              <p><strong>Balance:</strong> {parseFloat(balance).toFixed(4)} ETH</p>
            )}
            <button 
              onClick={disconnectWallet}
              style={{
                marginTop: '15px',
                padding: '10px 20px',
                backgroundColor: '#ff4444',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Disconnect
            </button>
          </div>
        )}
        
        <div style={{ marginTop: '30px', fontSize: '14px', color: '#ccc' }}>
          <p>Supported Wallets:</p>
          <p>• Rainbow Wallet</p>
          <p>• MetaMask</p>
          <p>• Other Ethereum-compatible wallets</p>
        </div>
      </header>
    </div>
  );
}

export default App;