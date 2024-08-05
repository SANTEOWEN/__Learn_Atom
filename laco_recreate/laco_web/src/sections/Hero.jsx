/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom"
const Hero = () => {

    return (
        <>
            {/* <HomeSlider /> */}
            <section className={`!bg-cover !bg-center bg-[url('https://images.unsplash.com/photo-1710255073837-ec303d30e9c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-700 bg-blend-multiply`}>
                <div className="px-4 mx-auto max-w-screen-2xl text-center py-48 lg:py-96 lg:h-[70rem] md:h-[60rem] h-[60rem]">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"><span className="text-blue-500">LA CONSOLACION </span>COLLEGE NOVALICHES</h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">A premier educational institution committed to academic excellence and holistic development.</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <Link to={"/login"} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#006bb3] hover:bg-[#004c80] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Get started
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                        <Link to={"/history"} className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            Learn more
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero