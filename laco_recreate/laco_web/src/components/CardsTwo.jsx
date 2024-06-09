const CardsTwo = ({ imgurl, title, date }) => {
    return <>
        <div>
            <div className="rounded bg-black overflow-hidden shadow">
                <img src={imgurl} alt={title} className=""/>
                <div className="p-3">
                    <h4 className="text-xl font-bold text-black">{title}</h4>
                    <p className="text-gray-500">
                        {date}
                    </p>
                </div>
            </div>
        </div>
    </>
}

export default CardsTwo