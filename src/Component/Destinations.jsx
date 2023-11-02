
import { useState } from 'react'
import data from '../../data.json'

const Destinations = () => {
   
    const [destino, setDestino]= useState (0)
    const Moon = () => {
        setDestino(0)
    }
    const Europa = () => {
        setDestino(2)
    }
    const Titan = () => {
        setDestino(3)
    }
    const Mars = () => {
        setDestino(1)
    }
    return (
        <div className='z-100 relative flex flex-col m-auto'>
            <div>
                <h2>
                    <span>01</span> PICK YOU DESTINATION
                </h2>
                <img src={data.destinations[destino].images.png} alt={data.destinations[destino].name} />
            </div>

           <div>
                <nav>
                    <ul>
                        <li onClick={Moon}>MOON</li>
                        <li onClick={Mars}>MARS</li>
                        <li onClick={Europa}>EUROPA</li>
                        <li onClick={Titan}>TITAN</li>
                    </ul>
                </nav>
                        
                <div>
                    <h1>{data.destinations[destino].name}</h1>
                    <p>{data.destinations[destino].description}</p>
                </div>
                <div>
                    <div>
                        <p>
                            AVG. DISTANCE
                        </p>
                        <h3>
                            {data.destinations[destino].distance}
                        </h3>
                    </div>
                    <div>
                        <p>
                            AVG. DISTANCE
                        </p>
                        <h3>
                            {data.destinations[destino].travel}
                        </h3>
                    </div>
                </div>
             
           </div>
        </div>
      )
    
}

export default Destinations