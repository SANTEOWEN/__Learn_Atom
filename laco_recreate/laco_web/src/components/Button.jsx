import React from 'react'

const Button = ({ name, href }) => {
    return (
        <button className='rounded-lg bg-white flex justify-center items-center cursor-pointer w-[200px] h-[50px] text-[#6ec1e4] transition ease-in-out hover:scale-[110%] hover:bg-[#6ec1e4] hover:text-white' >
            <a href={href}>{name}</a>
        </button>
    )
}

export default Button