
import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [active , setActive] = useState (false)

    const HandleClick =() =>  setActive(!active)
    const [active1, setActive1]= useState (true)
    const [active2, setActive2]= useState (false)
    const [active3, setActive3]= useState (false)
    const [active4, setActive4]= useState (false)
    const Home = () => {
   
        setActive1(true)
        setActive2(false)
        setActive3(false)
        setActive4(false)
    }
    const Destination= () => {

        setActive1(false)
        setActive2(true)
        setActive3(false)
        setActive4(false)
    }
    const Crew = () => {
    
        setActive1(false)
        setActive2(false)
        setActive3(true)
        setActive4(false)
    }
    const Technology = () => {

        setActive1(false)
        setActive2(false)
        setActive3(false)
        setActive4(true)
    }
    
    return (
    <nav className='w-full flex justify-between m-auto items-center max-w-[1440px] p-7 px-8 relative z-10 md:-mt-12 lg:mt-0 pt-12 '>
        <img src={logo} alt="logo" />
        <img src={hamburger} alt="hamburger" onClick={HandleClick} className={active ? 'hidden' : 'flex md:hidden'}/>
        <div className='hidden md:flex md:items-center md:justify-center relative bg-bgGradient  px-12 items-center h-24 -mr-8 lg:px16 w-2/3 lg:mt-0 '>
            <hr className='hidden lg:absolute lg:block text-secondary top-12 -left-64 w-72 h-[1px] bg-primary  lg:w-80 lg:-left-80'/>
            <ul className='flex gap-12 text-thirt font-secondary  lg:gap-24 lg:text-2xl'>
                <Link to='/' className={active1 ? 'text-thirt font-bold  flex  sm:pb-4 sm:mt-6 ' : 'text-secondary font-bold  flex  sm:pb-4 sm:mt-6 hover:text-Gradient'} onClick={Home}><strong className='hidden lg:block mr-2 '  >00</strong> HOME</Link>

                <Link to='/destination' className={active2 ? 'text-thirt font-bold  flex  sm:pb-4 sm:mt-6 ' : 'text-secondary font-bold  flex  sm:pb-4 sm:mt-6 hover:text-Gradient'} onClick={Destination}><strong className='mr-2  lg:block  hidden   ' >01</strong> DESTINATION</Link>

                <Link to='/crew'className={active3 ? 'text-thirt font-bold  flex  sm:pb-4 sm:mt-6 ' : 'text-secondary font-bold  flex  sm:pb-4 sm:mt-6 hover:text-Gradient'} onClick={Crew}><strong className='mr-2  lg:block hidden  ' >02</strong> CREW</Link>

                <Link to='/technology' className={active4 ? 'text-thirt font-bold  flex  sm:pb-4 sm:mt-6 ' : 'text-secondary font-bold  flex  sm:pb-4 sm:mt-6 hover:text-Gradient'} onClick={Technology}><strong className='mr-2  lg:block hidden  ' >03</strong> TECHNOLOGY</Link>

            </ul>
        </div>
        <div className={active ? 'flex flex-col gap-4 justify-start items-start absolute top-0 right-0 h-screen w-2/3 bg-bgGradientMobile before:blur-[2px] '  : 'hidden '}>
       
          
            <img src={close} alt="close" onClick={HandleClick} className={active ? 'absolute right-7 top-9 z-40': 'hidden'} />
            
            <ul className='flex flex-col gap-8 mt-32 absolute z-40 pl-7'>
                <Link to='/' onClick={HandleClick}><strong className='mr-3'>00</strong>HOME</Link>
                <Link to='destination' onClick={HandleClick}><strong className='mr-3'>01</strong>DESTINATION</Link>
                <Link to='crew' onClick={HandleClick}><strong className='mr-3'>02</strong>CREW</Link>
                <Link to='technology' onClick={HandleClick}><strong className='mr-3'>03</strong>TECHNOLOGY</Link>
            </ul>
            <div className='bg-primary   w-full h-full '></div>
        </div>
    </nav>
  )
}

export default Navbar