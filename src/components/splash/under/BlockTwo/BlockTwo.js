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
        <div className="BlockTwo" id="BlockTwo">
            <div className="row">
            <div className="col colOne col-12 col-sm-5 col-md-6">
                    <BlockTwoImageCol />
                </div>
                <div className="col colTwo col-12 col-sm-7 col-md-6 d-flex flex-column justify-content-center ">
                    <BlockTwoTextCol />
                </div>


            </div>
        </div>
    </Fragment>
    )
}

export default BlockTwo