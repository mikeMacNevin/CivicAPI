
import '../nav/Nav.scss'
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <div className="">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">WhoGovsYou</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <Link to='/'>

                        <li class="nav-item">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        </Link>

                        <Link to='' >
                        <li class="nav-item">
                            <a class="nav-link" href="#">Representatives</a>
                        </li>
                        </Link>

                        <Link to='/documents'>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Learning</a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    )

}

export default Nav;