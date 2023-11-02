
import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [active , setActive] = useState (false)

    const HandleClick =() =>  setActive(!active)
    
    return (
    <nav className='w-full flex justify-between m-auto items-center max-w-[1440px] p-7 px-8 relative z-10 '>
        <img src={logo} alt="logo" />
        <img src={hamburger} alt="hamburger" onClick={HandleClick} className={active ? 'hidden' : 'flex md:hidden'}/>
        <div className='hidden md:flex relative bg-bgGradient  px-12 items-center h-24 -mt-7 -mr-8 lg:px16 w-2/3 lg:mt-0 '>
            <hr className='hidden lg:absolute lg:block text-secondary top-12 -left-64 w-72 h-[1px] bg-primary '/>
            <ul className='flex gap-12 text-thirt font-secondary lg:gap-24 lg:text-lg'>
                <Link to='/' className='lg:flex'><strong className='hidden lg:block mr-2 '  >00</strong> HOME</Link>
                <Link to='/destination' className='lg:flex'><strong className='mr-2  lg:block  hidden   ' >01</strong> DESTINATION</Link>
                <Link to='/crew' className='lg:flex'><strong className='mr-2  lg:block hidden  ' >02</strong> CREW</Link>
                <Link to='/technology' className='lg:flex'><strong className='mr-2  lg:block hidden  ' >03</strong> TECHNOLOGY</Link>
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