import FlyOutLink from '../components/FlyOutLink';
import logo from '../assets/main-2.png';
import NavContents from '../components/NavContents';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { navList, scrollTop } from '../constants/constants';



const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const currentLoc = useLocation();

  const handleClick = () => {
    setOpen((prev) => !prev);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [])

  const dynamicNavColor = () => {
    switch (currentLoc.pathname) {
      case '/Courses/bscs':
        return 'bg-cyan-500/30';
      case '/Courses/bsit':
        return 'bg-indigo-500/30';
      case '/Courses/bsed':
        return 'bg-pink-500/30';
      case '/Courses/bsba':
        return 'bg-amber-500/30';
      case '/Courses/bshm':
        return 'bg-green-500/30';
      default:
        return 'bg-[#3f83f8]/30';
    }
  }

  return (
    <>
      <nav className={`w-screen fixed py-3 flex md:justify-between justify-around items-center z-20 ${isScrolled ? `${dynamicNavColor()} backdrop-blur-md` : ''} ${open ? 'hidden' : ''}`}>
        <div className={`flex md:mx-20 mx-0 ${open ? 'hidden' : ''}`}>
          <Link to={"/"} id='brand' className='flex gap-2 items-center'>
            <img src={logo} alt="logo" className='object-cover max-w-60 max-h-60' />
          </Link>
        </div>
        <div className='hidden md:flex gap-5 mx-20'>
          <FlyOutLink href={"/"}>Home</FlyOutLink>
          <FlyOutLink FlyoutContent={NavContents}>About</FlyOutLink>
          <FlyOutLink href={"Courses"}>Programs</FlyOutLink>
          <FlyOutLink href={"/contact"}>Contact</FlyOutLink>
        </div>

        <button className={`p-2 md:hidden ${open ? 'hidden' : ''}`} onClick={handleClick}>
          <FontAwesomeIcon icon={faBars} className='text-white w-5 h-5' />
        </button>
      </nav>

      <div className={`fixed z-10 md:hidden bg-blue-500/30 backdrop-blur-md inset-0 p-3 ${!open ? 'hidden' : 'block'}`}>
        <div id='nav-bar' className='flex justify-around'>
          <a href="#" id='brand' className='flex gap-2 items-center'>
            <img src={logo} alt="logo" className='object-cover max-w-60 max-h-60' />
          </a>
          <button className='p-2 md:hidden' onClick={handleClick}>
            <FontAwesomeIcon icon={faXmark} className='text-white w-5 h-5' />
          </button>
        </div>
        <div className='mt-6'>
          {navList.map(({ nav, route }, index) => (
            <Link to={route} className='text-base m-2 p-2 hover:bg-custom-blue-1 block rounded-lg text-white' key={index} onClick={() => scrollTop()}>
              {nav}
            </Link>
          ))}
        </div>
      </div>

    </>
  );
};

export default NavBar