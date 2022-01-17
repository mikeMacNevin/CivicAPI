import React, {Fragment} from 'react'
import BlockOne from './BlockOne/BlockOne.js'
import BlockTwo from './BlockTwo/BlockTwo.js'
import BlockThree from './BlockThree/BlockThree.js'

const UnderSplash = () => {

    return (
        <Fragment>
            <div> 
                <BlockTwo />
                <BlockThree />
                {/* <BlockOne /> */}

            </div>
        </Fragment>
    )
}

export default UnderSplash