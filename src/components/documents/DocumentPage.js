import Documents from "./Documents"
import { useParams } from "react-router-dom";

import Constitution from "./docs/constitution";
const DocumentPage = ( ) => {

    const params = useParams();

    if (params.doc == 'constitution') {
        return (
            <div><Constitution /></div>
        )
    }


}

export default DocumentPage