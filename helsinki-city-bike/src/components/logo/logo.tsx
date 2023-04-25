import logo from '../../assets/helsinki-city-bikes-logo.png'
import cyclist from '../../assets/3601659.png';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
    <div className='container-fluid'>
        <div className="row logo-base">
            <div className='col d-flex justify-content-evenly align-items-center pt-lg-5 logo-img'>
                <Link to={`/`}><img src={logo} alt="" /></Link>
                <img src={cyclist} alt=""/>
            </div>
        </div>
    </div>
    )
}

export default Logo;