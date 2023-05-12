import { NavLink } from "react-router-dom";

type cardProps = {
    header: string,
    img: string,
    alt: string,
    link: string
}

const Card = ({ header, img, alt, link }: cardProps) => {
    return (
        <NavLink to={link} data-testid='card-link'>
            <div className="card">
                <h2><b>{header}</b></h2>
                <img src={img} alt={alt} />
            </div>
        </NavLink>
    )
}

export default Card;