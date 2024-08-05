import React from 'react'
import { useNavigate } from 'react-router-dom'
import { scrollTop } from '../constants/constants'

const PageNotFound = () => {
    const navigateHome = useNavigate()

    return (
        <>
            <div className='flex justify-center items-center h-screen w-full flex-col bg-[#1d232f]'>
                <h1 className='text-[#6ec1e4] lg:text-9xl text-center md:text-6xl text-4xl'>STILL UNDER CONSTRUCTION!</h1>
                <button className='mt-5 bg-[#6ec1e4] rounded-md px-10 py-3 text-white' onClick={() => { navigateHome("/"); scrollTop() }}>Back to Home Page</button>
            </div>
        </>
    )
}

export default PageNotFound
