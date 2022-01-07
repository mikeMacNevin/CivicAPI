import constData from '../../../../data/constitution.json'
import Sections from './Sections'

const NavItem = ({article, index}) => {

    // for css classes 'active' and 'show'
    if(index == 0) {
        return (
            <div class="tab-pane fade show active" id={`article1`} role="tabpanel" aria-labelledby={`article1`} >
                          <Sections article={article}/> 

            </div>
    
        )
    }
    return (
        <div class="tab-pane fade" id={`article${index + 1}`} role="tabpanel" aria-labelledby={`article${index + 1}`} >
              <Sections article={article}/> 
        </div>

    )
   


}

export default NavItem