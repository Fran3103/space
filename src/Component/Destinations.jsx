
import { useState } from 'react'
import data from '../../data.json'
const Destinations = () => {
   
    const [destino, setDestino]= useState (0)
    const [active, setActive]= useState (true)
    const [active2, setActive2]= useState (false)
    const [active3, setActive3]= useState (false)
    const [active4, setActive4]= useState (false)
    const Moon = () => {
        setDestino(0)
        setActive(true)
        setActive2(false)
        setActive3(false)
        setActive4(false)
    }
    const Europa = () => {
        setDestino(2)
        setActive(false)
        setActive2(false)
        setActive3(true)
        setActive4(false)
    }
    const Titan = () => {
        setDestino(3)
        setActive(false)
        setActive2(false)
        setActive3(false)
        setActive4(true)
    }
    const Mars = () => {
        setDestino(1)
        setActive(false)
        setActive2(true)
        setActive3(false)
        setActive4(false)
    }
    return (
        <div className='  bg-bgMobileDestination h-full bg-no-repeat bg-cover absolute top-0 z-0  w-screen  sm:bg-bgTabletDestination lg:bg-bgDesktopDestination flex justify-center'>
         
            <div className='flex flex-col   h-full   pt-32   items-center  sm:justify-start sm:px-8 lg:flex-row max-w-[1440px] lg:pt-0 lg:-mt-12 '>
                <div className='flex flex-col justify-center text-center gap-4 mb-4 px-4  w-full ' >
                        <h2 className='text-thirt font-secondary text-xl tracking-widest mb-4 sm:text-left sm:text-3xl lg:-mt-5 '>
                            <span className='text-four font-bold '>01</span> PICK YOU DESTINATION
                        </h2>
                        <img src={data.destinations[destino].images.png} alt={data.destinations[destino].name} className='w-[40%] m-auto sm:w-[50%] sm:pt-5  lg:w-[70%]'/>
                    </div>

                <div className='flex flex-col justify-center items-center gap-4 lg:items-start'>
                        <nav>
                            <ul className='flex gap-4 justify-center items-center font-secondary tracking-widest sm:text-2xl sm:gap-10'>
                                <li onClick={Moon} className={active ? 'text-thirt  border-b-4 pb-1 mt-2  sm:pb-4 sm:mt-6 ' : 'text-secondary'}>MOON</li>
                                <li onClick={Mars} className={active2 ? 'text-thirt font-bold  border-b-4 pb-1 mt-2 sm:pb-4 sm:mt-6 ' : 'text-secondary'}>MARS</li>
                                <li onClick={Europa} className={active3 ? 'text-thirt font-bold border-b-4 pb-1 mt-2 sm:pb-4 sm:mt-6 ' : 'text-secondary'}>EUROPA</li>
                                <li onClick={Titan} className={active4 ? 'text-thirt font-bold  border-b-4 pb-1 mt-2 sm:pb-4 sm:mt-6  ' : 'text-secondary'}>TITAN</li>
                            </ul>
                        </nav>
                                
                        <div className='flex flex-col justify-center items-center px-4 mt-4 mb-5 text-center gap-4 max-w-[800px] lg:items-start lg:px-0'>
                            <h1 className='text-6xl uppercase font-primary text-secondary sm:text-8xl sm:py-5 lg:text-[150px]'>{data.destinations[destino].name}</h1>
                            <p className='text-secondary font-thin tracking-widest font-secondary sm:text-xl sm:leading-loose lg:text-left lg:text-xl lg:mr-3'>{data.destinations[destino].description}</p>
                            <hr className='w-full text-secondary my-2'/>
                        </div>
                        <div className='flex flex-col justify-center items-center px-4 gap-4 text-center sm:flex-row sm:justify-around sm:gap-5 w-full lg:text-left lg:justify-start lg:gap-16'>
                            <div className='sm:flex sm:flex-col sm:gap-3'>
                                <p className='font-secondary tracking-widest text-secondary sm:text-xl '>
                                    AVG. DISTANCE
                                </p>
                                <h3 className='text-3xl my-2 text-secondary font-primary uppercase sm:text-4xl'>
                                    {data.destinations[destino].distance}
                                </h3>
                            </div>
                            <div className='sm:flex sm:flex-col sm:gap-3'>
                                <p className='font-secondary tracking-widest text-secondary sm:text-xl'>
                                    EST. TRAVEL TIME
                                </p>
                                <h3 className='text-3xl my-2 text-secondary font-primary uppercase sm:text-4xl'>
                                    {data.destinations[destino].travel}
                                </h3>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
      )
    
}

export default Destinations