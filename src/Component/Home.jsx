

const Home = () => {
  return (
    <div  className='bg-bgMobileHome  h-full bg-no-repeat bg-cover absolute top-0 z-0  w-screen flex flex-col items-center justify-start gap-8 text-center pt-32 sm:bg-bgTabletHome  lg:bg-bgDesktopHome lg:flex-row lg:justify-around lg:items-center lg:gap-20'>
        
     
        <div className="flex flex-col gap-7  max-w-[450px] sm:mt-12 lg:text-left lg:items-start ">
            <h5 className="text-lg text-secondary font-secondary tracking-widest sm:-mb-5 lg:text-2xl">
                SO, YOU WANT TO TRAVEL TO
            </h5> 
            <h1 className="text-[80px] text-thirt font-primary sm:text-[120px]">
                SPACE
            </h1>
            <p className="text-md mx-7 text-secondary font-secondary tracking-wider opacity-70 -mt-7 leading-relaxed lg:mx-0 lg:mr-20  ">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
            
       
       <button className="mt-7 tracking-wider bg-bg-button w-32 h-32 rounded-full m-auto  hover:shadow-[0px_0px_4px_30px] transition-all duration-300 font-primary text-xl pt-2 sm:w-48 sm:h-48 sm:mt-14 lg:m-0 lg:mt-32 lg:w-60 lg:h-60 lg:text-3xl"> 
            EXPLORE
       </button>
    </div>
  )
}

export default Home