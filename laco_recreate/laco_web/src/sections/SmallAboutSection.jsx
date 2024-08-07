/* eslint-disable react/no-unescaped-entities */
// import { useState } from "react";
// lets use u later
import { schoolImages } from "../constants/constants";
import { useNavigate } from "react-router-dom";
const SmallAboutSection = () => {
  // const [preview, setPreview] = useState(false);

  // const handlePreview = () => 
  //   setPreview(!preview)
  // }



  return (
    <div className="hidden md:flex flex-col flex-wrap justify-center items-center min-h-screen w-full overflow-hidden">

      <div className="my-3 flex justify-center items-center flex-col">
        <h1 className="md:text-[44px] text-[40px] uppercase font-bold text-stone-200 text-center"><span className="text-[#006bb3]">Hello</span> & Welcome</h1>
        <p className="text-gray-300 p-4 md:p-5 text-center md:w-1/2">As we look back at LCC’s beginning and trace its development with the eyes of faith, we perceive an intermingling of God’s providence and historical events that brought this institution to where it is today.</p>
      </div>



      <div className="w-[100%] py-[1rem] px-[1rem] text-center">
        <div className="w-[300px] md:w-[420px] h-[300px] bg-[#011627] rounded-md inline-block m-[3px] shadow-xl"></div>
        <div className="w-[300px] md:w-[420px] h-[300px] bg-[#011627] rounded-md inline-block m-[3px] shadow-xl"></div>
        <div className="w-[300px] md:w-[420px] h-[300px] bg-[#011627] rounded-md inline-block m-[3px] shadow-xl"></div>
        <div className="w-[300px] md:w-[420px] h-[300px] bg-[#011627] rounded-md inline-block m-[3px] shadow-xl"></div>
        <div className="w-[300px] h-[300px] bg-[#011627] rounded-md inline-block m-[3px] shadow-xl"></div>
        <div className="w-[300px] h-[300px] bg-[#011627] rounded-md inline-block m-[3px] shadow-xl"></div>
        <div className="w-[300px] h-[300px] bg-[#011627] rounded-md inline-block m-[3px] shadow-xl"></div>
        <div className="w-[300px] h-[300px] bg-[#011627] rounded-md inline-block m-[3px] shadow-xl"></div>
      </div>

      {/* <button onClick={() => (navigateToHistory("/history"))} className="mb-5 md:mb-10 rounded-lg bg-white flex justify-center items-center cursor-pointer w-[200px] h-[50px] text-[#6ec1e4] transition ease-in-out hover:scale-[110%] hover:bg-[#6ec1e4] hover:text-white">History</button> */}

    </div>
  );
};

export default SmallAboutSection

