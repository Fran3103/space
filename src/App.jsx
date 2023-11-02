
import { Route, Routes } from "react-router-dom"
import Crew from "./Component/Crew"
import Destinations from "./Component/Destinations"
import Home from "./Component/Home"
import Navbar from "./Component/Navbar"
import Technology from "./Component/Technology"


const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/destination" element={<Destinations/>}/>
            <Route path="/crew" element={<Crew/>}/>
            <Route path="/technology" element={<Technology/>}/>
        </Routes>
        
        
        
        

    </div>
  )
}

export default App