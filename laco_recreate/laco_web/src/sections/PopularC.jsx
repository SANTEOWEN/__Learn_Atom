import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faComputer, faCoins, faBook } from '@fortawesome/free-solid-svg-icons'


//mt-[75rem] md:mt-52
function PopularC() {
    return <>
        <section className='py-16 overflow-hidden mt-[80rem] md:mt-52 my-40'>
            <div className='container m-auto px-6 space-y-8 text-gray-500 md:px-12'>

                <div className='flex items-center md:items-end flex-col'>
                    <span className='text-white text-lg font-semibold'>Main Courses</span>
                    <h2 className='mt-4 text-2xl text-white font-bold md:text-4xl text-center'>Our most popular courses</h2>
                </div>

                <div className='md:rounded-xl rounded-none mt-16 gap-x-0 md:gap-x-5 grid divide-x divide-y overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4'>

                    <div className='relative group bg-white transition hover:z-[1] hover:shadow-2xl rounded-none md:rounded-xl'>
                        <div className='relative p-8 space-y-8'>
                            <FontAwesomeIcon icon={faComputer} className='w-10 text-5xl text-cyan-500' />

                            <div className='space-y-2'>
                                <h5 className='text-xl text-gray-800 font-medium transition group-hover:text-cyan-500'>Computer Science</h5>
                                <p className='text-sm text-gray-600'>Graduates are well-prepared for careers in software, data analysis, cybersecurity, and other tech fields.</p>
                            </div>
                            <Link className='flex justify-between items-center group-hover:text-cyan-500'>
                                <span className='text-sm'>Read More</span>
                                <span className='translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0'><FontAwesomeIcon icon={faArrowRight} /></span>
                            </Link>
                        </div>
                    </div>

                    <div className='relative group bg-white transition hover:z-[1] hover:shadow-2xl rounded-none md:rounded-xl'>
                        <div className='relative p-8 space-y-8'>
                            <FontAwesomeIcon icon={faCoins} className='w-10 text-5xl text-amber-500' />

                            <div className='space-y-2'>
                                <h5 className='text-xl text-gray-800 font-medium transition group-hover:text-amber-500'>Business Administration</h5>
                                <p className='text-sm text-gray-600'>Graduates are well-prepared for careers in business management, finance, marketing, and other in-demand business roles.</p>
                            </div>
                            <Link className='flex justify-between items-center group-hover:text-amber-500'>
                                <span className='text-sm'>Read more</span>
                                <span className='translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0'><FontAwesomeIcon icon={faArrowRight} /></span>
                            </Link>
                        </div>
                    </div>

                    <div className='relative group bg-white transition hover:z-[1] hover:shadow-2xl rounded-none md:rounded-xl'>
                        <div className='relative p-8 space-y-8'>
                            <FontAwesomeIcon icon={faBook} className='w-10 text-5xl text-pink-500' />

                            <div className='space-y-2'>
                                <h5 className='text-xl text-gray-800 font-medium transition group-hover:text-pink-500'>Education</h5>
                                <p className='text-sm text-gray-600'>Graduates are well-prepared for careers in teaching, educational administration, and curriculum development.</p>
                            </div>
                            <Link className='flex justify-between items-center group-hover:text-pink-500'>
                                <span className='text-sm'>Read more</span>
                                <span className='translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0'><FontAwesomeIcon icon={faArrowRight} /></span>
                            </Link>
                        </div>
                    </div>

                    <div className="relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block rounded-none md:rounded-xl">
                        <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">

                            <div className="space-y-2">
                                <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Explore other courses</h5>
                                <p className="text-sm text-gray-600">Check out our other popular courses</p>
                            </div>
                            <Link className="flex justify-between items-center group-hover:text-yellow-600">
                                <span className="text-sm">Read more</span>
                                <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0"><FontAwesomeIcon icon={faArrowRight} /></span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
}

export default PopularC