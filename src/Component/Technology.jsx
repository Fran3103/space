
import { useState } from 'react'
import data from '../../data.json'

const Technology = () => {
    const [destino, setDestino]= useState (0)
    const Moon = () => {
        setDestino(0)
    }
    const Europa = () => {
        setDestino(2)
    }
   
    const Mars = () => {
        setDestino(1)
    }
   
  return (
    <div className='z-100 relative flex flex-col m-auto'>
            <div>
                <h2>
                    <span>03</span> SPACE LAUNCH 101
                </h2>
                <img src={data.technology[destino].images.portrait} alt={data.technology[destino].name} />
            </div>

           <div>
                <nav>
                    <ul>
                        <li onClick={Moon}>1</li>
                        <li onClick={Mars}>2</li>
                        <li onClick={Europa}>3</li>
                     
                    </ul>
                </nav>
                        
                <div>
                    <h1>{data.technology[destino].name}</h1>
                    <p>{data.technology[destino].description}</p>
                </div>
        
    
             
           </div> 
        </div>
  )
}

export default Technology