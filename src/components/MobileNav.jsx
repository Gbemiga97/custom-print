import { IoClose } from "react-icons/io5"
import data from "../utils/data"
import { Link } from "react-router-dom"

const MobileNav = ({showNav, setShowNav}) => {


  return (
        <nav >
            <div className="text-3xl m-8"
            onClick={() => setShowNav(false)}
            >
                <IoClose />
            </div>
            <ul className="w-full h-[70vh] flex flex-col items-center justify-center gap-y-8">
                { 
                    data.links.map(({name, path}, i) => (
                        <li key={i} className="capitalize text-2xl font-semibold">
                            <Link to={path} onClick={() => setShowNav(false)}>
                                {name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
  )
}

export default MobileNav