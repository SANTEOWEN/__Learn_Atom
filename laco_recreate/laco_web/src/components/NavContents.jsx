import { navLinksOne } from "../constants/constants"
import { Link, useLocation } from "react-router-dom"
import { scrollTop } from "../constants/constants";

const NavContents = () => {
    const currentLoc = useLocation();
    const dynamicNavColor = () => {
        switch (currentLoc.pathname) {
            case '/Courses/bscs':
                return 'bg-cyan-500';
            case '/Courses/bsit':
                return 'bg-indigo-500';
            case '/Courses/bsed':
                return 'bg-pink-500';
            case '/Courses/bsba':
                return 'bg-amber-500';
            case '/Courses/bshm':
                return 'bg-green-500';
            default:
                return 'bg-[#3f83f8]';
        }
    }


    return (
        <div className={`w-64 ${dynamicNavColor()} p-6 shadow-xl rounded-md z-40 relative`}>
            <div className="mb-3 space-y-3">
                {navLinksOne.slice(0, 4).map(({ name, route }, index) => (
                    // <a href="#" key={i} className="text-white block text-base hover:underline">{link.links}</a>
                    <Link to={route} key={index} className="text-white block text-base hover:underline" onClick={() => scrollTop()}>{name}</Link>
                ))}
            </div>
        </div>
    )
}

export default NavContents