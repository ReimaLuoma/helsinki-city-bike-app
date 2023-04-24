import Logo from './components/logo/logo'
import CardContainer from './components/card-container/card-container'

import logo from './assets/helsinki-city-bikes-logo.png'
import cyclist from './assets/3601659.png'

function App() {

  return (
    <>
      <Logo img={logo} img2={cyclist}/>
      <CardContainer />
    </>
  )
}

export default App
