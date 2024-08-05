import { navLinksOne } from "../constants/constants"
import { Link } from "react-router-dom";

const NavContentsTwo = () => {

    return (
        <div className='w-64 bg-custom-blue-1 p-6 shadow-xl rounded-sm z-40' >
            <div className="space-y-3">

                <Link to={'Courses'} className="text-white block text-base hover:underline">Program Offerings</Link>

            </div>
        </div>
    )
}

export default NavContentsTwo