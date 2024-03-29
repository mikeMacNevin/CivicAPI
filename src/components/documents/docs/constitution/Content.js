
import Preamble from "./parts/Preamble"
import Articles from './parts/articles/Articles'
import JsonData from './../../data/constitution.json'
import Signatories from "./parts/signatories/Signatories"
import SectionText from "./parts/articles/SectionText"

const Content = () => {
    return (
        <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
            <Preamble />
            </div>
            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
            <Articles />
            </div>
            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
            <Signatories />
            </div>
            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
            Amendments
            </div>
            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">..d</div>
        </div>
    )
}

export default Content