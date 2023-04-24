import importCSV from '../../assets/icons8-import-csv-100.png'
import bikeParking from '../../assets/icons8-bike-parking-100.png'
import journey from '../../assets/icons8-waypoint-map-100.png'

const Nav = () => {
    return (
        <>
        <div className='nav-container'>
            <div className="nav-link">
                <img src={importCSV} alt='' />
            </div>
            <div className="nav-link">
                <img src={bikeParking} alt='' />
            </div>
            <div className="nav-link">
                <img src={journey} alt='' />
            </div>
        </div>
        </>
    )
}

export default Nav;