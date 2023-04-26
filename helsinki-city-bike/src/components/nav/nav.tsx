import importCSV from '../../assets/icons8-import-csv-100.png'
import bikeParking from '../../assets/icons8-bike-parking-100.png'
import journey from '../../assets/icons8-waypoint-map-100.png'

import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <>
        <div className='col nav-container'>
            <NavLink to='/data-import' className={({isActive}) => isActive ? "nav-link-active": "nav-link"}>
                    <img src={importCSV} alt='' />
            </NavLink>
            <NavLink to='/stations' className={({isActive}) => isActive ? "nav-link-active": "nav-link"}>
                    <img src={bikeParking} alt='' />
            </NavLink>
            <NavLink to='/journeys' className={({isActive}) => isActive ? "nav-link-active": "nav-link"}>
                    <img src={journey} alt='' />
            </NavLink>
        </div>
        </>
    )
}

export default Nav;