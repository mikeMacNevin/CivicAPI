import { Fragment } from 'react'

import BlockOne from './BlockOne'

import AddressForm from '../../AddressForm'
const BlockOneAddressCol = () => {
    return (
        <div className="for-centering container">
            <h2>Your representatives</h2>
            <AddressForm />
            <p>Enter your home address to find your elected representatives.</p>
        {/*
        <h5>Powered By:</h5>
        <ul>
            <li>{/*<i class="fab fa-google"></i>}Google Civic Information API</li>
            <li>ProPublica</li>
        </ul>
        */}         
        </div>
    )
}

export default BlockOneAddressCol