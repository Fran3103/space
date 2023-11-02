import { useState } from "react"
import data from '../../data.json'

const Crew = () => {
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
                    <span>02</span> MEET YOUR CREE
                </h2>
                <img src={data.crew[destino].images.png} alt={data.crew[destino].name} />
            </div>

           <div>
                <nav>
                    <ul>
                        <li onClick={Moon}>1</li>
                        <li onClick={Mars}>2</li>
                        <li onClick={Europa}>3</li>
                        <li onClick={Titan}>4</li>
                    </ul>
                </nav>
                        
                <div>
                    <h1>{data.crew[destino].name}</h1>
                    <p>{data.crew[destino].description}</p>
                </div>
                <div>
                    <div>
                        <p>
                            AVG. DISTANCE
                        </p>
                        <h3>
                            {data.crew[destino].role}
                        </h3>
                    </div>
                    <div>
                        <p>
                            AVG. DISTANCE
                        </p>
                        <h3>
                            {data.crew[destino].bio}
                        </h3>
                    </div>
                </div>
             
           </div>
        </div>
  )
}

export default Crew