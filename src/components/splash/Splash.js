import './Splash.scss';
import congress from '../../assets/congress.jpg'
import AddressForm from './AddressForm';

const Splash = () => {
    
    return (

        <div className="Splash">
            <div className="SplashImage text-center text-white">
                <h1 >Who</h1>
                <h2>Represents You?</h2>
                <AddressForm />

            </div>

        </div>


    )
}

export default Splash;