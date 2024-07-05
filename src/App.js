import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

// Components
import Navigation from './components/Navigation'
import Sort from './components/Sort'
import Card from './components/Card'
import SeatChart from './components/SeatChart'

// ABIs
import TokenMaster from './abis/TokenMaster.json'

// Config
import config from './config.json'

function App() {
  const [account, setAccount] = useState(null);

  const loadBlockchainData = async () => {
    // Refresh Account
    window.ethereum.on('accountsChanged', async () => {
      let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      let account = ethers.getAddress(accounts[0]);
      setAccount(account);
    });
  }

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <div>
      <header>
        <Navigation account={account} setAccount={setAccount} />

        <h2 className="header__title"><strong>Event</strong> Tickets</h2>
      </header>

    </div>
  );
}

export default App;
