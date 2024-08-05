import { navLinksOne } from "../constants/constants"
import { Link } from "react-router-dom"

const NavContents = () => {
    return (
        <div className='w-64 bg-custom-blue-1 p-6 shadow-xl rounded-sm z-40 relative'>
            <div className="mb-3 space-y-3">
                {navLinksOne.slice(0,4).map(({name, route}, index) => (
                    // <a href="#" key={i} className="text-white block text-base hover:underline">{link.links}</a>
                    <Link to={route} key={index} className="text-white block text-base hover:underline">{name}</Link>
                ))}
            </div>
        </div>
    )
}

export default NavContents