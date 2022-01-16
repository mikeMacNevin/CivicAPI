import './BlockThree.scss';

import photo from '../../../../assets/documents.png'
import BlockThreeText from './BlockThreeText'


const BlockThree = () => {
    return (
        <div className="BlockThree" id="BlockOne">
            <div className="row">
                <div className="col colOne col-12 col-sm-5 col-md-6">
                    <div className="container">
                        <BlockThreeText></BlockThreeText>
                    </div>
                </div>
                <div className="col colTwo col-12 col-sm-7 col-md-6">
                    <div>
                        <img src={photo} className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlockThree;