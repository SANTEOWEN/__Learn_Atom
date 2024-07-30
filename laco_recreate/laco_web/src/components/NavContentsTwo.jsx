import { navLinksOne } from "../constants/constants"
import { Link } from "react-router-dom";

const NavContentsTwo = () => {

    return (
        <div className='w-64 bg-custom-blue-1 p-6 shadow-xl rounded-sm z-40' >
            <div className="space-y-3">
                {navLinksOne.filter((link) => link.id == 4).map(({ name, route }, index) => (
                    <Link to={route} key={index} className="text-white block text-base hover:underline">{name}</Link>
                ))}
            </div>
        </div>
    )
}

export default NavContentsTwo