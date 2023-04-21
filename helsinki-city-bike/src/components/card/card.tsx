type cardProps = {
    header: string,
    img: string,
    alt: string
}

const Card = ({ header, img, alt }: cardProps) => {
    return <div className="card">
                <h3><b>{header}</b></h3>
                <img src={img} alt={alt} />
            </div>
}

export default Card;