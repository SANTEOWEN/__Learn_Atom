import FlyOutLink from '../components/FlyOutLink';
import logo from '../assets/main-2.png';
import NavContentsTwo from '../components/NavContentsTwo';
import NavContents from '../components/NavContents';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { navList } from '../constants/constants';



const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <>
      <nav className={`w-screen fixed py-3 flex md:justify-between justify-around items-center z-20 ${isScrolled ? 'bg-blue-500/30 backdrop-blur-md' : ''} ${open ? 'hidden' : ''}`}>
        <div className={`flex md:mx-20 mx-0 ${open ? 'hidden' : ''}`}>
          <Link to={"/"} id='brand' className='flex gap-2 items-center'>
            <img src={logo} alt="logo" className='object-cover max-w-60 max-h-60' />
          </Link>
        </div>
        <div className='hidden md:flex gap-5 mx-20'>
          <FlyOutLink href={"/"}>Home</FlyOutLink>
          <FlyOutLink FlyoutContent={NavContents}>About</FlyOutLink>
          <FlyOutLink FlyoutContent={NavContentsTwo}>Admissions</FlyOutLink>
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
            <Link to={route} className='text-base m-2 p-2 hover:bg-custom-blue-1 block rounded-lg text-white' key={index}>
              {nav}
            </Link>
          ))}
        </div>
      </div>

    </>
  );
};

export default NavBar