import { NavLink } from "react-router-dom"
import data from "../utils/data"

const DesktopNav = () => {
  return (
    <nav>
        <ul className="flex gap-x-8 text-white capitalize">
            {
                data.links.map(({name, path}, i) => (
                    <li key={i} className="hover:text-black hover:font-semibold transition-all">
                        <NavLink to={path}
                        className={({isActive}) => isActive ? 'text-black font-bold' : ''}
                        >
                            {name}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default DesktopNav