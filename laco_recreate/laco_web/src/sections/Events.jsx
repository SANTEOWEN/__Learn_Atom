import Card from "../components/Card"
import CardsTwo from "../components/CardsTwo"
import { events } from "../constants/constants"

const Events = () => {
    return (
        // <div className="flex flex-col justify-around items-center h-full w-full gap-10 bg-[#181818]">
        //     <div className="text-white text-6xl my-5">
        //         School Events
        //     </div>
        //     <div className="flex flex-row gap-20 flex-wrap px-5 py-5">
        //         {/* {events.map((items) => (
        //             <Card key={items.id} content={items.content} date={items.date} imgUrl={items.img} title={items.title} />
        //         ))} */}
        //         <CardsTwo/>
        //     </div>
        // </div>
        <section className="w-full h-full font-normal tracking-normal antialiased bg-[#1f1f1f]">
            <div className="flex flex-col items-center p-16 h-full w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {events.map(() => ())}
                </div>

            </div>

        
    {/* finish the event section 
    https://www.youtube.com/watch?v=KL8rtjMqu88
    
    
    */}
        </section>
    )
}

export default Events