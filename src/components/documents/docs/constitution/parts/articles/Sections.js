import SectionLink from "./SectionLink"

import { Fragment } from "react/cjs/react.production.min"
import SectionText from "./SectionText"

const Sections = ({article}) => {

    return (
        <Fragment>
            <nav id="navbar-example2" class="navbar navbar-light bg-light">
                <span>Sections</span>
                <ul class="nav nav-pills">
                    {
                        article.map( (a, i) => {
                            return <SectionLink section={a} index={i}/>
                        })
                    }            
                </ul>
            </nav>
            <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
            {
                article.map( (s, j) => {
                    return <SectionText section={s} index={j}/>
                })
            }
            </div>
           
        </Fragment>

    )

}

export default Sections