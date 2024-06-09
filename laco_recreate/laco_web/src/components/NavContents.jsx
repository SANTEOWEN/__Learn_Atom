import { navLinksOne } from "../constants/constants"

const NavContents = () => {
    return (
        <div className='w-64 bg-custom-blue-1 p-6 shadow-xl rounded-sm z-40 relative'>
            <div className="mb-3 space-y-3">
                {navLinksOne.map((link, i) => (
                    <a href="#" key={i} className="text-white block text-base hover:underline">{link.links}</a>
                ))}
            </div>
        </div>
    )
}

export default NavContents