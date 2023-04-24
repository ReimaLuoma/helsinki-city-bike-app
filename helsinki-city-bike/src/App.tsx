import Card from './components/card/card'
import Logo from './components/logo/logo'

import importCSV from './assets/icons8-import-csv-100.png'
import bikeParking from './assets/icons8-bike-parking-100.png'
import journey from './assets/icons8-waypoint-map-100.png'
import logo from './assets/helsinki-city-bikes-logo.png'
import cyclist from './assets/3601659.png'

function App() {

  return (
    <>
      <Logo img={logo} img2={cyclist}/>
      <div className='card-container'>
        <Card header="data" img={importCSV} alt=''/>
        <Card header="stations" img={bikeParking} alt=''/>
        <Card header="journey" img={journey} alt=''/>
      </div>
      
    </>
  )
}

export default App
