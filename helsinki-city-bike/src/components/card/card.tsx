import { Link } from "react-router-dom";

type cardProps = {
    header: string,
    img: string,
    alt: string,
    link: string
}

const Card = ({ header, img, alt, link }: cardProps) => {
    return (
        <Link to={link}>
            <div className="card">
                <h2><b>{header}</b></h2>
                <img src={img} alt={alt} />
            </div>
        </Link>
    )
}

export default Card;