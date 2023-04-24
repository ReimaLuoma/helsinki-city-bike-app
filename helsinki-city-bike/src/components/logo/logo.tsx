import logo from '../../assets/helsinki-city-bikes-logo.png'
import cyclist from '../../assets/3601659.png';

const Logo = () => {
    return <div className="logo-base logo-img">
            <img src={logo} alt="" />
            <img src={cyclist} alt="" />
        </div>
}

export default Logo;