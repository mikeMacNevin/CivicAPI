import './Splash.scss';
import congress from '../../assets/congress.jpg'
import AddressForm from './AddressForm';

const Splash = () => {
    
    return (

        <div className="Splash">
            <div className="SplashImage text-center">
                <h1 className="text-white text-center">WhoRepsYou?</h1>
                <AddressForm />

            </div>

        </div>


    )
}

export default Splash;