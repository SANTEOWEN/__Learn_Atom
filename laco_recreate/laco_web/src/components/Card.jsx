/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { scrollTop } from '../constants/constants'

// eslint-disable-next-line react/prop-types
function Card({ imageUrl, title, contents, color, routes }) {
    return <>
        <div className="relative group max-w-sm rounded-lg shadow bg-gray-800 border-gray-700">
            <img className="rounded-t-lg h-[15rem]" src={imageUrl} alt="" />

            <div className="p-5">
                <h5 className={`mb-2 text-2xl font-bold tracking-tight ${color}`}>{title}</h5>
                <p className="mb-3 font-normal text-gray-400">{contents}</p>
            </div>

            <Link to={`/Courses/${routes}`} className={`p-5 flex justify-between items-center`} onClick={() => scrollTop()}>
                <span className={`text-sm ${color}`}>Learn more</span>
                <span className='translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0'><FontAwesomeIcon icon={faArrowRight} className={`text-lg text-white`} /></span>
            </Link>
            {/* to={`/courses/${routes}`} */}
        </div>
    </>
}

export default Card