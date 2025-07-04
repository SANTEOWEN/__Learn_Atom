import { useLocation } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Footer = () => {
  return  (
    <>
      <footer className="bg-[#1f2937] border-t-1px border-green-500">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-1 gap-3 px-4 py-6 lg:py-8 md:grid-cols-3">
            <div>
              <h2 className="mb-2 md:mb-6 text-sm font-semibold uppercase text-white">La Consolacion College</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/about" className="hover:underline">About</Link>
                </li>
                <li className="mb-4">
                  <Link to="/admissions" className="hover:underline">Admissions</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 md:mb-6 text-sm font-semibold uppercase text-white">Help center</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">Twitter</Link>
                </li>
                <li className="mb-4">
                  <Link to="/" className="hover:underline">Facebook</Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
                  <h2 className="mb-2 md:mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">Licensing</a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                    </li>
                  </ul>
                </div>
          </div> 
          <div className="px-4 py-6  dark:bg-[#bg-gray-100] md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-300 sm:text-center">© 2024 <a href="https://flowbite.com/">La Consolacion College Novaliches™</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                  <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                      <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
                    </svg>
                    <span className="sr-only">Facebook page</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                      <path d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" />
                    </svg>
                    <span className="sr-only">Twitter page</span>
                  </a>
                </div>
              </div>
        </div>
      </footer>
  
  </>
  )
  
}
 
export default Footer;
