import { navLinksOne } from "../constants/constants"

const NavContentsTwo = () => {
    const filteredLinks = navLinksOne.filter((link) =>link.id == 4);

    return (
        <div className='w-64 bg-custom-blue-1 p-6 shadow-xl rounded-sm z-40' >
            <div className="space-y-3">
                {filteredLinks.map((link, i) => (
                    <a href="#" key={i} className="text-white block text-base hover:underline">{link.links}</a>
                ))}
            </div>
        </div>
    )
}

export default NavContentsTwo