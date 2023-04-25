import Card from "../card/card";
import importCSV from '../../assets/icons8-import-csv-100.png'
import bikeParking from '../../assets/icons8-bike-parking-100.png'
import journey from '../../assets/icons8-waypoint-map-100.png'

const CardContainer = () => {
    return (
    <div className="container-fluid">
        <div className='row card-container'>
            <div className="col d-flex justify-content-center">
                <Card header="data" img={importCSV} alt='' link="data-import"/>
                <Card header="stations" img={bikeParking} alt='' link="stations"/>
                <Card header="journeys" img={journey} alt='' link="journeys"/>
            </div>
            
        </div>
    </div>
    )
}

export default CardContainer;