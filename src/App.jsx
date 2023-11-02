
import Crew from "./Component/Crew"
import Destinations from "./Component/Destinations"
import Home from "./Component/Home"
import Navbar from "./Component/Navbar"
import Technology from "./Component/Technology"


const App = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Destinations/>
        <Crew/>
        <Technology/>

    </div>
  )
}

export default App