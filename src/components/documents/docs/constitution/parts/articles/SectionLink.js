
import { Fragment } from "react/cjs/react.production.min"
const SectionLink = ({article, index}) => {

    return (
        <Fragment>
              
        <li class="nav-item">
            <a class="nav-link" href={`#section${index + 1}`}>{index + 1}</a>
        </li>
        </Fragment>
    )
}


export default SectionLink