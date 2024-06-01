/* eslint-disable react/no-unescaped-entities */
import { schoolImages } from "../constants/constantas";

const SmallAboutSection = () => {

  const flexContainer = "bg-[#0284c7] rounded-xl p-2 flex justify-center items-center flex-col gap-4"

  return (
    <section className="h-full p-[75px] md:m-auto m-0 w-full bg-[#181818]">
      <div className='flex flex-col'>
        <h1 className="relative text-[44px] uppercase text-stone-200"><span className="text-[#0284c7]">Hello</span> & Welcome</h1>
        <p className="mb-1 text-stone-200 text-xl mb:text-sm">Where curiosity meets opportunity, an every student is set on a path to excel. We're thrilled to have you</p>

        <div className="grid md:grid-cols-3 auto-rows-[300px] gap-4 my-10">
          {schoolImages.map((item, i) => (
            <div className={`${flexContainer} ${i == 0 || i == 6 ? 'md:col-span-2 md:row-span-2': ''}`} key={i}>
              <div className="bg-cover bg-center bg-no-repeat w-full h-full rounded-md" style={{backgroundImage: `url(${item.imgUrl})`}}>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SmallAboutSection

