import React, {Fragment } from 'react'

import AddressForm from '../AddressForm';

import './BlockOne.scss';

const BlockOne = () => {
    
    return (
            <Fragment>
                <div className="BlockOne">
                    <div className="BlockOneText">
                        <AddressForm />
                    </div>

                </div>
            </Fragment>
    )
}

export default BlockOne