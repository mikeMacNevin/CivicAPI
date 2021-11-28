import { Fragment } from "react"

import BlockTwoImageCol from './BlockTwoImageCol'
import BlockTwoTextCol from "./BlockTwoTextCol";

import './BlockTwo.scss';


const BlockTwo = () => {
return (
    // <Fragment>
    //     <div className="BlockTwo" id="BlockTwo">
    //         <div className="row">
    //             <div className="col colOne col-12 col-sm-6">
    //                 <BlockTwoTextCol />
    //             </div>
    //             <div className="col colTwo col-12 col-sm-6">
    //                 <BlockTwoImageCol />
    //             </div>
    //         </div>
    //     </div>
    // </Fragment>


    <Fragment>
        <div className="BlockTwo">
            <div className="BlockTwoText">
                <h2>View Upcoming Elections</h2>
                <h4>(Coming Soon)</h4>

            </div>
        </div>
    </Fragment>
    )
}

export default BlockTwo