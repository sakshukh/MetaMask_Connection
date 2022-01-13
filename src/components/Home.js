import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ethers } from 'ethers'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WalletData from './WalletData'
import ConvertCurrency from './ConvertCurrency'
import ConnectMetamask from './ConnectMetamask'
function Home() {

    const componentName = useSelector(state => state.component.componentName)
    const walletData = useSelector(state => state.walletData.walletData)
    const [balance, setBalance] = useState(0)

    const getAccountBalance = (account) => {
        window.ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] })
            .then(balance => setBalance(ethers.utils.formatEther(balance)))
            .catch(error => console.log(error.message))
    }

    if (walletData) {
        getAccountBalance(walletData.toString())
    }

    return (
        <div className='row min-vh-100 bg-dark'>
            <BrowserRouter>
                <Routes>
                    {!componentName ?
                        walletData ?
                            <Route path='/' element={<WalletData balance={balance} />} />
                            : <Route path='/' element={<ConvertCurrency />} />
                        : <Route path='/' element={<ConnectMetamask />} />
                    }
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default Home
