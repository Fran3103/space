import { useState } from "react"
import data from '../../data.json'

const Crew = () => {
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
        <div className='  bg-bgMobileCrew h-screen bg-no-repeat bg-cover absolute top-0 z-0  w-screen  sm:bg-bgTabletCrew lg:bg-bgDesktopCrew flex justify-center '>
        <div className="flex flex-col sm:pt-32 gap-3  max-w-[1440px] m-auto px-5">
                <h2 className='hidden md:flex text-thirt font-secondary  text-xl tracking-widest  md:text-left md:text-3xl md:my-9 lg:mt-32  lg:-mb-12'>
                                <span className='text-four font-bold mr-4 '>01</span> PICK YOU DESTINATION
                            </h2>
                <div className='flex flex-col md:flex-col-reverse  h-full   md:pt-32   items-center  md:items-start  max-w-[1440px] lg:flex-row-reverse  '>
                
                    <div className='flex flex-col justify-center text-center gap-4 mb-4 px-4  w-full ' >
                    <h2 className='text-thirt font-secondary text-xl tracking-widest mb-4  md:hidden lg:text-left'>
                                <span className='text-four font-bold '>01</span> PICK YOU DESTINATION
                            </h2>
                            <img src={data.crew[destino].images.png} alt={data.crew[destino].name} className='w-[60%] m-auto lg:w-[650px] lg:h-full lg:-mt-32 md:-mt-20 '/>
                                <hr className='w-full text-secondary -mt-4 md:hidden'/>
                        </div>

                    <div className='flex flex-col justify-center items-center gap-4 md:flex-col-reverse lg:items-start '>
                            <nav>
                                <ul className='flex gap-4 justify-center items-center font-secondary tracking-widest mt-12 lg:ml-6'>
                                    <li onClick={Moon} className={active ? 'rounded-full w-4 h-4 bg-bg-button ' : 'rounded-full w-4 h-4 bg-bgGradient'}></li>
                                    <li onClick={Mars} className={active2 ? 'rounded-full w-4 h-4 bg-bg-button ' : 'rounded-full w-4 h-4 bg-bgGradient'}></li>
                                    <li onClick={Europa} className={active3? 'rounded-full w-4 h-4 bg-bg-button ' : 'rounded-full w-4 h-4 bg-bgGradient'}></li>
                                    <li onClick={Titan} className={active4 ? 'rounded-full w-4 h-4 bg-bg-button ' : 'rounded-full w-4 h-4 bg-bgGradient'}></li>
                                </ul>
                            </nav>
                                    
                                    <h3 className='text-xl mt-4 text-secondary font-primary uppercase md:hidden lg:text-left'>
                                        {data.crew[destino].role}
                                    </h3>
                            <div className=' items-center px-4  mb-5 text-center gap-4 flex flex-col max-w-[800px] lg:items-start'>
                                <h3 className='hidden md:flex text-xl mt-4 text-secondary font-primary uppercase sm:text-3xl lg:text-4xl'>
                                        {data.crew[destino].role}
                                    </h3>
                                <h1 className='text-3xl uppercase font-primary text-thirt md:text-5xl  lg:text-left  lg:text-6xl'>{data.crew[destino].name}</h1>
                                <h3 className=' my-4 text-secondary text-lg mx-3 font-secondary md:text-2xl sm:leading-relaxed md:mx-7 lg:text-left lg:mx-0  '>
                                        {data.crew[destino].bio}
                                    </h3>
                            </div>
                            
                            
                                
                                    
                                
                            
                        
                        
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Crew