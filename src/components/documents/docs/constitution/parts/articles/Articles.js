import constData from '../../../../data/constitution.json'
import NavItem from './NavItem'

const Articles = () => {
    
    return(
        <div>
        <ul class="nav nav-tabs" id="articleTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#article1" role="tab" aria-controls="article1" aria-selected="true">I</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#article2" role="tab" aria-controls="article2" aria-selected="false">II</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#article3" role="tab" aria-controls="article3" aria-selected="false">III</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#article4" role="tab" aria-controls="article4" aria-selected="false">IV</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#article5" role="tab" aria-controls="article5" aria-selected="false">V</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#article6" role="tab" aria-controls="article6" aria-selected="false">VI</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#article7" role="tab" aria-controls="article7" aria-selected="false">VII</a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            {
                constData.articles.map((article,index) => {
                    return  <NavItem article={article} index={index} />
                })
            }
        </div>

        </div>
 
    )
}

export default Articles