import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { renderComponent, setWalletData } from '../redux/actionCreator'

function ConnectMetamask() {

    const dispatch = useDispatch()
    const [errorMsg, setErrorMessage] = useState('')

    const connectWallet = () => {
        dispatch(renderComponent(true))

        if (window.ethereum && window.ethereum.isMetaMask) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(result => {
                    dispatch(setWalletData(result[0]))
                })
                .catch(error => { setErrorMessage(error.message) })
        } else {
            setErrorMessage('Please install MetaMask browser extenstion to intract')
        }
    }

    const cancelHandler = () => {
        dispatch(renderComponent(false))
    }

    return (
        <div className='m-auto' style={{ width: '35rem' }}>
            <form className='card'>
                <button type="button" className='btn-close float-end'
                    onClick={cancelHandler}></button>
                <h5 className="card-header text-center fw-bold">Wallet Details</h5>

                <h6 className='card-header text-center text-danger'>
                    Wallet not connected. Please click the "Connect" button below.
                </h6>

                <div className='my-2 mx-auto'>
                    <Link to='/'>
                        <button type="button" className='btn-primary m-1 btn'
                            onClick={connectWallet}>Connect</button>

                        <button type="button" className='btn-secondary btn m-1'
                            onClick={cancelHandler}>Cancel</button>

                    </Link>
                </div>
                <p className='text-danger m-auto'>{errorMsg}</p>
            </form>

        </div>
    )
}

export default ConnectMetamask
