import React, {Fragment } from 'react'

import BlockOneAddressCol from './BlockOne/BlockOneAddressCol';
import BlockOneContentCol from './BlockOne/BlockOneContentCol';

import './BlockOne.scss';

const BlockOne = () => {
    
return (
    <Fragment>
        <div className="BlockOne" id="BlockOne">
            <div className="row">
                <div className="col colOne col-12 col-sm-6">
                    <BlockOneContentCol />
                    </div>
                <div className="col colTwo col-12 col-sm-6">
                    <BlockOneAddressCol />
                </div>
            </div>
        </div>
    </Fragment>
)
}

export default BlockOne