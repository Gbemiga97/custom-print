import { useEffect, useState } from "react"
import { DesktopNav, MobileNav } from "../components"
import { images } from "../utils"
import { CiMenuBurger } from "react-icons/ci"




const Header = () => {

    const [header, setHeader] = useState(false)
    const [showNav, setShowNav] = useState(false)



    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false)
        })
    })
    

  return (
    <header className={`${header ? 'bg-secondary py-6 shadow-lg' : 'bg-transparent py-4'}
    fixed top-0 right-0 left-0 z-50  transition-all duration-300`}>
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                {/* logo */}
            <div>
                <img src={images.Logo} alt="logo" />
            </div>

            {/* desktop Nav */}
            <div className="hidden xl:flex">
                <DesktopNav />
            </div>

            {/* mobile nav button */}
            
        <div className="text-white text-3xl xl:hidden"
        onClick={() => setShowNav(true)}
        >
            <CiMenuBurger strokeWidth={1} />
        </div>
            {/* Mobile nav */}
            <div className={`${showNav ? 'right-0' : '-right-full'}
        w-full  fixed top-0 bottom-0 overflow-hidden  bg-white transition-all duration-300 `} >
                <MobileNav setShowNav={setShowNav} showNav={showNav} />
            </div>
            </div>
        </div>
    </header>
  )
}

export default Header