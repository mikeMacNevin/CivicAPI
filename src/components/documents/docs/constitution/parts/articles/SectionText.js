
import { Fragment } from "react/cjs/react.production.min"

import './articles.scss'

const SectionText = ({section, index}) => {

    return (
        <Fragment>
            <h4 id={`section${index + 1}`}>Section {index + 1}</h4>
            <pre>{section}</pre>
        </Fragment>
    )

}

export default SectionText