import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { renderComponent } from '../redux/actionCreator'

function ConvertCurrency() {
    const dispatch = useDispatch()
    const [nepValue, setNepValue] = useState()
    const [bsudValue, setBsudValue] = useState()


    const NepChange = (event) => {
        let price = event.target.value
        setNepValue()
        setBsudValue(parseFloat(price * 3).toFixed(2))
    }

    const BusdChange = (event) => {
        let price = event.target.value
        setBsudValue()
        setNepValue(parseFloat(price / 3).toFixed(2))
    }

    return (
        <div className='m-auto' style={{ width: '25rem' }}>
            <form className='card'>
                <h5 className='card-header text-center fw-bold'>Crypto Convertor</h5>
                <div className='card-body m-auto'>
                    <label htmlFor='nep' className='form-label'>NEP</label>
                    <input type="number" placeholder={parseFloat(0.0).toFixed(2)} className='form-control'
                        style={{ width: '300px' }}
                        onChange={NepChange} value={nepValue} id='nep' />
                </div>

                <div className='card-body m-auto'>
                    <label htmlFor='busd' className='form-label'>BUSD</label>
                    <input type="number" placeholder={parseFloat(0.0).toFixed(2)} className='form-control'
                        style={{ width: '300px' }}
                        onChange={BusdChange} value={bsudValue} id='busd' />
                </div>

                <div className='card-body m-auto'>
                    <Link to='/'>
                        <button className='text-primary fs-6 fw-bold btn'
                            onClick={() => dispatch(renderComponent(true))} >
                            Check Wallet Details
                        </button>

                    </Link>
                </div>
            </form>
        </div>
    )
}

export default ConvertCurrency
