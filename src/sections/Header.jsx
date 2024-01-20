import { useEffect, useState } from "react"
import { DesktopNav } from "../components"
import { images } from "../utils"




const Header = () => {

    const [header, setHeader] = useState(false)


    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false)
        })
    })
    

  return (
    <header className={`${header ? 'bg-[#161616]' : 'bg-transparent'}
    fixed top-0 right-0 left-0 z-50 py-6 transition-all duration-300`}>
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
            </div>
        </div>
    </header>
  )
}

export default Header