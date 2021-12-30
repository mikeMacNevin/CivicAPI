import Documents from "./Documents"
import { useParams } from "react-router-dom";

const DocumentPage = ( ) => {

    const params = useParams();

    return (
        <div>Id: {params.doc}</div>
    )
}

export default DocumentPage