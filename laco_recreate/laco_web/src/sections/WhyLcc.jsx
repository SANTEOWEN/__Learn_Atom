/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-router-dom'
import { reasons } from '../constants/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function WhyLcc() {
    return <>
        <section className='h-[32rem] pt-24 pr-0 block'>
            <div className='w-4/5 mx-auto grid grid-cols-1 md:grid-cols-[40%_60%]'>
                <div className='px-0 md:px-16 py-0 md:py-16 mb-5'>
                    <h1 className='text-4xl text-white'>WHY LCC NOVALICHES?</h1>
                    <p className='my-8 text-gray-300'>Here are some compelling reasons why you should consider enrolling at LC College Novaliches.</p>
                    <button>Learn more</button>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-[1.2rem]'>
                    {reasons.map((({ icon, title, content, color }, index) => {
                        return (
                            <article key={index} className='p-8 rounded-lg bg-[#011627]'>
                                <span className={`p-[0.7rem] rounded-md bg-[${color}]`}>
                                    <FontAwesomeIcon icon={icon} className='font-black' />
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