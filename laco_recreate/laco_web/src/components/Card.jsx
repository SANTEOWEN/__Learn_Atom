/* eslint-disable react/prop-types */
const Card = ({ date, title, content, imgUrl }) => {


    return (
        <>
            <div className="w-[350px] md:h-[650px] h-[400px] bg-white relative rounded-t-md ">
                <div className="flex justify-start flex-col">
                    {/* event image */}
                    <div className="flex bg-cover bg-center bg-no-repeat h-[275px] w-full rounded-t-md" style={{ backgroundImage: `url(${imgUrl})` }}>
                    </div>

                    {/* text-contents */}
                    <div className="p-3">
                        <h4 className="text-sm font-medium">{date}</h4>
                        <h1 className="font-semibold text-lg text-sky-500">{title}</h1>
                        <p className="pt-2 text-base hidden md:block ">{content}</p>
                    </div>

                    {/* Share links */}
                    {/* Finish this tomorow */}

                </div>

            </div>
        </>
    )
}

export default Card