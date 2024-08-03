import React from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function Card({ image, title, content, onClick, date }) {
    return <>
        <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <Link>
                <img src={image} alt={title} className='rounded-t-lg' />
            </Link>
            <div className='p-5'>
                <Link>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{`${content} ${date}`}</h5>
                </Link>
            </div>
        </div>
    </>
}

export default Card