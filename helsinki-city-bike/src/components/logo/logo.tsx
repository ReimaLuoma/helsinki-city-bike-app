import logo from '../../assets/helsinki-city-bikes-logo.png'
import cyclist from '../../assets/3601659.png';
import { NavLink } from 'react-router-dom';

const Logo: React.FC = () => {
    return (
    <div className='container-fluid'>
        <div className="row logo-base">
            <div className='col d-flex justify-content-evenly align-items-center pt-lg-5 logo-img'>
                <NavLink to="/"><img src={logo} alt="Helsinki City Bikes Logo" /></NavLink>
                <img src={cyclist} alt="Cyclist"/>
            </div>
        </div>
    </div>
    )
}

export default Logo;