import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { renderComponent, setWalletData } from '../redux/actionCreator'

function WalletData({ balance }) {

    const walletData = useSelector(state => state.walletData.walletData)
    const dispatch = useDispatch()

    const disconnectHandler = () => {
        dispatch(setWalletData({}))
        dispatch(renderComponent(false))
    }

    return (
        <div className='m-auto' style={{ width: "35rem" }}>
            <form className='card'>
                <button type='button' className='btn-close'
                    onClick={() => dispatch(renderComponent(false))}></button>
                <h5 className='card-header text-center fw-bold'>Wallet Details</h5>

                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>KEY</th>
                            <th>VALUE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Account</th>
                            <th>{walletData}</th>
                        </tr>

                        <tr>
                            <th>Chain Id</th>
                            <th>{window.ethereum.networkVersion}</th>
                        </tr>

                        <tr>
                            <th>Balance</th>
                            <th>{balance}</th>
                        </tr>
                    </tbody>
                </table>

                <div className='my-2 mx-auto card-body'>
                    <Link to='/'>
                        <button className='btn btn-danger m-1'
                            onClick={disconnectHandler}>Disconnect</button>
                    </Link>
                </div>
            </form>

        </div>
    )
}

export default WalletData
