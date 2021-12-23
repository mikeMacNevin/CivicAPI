import { Link } from "react-router-dom";

const DocNav = () => {
    

    return (
    <div class="btn-group">
        <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Documents
        </button>
        <div class="dropdown-menu">
            <Link to="constitution" >US Constitution</Link>
        </div>
    </div>
    )
}

export default DocNav;