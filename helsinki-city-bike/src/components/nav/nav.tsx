import importCSV from '../../assets/icons8-import-csv-100.png'
import bikeParking from '../../assets/icons8-bike-parking-100.png'
import journey from '../../assets/icons8-waypoint-map-100.png'

import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <>
        <div className='nav-container'>
            <Link to={`/data-import`}>
                <div className="nav-link">
                    <img src={importCSV} alt='' />
                </div>
            </Link>
            <Link to={`/stations`}>
                <div className="nav-link">
                    <img src={bikeParking} alt='' />
                </div>
            </Link>
            <Link to={`/journeys`}>
                <div className="nav-link">
                    <img src={journey} alt='' />
                </div>
            </Link>
        </div>
        </>
    )
}

export default Nav;