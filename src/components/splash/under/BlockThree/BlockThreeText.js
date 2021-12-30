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
            <p><i>(coming soon)</i></p>
            {/* TURN THIS BACK ON EVENTUALLY */}


            {/* <input type="button" onClick={toDocuments} value="Documents" /> */}


            {/* TURN THIS BACK ON EVENTUALLY */}

        </div>
    )
}

export default BlockThreeText;