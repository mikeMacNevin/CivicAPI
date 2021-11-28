import React, {Fragment} from 'react'
import BlockOne from './BlockOne/BlockOne.js'
import BlockTwo from './BlockTwo/BlockTwo.js'

const UnderSplash = () => {

    return (
        <Fragment>
            <div> 
                <BlockOne />
                {/* <BlockTwo /> */}
                <BlockTwo />
            </div>
        </Fragment>
    )
}

export default UnderSplash