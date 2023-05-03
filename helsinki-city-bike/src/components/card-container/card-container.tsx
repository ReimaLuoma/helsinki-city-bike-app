import Card from "../card/card";
import importCSV from '../../assets/icons8-import-csv-100.png'
import bikeParking from '../../assets/icons8-bike-parking-100.png'
import journey from '../../assets/icons8-waypoint-map-100.png'

const CardContainer: React.FC = () => {
    return (
    <div className="container">
        <div className='row card-container'>
            <div className="col d-flex justify-content-center flex-wrap mobile-card-start">
                <Card header="import" img={importCSV} alt='import' link="/data-import"/>
                <Card header="stations" img={bikeParking} alt='stations' link="/stations"/>
                <Card header="journeys" img={journey} alt='journeys' link="/journeys"/>
            </div>
        </div>
    </div>
    )
}

export default CardContainer;