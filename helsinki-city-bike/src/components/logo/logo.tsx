import logo from '../../assets/helsinki-city-bikes-logo.png'
import cyclist from '../../assets/3601659.png';
import { Link } from 'react-router-dom';

const Logo = () => {
    return <div className="logo-base">
            <Link to={`/`}><img src={logo} alt="" /></Link>
            <img src={cyclist} alt="" />
        </div>
}

export default Logo;