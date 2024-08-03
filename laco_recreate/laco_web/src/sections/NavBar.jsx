import FlyOutLink from '../components/FlyOutLink';
import logo from '../assets/main-2.png';
import NavContentsTwo from '../components/NavContentsTwo';
import NavContents from '../components/NavContents';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { navList } from '../constants/constants';



const NavBar = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen((prev) => !prev);
  }


  return (
    <nav className='p-3 flex bg-custom-blue-1 md:justify-between justify-around items-center shadow-xl'>
      <div className='flex md:mx-20 mx-0'>
        <a href="#" id='brand' className='flex gap-2 items-center'>
          <img src={logo} alt="logo" className='object-cover max-w-60 max-h-60' />
        </a>
      </div>
      <div className='hidden md:flex gap-5 mx-20'>
        <FlyOutLink href={"/"}>Home</FlyOutLink>
        <FlyOutLink FlyoutContent={NavContents}>About</FlyOutLink>
        <FlyOutLink FlyoutContent={NavContentsTwo}>Admissions</FlyOutLink>
        <FlyOutLink href={"/contact"}>Contact</FlyOutLink>
      </div>


      {/* <button className='hidden md:flex items-center gap-2 border border-white px-6 py-2 rounded-md hover:border-custom-blue-1'>
        <span className='text-white font-medium'>Join Us</span>
        <FontAwesomeIcon icon={faArrowRight} className='text-white'/>
      </button> */}

      <button className='p-2 md:hidden' onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} className='text-white w-5 h-5' />
      </button>

      <div className={`fixed z-10 md:hidden bg-custom-blue-2 inset-0 p-3 ${open ? 'hidden' : ''}`}>
        <div id='nav-bar' className='flex justify-between'>
          <a href="#" id='brand' className='flex gap-2 items-center'>
            <img src={logo} alt="logo" className='object-cover max-w-60 max-h-60' />
          </a>
          <button className='p-2 md:hiddn' onClick={handleClick}>
            <FontAwesomeIcon icon={faXmark} className='text-white w-5 h-5' />
          </button>
        </div>
        <div className='mt-6'>
          {navList.map(({ nav, route }, index) => (
            // <a href="#" className='text-base m-2 p-2 hover:bg-custom-blue-1 block rounded-lg text-white' key={nav.id}>
            //   {nav.nav}
            // </a>
            <Link to={route} className='text-base m-2 p-2 hover:bg-custom-blue-1 block rounded-lg text-white' key={index}>
              {nav}
            </Link>
          ))}
        </div>
      </div>

    </nav>
  );
};

export default NavBar