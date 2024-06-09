/* eslint-disable react/no-unescaped-entities */
// import { useState } from "react";
import { schoolImages } from "../constants/constants";

const SmallAboutSection = () => {
  // const [preview, setPreview] = useState(false);

  // const handlePreview = () => {
  //   setPreview(!preview)
  // }

  const flexContainer = "bg-custom-blue-1 rounded-xl p-1 flex justify-center items-center flex-col gap-4 hover:scale-105 transition-transform cursor-pointer"

  return (
    <section className="h-full p-[75px] md:m-auto m-0 w-full bg-[#1f1f1f]">
      <div className='flex md:flex-row flex-col items-center'>
        <div className="flex flex-col items-center my-10">
          <h1 className="md:text-[44px] text-[40px] uppercase text-stone-200 text-center"><span className="text-[#006bb3]">Hello</span> & Welcome</h1>
          <p className="text-stone-200 text-center md:w-1/2">As we look back at LCC’s beginning and trace its development with the eyes of faith, we perceive an intermingling of God’s providence and historical events that brought this institution to where it is today.</p>
          <button className="rounded-sm bg-custom-blue-1 mt-5 flex justify-center items-center cursor-pointer w-[150px] h-[50px] text-white transition ease-in-out hover:scale-[110%] hover:bg-[#6ec1e4] hover:text-white">History</button>
        </div>

        <div className="grid md:grid-cols-3 auto-rows-[200px] gap-4 w-full ">
          {schoolImages.map((item, i) => (
            <div className={`${flexContainer} ${i == 0 || i == 6 ? 'md:col-span-2 md:row-span-2' : ''}`} key={i}>
              <div className="bg-cover bg-center bg-no-repeat w-full h-full rounded-lg" style={{ backgroundImage: `url(${item.imgUrl})` }}>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmallAboutSection

