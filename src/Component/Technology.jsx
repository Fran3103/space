
import { useState } from 'react'
import data from '../../data.json'

const Technology = () => {
    const [destino, setDestino]= useState (0)
    const [active, setActive]= useState (true)
    const [active2, setActive2]= useState (false)
    const [active3, setActive3]= useState (false)

    const Moon = () => {
        setDestino(0)
        setActive(true)
        setActive2(false)
        setActive3(false)

    }
    const Europa = () => {
        setDestino(2)
        setActive(false)
        setActive2(false)
        setActive3(true)

    }
  
    const Mars = () => {
        setDestino(1)
        setActive(false)
        setActive2(true)
        setActive3(false)
  
    }
  return (
    <div className='z-100 absolute top-0  flex flex-col m-auto bg-bgMobileTechnology bg-cover sm:bg-bgTabletTechnology lg:bg-bgDesktopTechnology h-screen w-screen  bg-no-repite   '>
        <div className='max-w-[1440px]  m-auto'>
            
            <h2 className='text-center text-3xl my-6 text-thirt font-secondary md:text-left md:ml-9 md:-mt-12 lg:text-4xl lg:mt-16 tracking-wider  '>
                    <span className='text-four font-bold mr-3 '>03</span> SPACE LAUNCH 101
                </h2>
           <div className='lg:grid lg:grid-cols-[100px_600px_1fr] gap-5 auto-cols-auto lg:justify-center lg:items-center  '>
                <div className='lg:grid order-3'>
                        <img src={data.technology[destino].images.landscape} alt={data.technology[destino].name} className='w-full h-60 md:mt-12 md:h-96 lg:h-[600px] ' />
                    </div>

                <div className='lg:w-32 lg:mr-4'>
                        <nav className='w-[200px] m-auto my-12 flex lg:w-32'>
                            <ul className='flex flex-row justify-center items-center gap-4 my-4 md:gap-6 md:w-[500px] lg:flex-col lg:justify-start lg:w-full lg:pr-3 lg:gap-12 font-primary '>
                                <li onClick={Moon} className={active ? 'border rounded-full w-12 h-12 pt-3 pb-1 text-center text-primary m-auto bg-bg-button md:w-16 md:h-16 md:text-2xl lg:w-24 lg:h-24 lg:text-5xl lg:pt-6  cursor-pointer' : 'border rounded-full w-12 h-12 pt-3 pb-1 text-center text-thirt m-auto md:w-16 md:h-16 md:text-2xl lg:w-24 lg:h-24 lg:text-5xl lg:pt-6 hover:bg-bgGradient cursor-pointer'}>1</li>

                                <li onClick={Mars}  className={active2 ? 'border rounded-full w-12 h-12 pt-3 pb-1 text-center text-primary m-auto bg-bg-button md:w-16 md:h-16 md:text-2xl lg:w-24 lg:h-24 lg:text-5xl lg:pt-6  cursor-pointer' : 'border rounded-full w-12 h-12 pt-3 pb-1 text-center text-thirt m-auto md:w-16 md:h-16 md:text-2xl lg:w-24 lg:h-24 lg:text-5xl lg:pt-6 hover:bg-bgGradient  cursor-pointer'}>2</li>

                                <li onClick={Europa}  className={active3 ? 'border rounded-full w-12 h-12 pt-3 pb-1 text-center text-primary m-auto bg-bg-button md:w-16 md:h-16 md:text-2xl lg:w-24 lg:h-24 lg:text-5xl lg:pt-6 cursor-pointer' : 'border rounded-full w-12 h-12 pt-3 pb-1 text-center text-thirt m-auto md:w-16 md:h-16 md:text-2xl lg:w-24 lg:h-24 lg:text-5xl lg:pt-6 hover:bg-bgGradient  cursor-pointer'}>3</li>
                            
                            </ul>
                        </nav>
        
                </div> 
                <div className='flex flex-col justify-center items-center gap-8 text-center px-4 h-[300px] lg:justify-start lg:items-start lg:text-left lg:w-[500px] lg:ml-6 lg:-mt-20 '>
                            <h3 className='text-2xl font-secondary text-four md:text-3xl lg:text-2xl tracking-wider '>THE TERMINOLOGY...</h3>
                            <h1 className='text-4xl font-primary text-secondary uppercase md:text-5xl lg:text-5xl lg:w-[700px] tracking-wider'>{data.technology[destino].name}</h1>
                            <p className='text-2xl text-four font-secondary mx-2 md:text-2xl md:mx-2 md:w-[500px] lg:text-2xl tracking-wider'>{data.technology[destino].description}</p>
                    </div>
           </div>
        </div>
    </div>
  )
}

export default Technology