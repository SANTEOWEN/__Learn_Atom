import { navLinksOne, dynamicColor} from "../assets/constants.js";
import { Link, useLocation } from "@tanstack/react-router";




export const NavContents = () => {
  return (
      <div className={`w-48 p-6 shadow-xl rounded-md z-40 relative bg-amber-400`}>
        <div className="mb-3 space-y-3">
          {navLinksOne.map(({name, path}, index) => (
            <Link key={index} to={path} className="text-white block text-base"> {name} </Link>
          ))}
        </div>
      </div>

  );
}
 
export default NavContents;
