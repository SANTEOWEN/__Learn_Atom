/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { reasons } from '../constants/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function WhyLcc() {
    const moreNavigate = useNavigate()

    return <>
        <section className='h-[32rem] pt-24 pr-0 block my-40'>
            <div className='w-4/5 mx-auto grid grid-cols-1 md:grid-cols-[40%_60%]'>
                <div className='px-0 md:px-16 py-0 md:py-16 mb-5'>
                    <h1 className='text-4xl md:text-6xl font-bold text-white'>WHY <span className='text-cyan-500'>LCC</span> NOVALICHES?</h1>
                    <p className='my-8 text-gray-300'>Here are some compelling reasons why you should consider enrolling at LC College Novaliches.</p>
                    <button className="group relative h-12 w-48 overflow-hidden bg-white text-lg shadow" onClick={() => { moreNavigate("/learnmore") }}>
                        <div className="absolute inset-0 w-3 bg-[#006bb3] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <span className="relative text-black group-hover:text-white">Learn more!</span>
                    </button>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-[1.2rem]'>
                    {reasons.map((({ icon, title, content, color }, index) => {
                        return (
                            <article key={index} className='p-8 rounded-lg bg-[#011627] shadow-lg'>
                                <span className={`p-[0.7rem] rounded-md`} style={{ backgroundColor: `${color}` }}>
                                    <FontAwesomeIcon icon={icon} className='text-white' />
                                </span>
                                <h5 className='my-6 text-white text-lg'>{title}</h5>
                                <p className='text-base text-white'>{content}</p>
                            </article>
                        )
                    }))}
                </div>

            </div>
        </section>
    </>
}

export default WhyLcc