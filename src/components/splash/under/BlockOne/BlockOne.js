import React, {Fragment } from 'react'

import BlockOneAddressCol from './BlockOneAddressCol';
import BlockOneContentCol from './BlockOneContentCol';

import './BlockOne.scss';

const BlockOne = () => {
    
return (
    <Fragment>
        <div className="BlockOne" id="BlockOne">
            <div className="row">
                <div className="col colOne col-12 col-sm-5">
                    <BlockOneContentCol />
                </div>
                <div className="col colTwo col-12 col-sm-7">
                    <BlockOneAddressCol />

                </div>
            </div>
        </div>
    </Fragment>
)
}

export default BlockOne