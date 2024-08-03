import { events } from "../constants/constants"

const Events = () => {

    //Dont forget about the useEffect this helps you a lot.
    //use the useEffect hook if youre not dealing with functions or your just focusing only on making conditions/Async functions

    let gridStyle = `grid grid-cols-1 ${events.length > 3 ? 'lg:grid-cols-5' : 'lg:grid-cols-3'} gap-y-8 gap-x-5 content-center`
    return (
        <>
            <section className="flex flex-col w-full min-h-60 mx-auto mt-[2rem] md:mt-10">
                <div className="mx-auto w-3/4 ">
                    <h1 className="md:text-5xl font-bold text-4xl text-white">Events and Announcements</h1>
                    <p className="my-2 text-gray-300">This are the list of Activities, Events and announcements.</p>
                </div>
                <div className="w-full flex flex-row justify-center items-center p-10">
                    <div className={gridStyle}>
                        {events.map((({ img, title, content, date }, index) => {
                            return (
                                <div className="max-w-sm border rounded-lg shadow-lg bg-gray-800 border-gray-700" key={index} >
                                    <img src={img} alt="event-image" className="rounded-t-lg" />
                                    <div className="p-5">
                                        <h5 className="mb-2 font-bold text-2xl tracking-tight text-white">{`${title} ${date}`}</h5>
                                        <p className="mb-3 font-normal text-gray-400">{content}</p>
                                    </div>
                                </div>
                            )
                        }))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Events