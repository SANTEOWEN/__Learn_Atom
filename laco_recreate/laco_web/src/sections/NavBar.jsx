import FlyOutLink from '../components/FlyOutLink';
import logo from '../assets/main-2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const NavBar = () => {
  const [open, setOpen] = useState(true);

  const navList = [
    {
      id: "1",
      nav: "Home"
    },
    {
      id: "2",
      nav: "About"
    },
    {
      id: "3",
      nav: "History"
    },
    {
      id: "4",
      nav: "Mission & Vission"
    },
    {
      id: "5",
      nav: "Data Privacy"
    },
    {
      id: "6",
      nav: "Admissions"
    },
    {
      id: "7",
      nav: "Program Offerings"
    },
    {
      id: "8",
      nav: "About"
    },
    {
      id: "9",
      nav: "History"
    },
    {
      id: "10",
      nav: "Mission & Vission"
    },

  ]

  const handleClick = () => {
    setOpen((prev) => !prev);
  }


  return (
    <nav className='p-3 flex bg-custom-blue-1 justify-between items-center shadow-xl'>
      <div className='flex md:mx-20 mx-0'>
        <a href="#" id='brand' className='flex gap-2 items-center'>
          <img src={logo} alt="logo" className='object-cover max-w-60 max-h-60' />
        </a>
      </div>
      <div className='hidden md:flex gap-8 mx-20'>
        <FlyOutLink>Home</FlyOutLink>
        <FlyOutLink FlyoutContent={SampleContents}>About</FlyOutLink>
        <FlyOutLink FlyoutContent={SampleContents}>Admissions</FlyOutLink>
      </div>

      {/* 
      <button className='hidden md:flex items-center gap-2 border border-white px-6 py-2 rounded-md hover:border-custom-blue-1'>
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
          {navList.map((nav) => (
            <a href="#" className='text-base m-2 p-2 hover:bg-custom-blue-1 block rounded-lg text-white' key={nav.id}>
              {nav.nav}
            </a>
          ))}
        </div>
      </div>

    </nav>
  );
};

const SampleContents = () => {
  return (
    <div className='h-60 w-64 bg-custom-blue-1 p-6 shadow-xl rounded-md z-40' >
    </div>
  )
}


export default NavBar