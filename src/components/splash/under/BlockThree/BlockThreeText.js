import BlockThree from "./BlockThree"

import { Link } from "react-router-dom"
import { Route, useNavigate } from "react-router"
import Documents from "../../../documents/Documents"
const BlockThreeText = () => {
const navigate = useNavigate();
    const toDocuments = () => {
        navigate('/documents/')
    }
    return (
        <div className="BlockThreeText">
            <h2>Grow your knowledge</h2>
            <input type="button" onClick={toDocuments} value="Documents" />
            <ul>
                {/* <li><Link to="/documents">Constitution</Link></li>
                <li></li>
                <li></li> */}

            </ul>
        </div>
    )
}

export default BlockThreeText;