
import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'
import { useState } from 'react'

const Navbar = () => {
    const [active , setActive] = useState (false)

    const HandleClick =() =>  setActive(!active)
    
    return (
    <nav className='w-full flex justify-between items-center max-w-[1440px] p-7 px-8 relative'>
        <img src={logo} alt="logo" />
        <img src={hamburger} alt="hamburger" onClick={HandleClick} className={active ? 'hidden' : 'flex md:hidden'}/>
        <div className='hidden md:flex relative  bg-secondary px-12 items-center h-24 -mt-7 -mr-8 lg:px16 w-2/3 lg:mt-0'>
            <hr className='hidden lg:absolute lg:block text-secondary top-12 -left-64 w-72 h-[1px] bg-primary '/>
            <ul className='flex gap-12 text-thirt font-secondary lg:gap-24 '>
                <li className='lg:flex'><strong className='hidden lg:block mr-2 ' >00</strong> HOME</li>
                <li className='lg:flex'><strong className='mr-2  lg:block  hidden   '>01</strong> DESTINATION</li>
                <li className='lg:flex'><strong className='mr-2  lg:block hidden  '>02</strong> CREW</li>
                <li className='lg:flex'><strong className='mr-2  lg:block hidden  '>03</strong> TECHNOLOGY</li>
            </ul>
        </div>
        <div className={active ? 'flex flex-col gap-4 justify-start items-start absolute top-0 right-0 h-screen w-2/3  '  : 'hidden '}>
       
          
            <img src={close} alt="close" onClick={HandleClick} className={active ? 'absolute right-7 top-9 z-40': 'hidden'} />
            
            <ul className='flex flex-col gap-8 mt-32 absolute z-40 pl-7'>
                <li><strong className='mr-3'>00</strong>HOME</li>
                <li><strong className='mr-3'>01</strong>DESTINATION</li>
                <li><strong className='mr-3'>02</strong>CREW</li>
                <li><strong className='mr-3'>03</strong>TECNOLOGY</li>
            </ul>
            <div className='bg-primary opacity-20  w-full h-full '></div>
        </div>
    </nav>
  )
}

export default Navbar