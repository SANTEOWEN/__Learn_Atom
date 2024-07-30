import Card from "../components/Card"
import CardsTwo from "../components/CardsTwo"
import { useState } from "react"
import { events } from "../constants/constants"


const Events = () => {
    const [showDesc, setShowDesc] = useState({})

    const toggleDescription = (index) => {
        setShowDesc(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const truncateContent = (content, index) => {
        if (!showDesc[index] && content.length > 90) {
            return content.substring(0, 90) + '...';
        }
        return content;
    };

    return (
        <>
            <div className="flex w-full min-h-60 bg-[#242526]">
                <div className="flex-1 max-w-full mx-auto p-10">
                    <h1 className="text-6xl text-center py-5 text-white">EVENTS</h1>

                    <ul className="grid grid-cols-1 sm:gap-cols-3 lg:grid-cols-3 gap-y-8 gap-x-5 content-center">
                        {events.map(({ date, title, img, content }, index) => (
                            <li key={index}>
                                <div key={index} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 shadow-xl">
                                    <img src={img} alt={title} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" />
                                    <div className="flex flex-col justify-between p-4 leading-normal">
                                        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h1>
                                        <h5 className="text-white mb-4">{date}</h5>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 md:hidden block">{content}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>


                </div>
            </div>
        </>
    )
}

export default Events