import React, {Fragment} from 'react'
import BlockOne from './BlockOne/BlockOne.js'
import BlockTwo from './BlockTwo/BlockTwo.js'
import BlockThree from './BlockThree/BlockThree.js'

const UnderSplash = () => {

    return (
        <Fragment>
            <div> 
                <BlockOne />
                {/* <BlockTwo /> */}
                <BlockThree />

                <BlockTwo />
            </div>
        </Fragment>
    )
}

export default UnderSplash