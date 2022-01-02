import constData from '../../../../data/constitution.json'

const Articles = () => {
    

    return(
        <div>
            <nav id="navbar-example2" class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">Articles</a>
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a class="nav-link" href="#one">I</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#two">II</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#three">III</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#four">IV</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#five">V</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#six">VI</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#seven">VII</a>
                    </li>  
                </ul>
            </nav>
            <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
                <h4 id="one">Article I</h4>
                <p>
                    
                </p>
                <h4 id="two">@mdo</h4>
                <p>...</p>
                <h4 id="three">one</h4>
                <p>...</p>
                <h4 id="four">two</h4>
                <p>...</p>
                <h4 id="five">three</h4>
                <p>...</p>
            </div>
</div>
    )

}

export default Articles