import Card from "../card/card";
import importCSV from '../../assets/icons8-import-csv-100.png'
import bikeParking from '../../assets/icons8-bike-parking-100.png'
import journey from '../../assets/icons8-waypoint-map-100.png'

const CardContainer = () => {
    return <div className='card-container'>
        <Card header="data" img={importCSV} alt=''/>
        <Card header="stations" img={bikeParking} alt=''/>
        <Card header="journey" img={journey} alt=''/>
    </div>
}

export default CardContainer;