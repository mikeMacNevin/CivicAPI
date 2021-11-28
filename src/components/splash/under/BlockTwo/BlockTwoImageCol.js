import { Fragment } from "react"
import './BlockTwo.scss';

import photo from  '../../../../assets/voting_booths.jpeg'

const BlockTwoImageCol = () => {
    return (
    <div className="content-col">
        <img src={photo} className="img-fluid"/>
    </div>
    )
}

export default BlockTwoImageCol