/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '../../components/Card'
import { courses } from '../../constants/constants'

function Allcourses() {
    return <>
        <section className='mx-auto px-8 py-20 lg:py-40 bg-[#1d232f]'>
            <h2 className="block antialiased tracking-normal text-4xl font-bold leading-[1.3] text-blue-gray-900 lg:!text-4xl text-white">Program Offerings</h2>
            <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mt-2 w-full lg:w-5/12 !text-white">List of our popular courses.</p>
            <div className='mt-10 grid grid-cols-1 lg:grid-cols-5 gap-5 h-1/4'>
                {courses.map((({ imageUrl, content, course, color, routes }, index) => {
                    return <>
                        <Card
                            key={index}
                            title={course}
                            imageUrl={imageUrl}
                            contents={content}
                            color={color}
                            routes={routes}
                        />
                    </>
                }))}
            </div>

        </section>
    </>
}

export default Allcourses