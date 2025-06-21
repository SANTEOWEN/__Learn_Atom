import { FlyOutLink } from "../components/FlyOutLink.jsx" 
import { dynamicColor, navLinksOne} from "../assets/constants.js"
import { use, useEffect, useState } from "react"
import { Link } from "@tanstack/react-router";
import { NavContents } from "../components/NavContents.jsx"

export const Navbar = () => {
 const [open, setOpen] = useState(false);
 const [isScrolled, setIsScrolled] = useState(false);

 const handleClick = () => {
  setOpen(!open);
 }

 useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
  }, []);
 
  return ( 
    <nav className={`w-screen fixed py-3 flex md:justify-between justify-around items-center z-20 backdrop-blur-md ${open ? 'hidden': ''}`}>
      <div className={`flex md:mx-20 mx-0 ${open ? 'hidden' : ''}`}>
        <Link to="/" className="flex gap-2 items-center text-white font-lg">
          LOGO TEST
        </Link>
      </div>
      <div className="hidden md:flex gap-5 mx-20">
        <FlyOutLink href={"/"}>Home</FlyOutLink>
        <FlyOutLink Content={NavContents}>About</FlyOutLink>
      </div>
    </nav>
   );
}
 
export default Navbar;
