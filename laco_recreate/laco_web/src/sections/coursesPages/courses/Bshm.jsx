import React from 'react'
import { Link } from 'react-router-dom'
import { MoveRight, Handshake, HandHelping, PiggyBank, User, Scale, Sprout } from 'lucide-react'
import { scrollTop } from '../../../constants/constants'
import { humanImage } from '../../../assets/courses_assets/courseAssets'

function Bshm() {
  return (
    <>
      <div className='max-h-full w-full flex lg:items-center flex-col z-50'>
        <h1 className="lg:mt-0 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">BACHELOR OF SCIENCE IN <span className='text-green-500'>HOSPITALITY MANAGEMENT</span></h1>
        <p className="mt-3 text-lg font-normal lg:text-base sm:px-16 xl:px-48 text-start lg:text-center text-ellipsis text-gray-400">The BSBA program provides a comprehensive study of the theoretical and practical foundations of business administration. It prepares students to become well-rounded business professionals, equipped with the knowledge and skills to lead, manage, and drive the success of organizations across various industries.</p>
        <p className='hidden lg:block mt-3 text-lg font-normal  lg:text-base sm:px-16 xl:px-48 text-start lg:text-center text-ellipsis text-gray-400'>The curriculum is developed in accordance with standards set by the Commission on Higher Education (CHED) and is benchmarked against leading business programs both nationally and internationally. It addresses the evolving needs of the business world by delivering a multi-disciplinary education covering core business functions such as management, finance, marketing, operations, and human resources.</p>

        <div className='mx-auto px-6 max-w-7xl text-gray-500 mt-10'>
          <div className="relative">
            <div className="relative  grid gap-3 grid-cols-6">


              <div className='group col-span-full lg:col-span-2 overflow-hidden flex relative p-8 rounded-xl bg-[#1f2937] border border-green-500'>
                <div className='size-fit m-auto relatives'>
                  <div className='group relative h-28 w-full flex items-start justify-start'>
                    <Handshake className='w-fit block mx-auto' size={100} color='white' />
                  </div>
                  <div className='flex flex-col justify-center'>
                    <h2 className="mt-6 text-center font-medium text-gray-300">Hospitality Foundations</h2>
                    <p className='text-center text-base'>Introduction to the hospitality industry, including hotels, resorts, restaurants, and tourism.</p>
                  </div>
                </div>
              </div>


              <div className="group col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-[#1f2937] border border-green-500">
                <div>
                  <div className="relative aspect-square rounded-full size-32 flex border mx-auto dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                    <HandHelping className='w-24 m-auto h-fit' color='white' />
                  </div>
                  <div className="mt-6 text-center relative space-y-2">
                    <h2 className="text-lg font-medium text-gray-300">Hospitality Operations</h2>
                    <p className="text-center text-base">Principles and practices of managing hotel operations, food and beverage services, and event planning.</p>
                  </div>
                </div>
              </div>



              <div className="group col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-[#1f2937] border border-green-500">
                <div>
                  <div className="relative aspect-square rounded-full size-32 flex border mx-auto dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                    <PiggyBank className='w-24 m-auto h-fit' color='white' />
                  </div>

                  <div className="mt-6 text-center relative space-y-2">
                    <h2 className="text-lg font-medium text-gray-300">Hospitality Accounting and Finance</h2>
                    <p className="text-center text-base">Financial management, revenue management, and budget planning for hospitality businesses.</p>
                  </div>
                </div>
              </div>


              <div className="col-span-full lg:col-span-4 overflow-hidden relative p-8 rounded-xl bg-[#1f2937] border border-green-500">
                <div className="grid sm:grid-cols-2">
                  <div className="flex flex-col justify-around relative space-y-12 lg:space-y-6">
                    <div className="relative aspect-square rounded-full size-12 flex border dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                      <User className='size-6 m-auto' color='white' />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-lg font-medium text-gray-300">Hospitality Human Resource Management</h2>
                      <p className='text-base '>Recruitment, training, and management of hospitality staff and personnel.</p>
                    </div>
                  </div>
                  <img src={humanImage} alt="" className='w-full sm:w-[150%] stroke-green-500' />
                </div>
              </div>

              <div className="group col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-[#1f2937] border border-green-500">
                <div>
                  <div className="relative aspect-square rounded-full size-32 flex border mx-auto my-16 dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                    <Scale className='w-24 m-auto h-fit' color='white' />
                  </div>

                  <div className="mt-16 text-center relative space-y-2">
                    <h2 className="text-lg font-medium text-gray-300">Hospitality Law and Ethics</h2>
                    <p className="text-center text-base">Legal regulations, ethical standards, and risk management in the hospitality industry.</p>
                  </div>
                </div>
              </div>

              <div className='group col-span-full lg:col-span-6 overflow-hidden flex relative p-8 rounded-xl bg-[#1f2937] border border-green-500'>
                <div className='size-fit m-auto relatives'>
                  <div className='group relative h-28 w-full flex items-start justify-start'>
                    <Sprout className='w-fit block mx-auto' size={100} color='white' />
                  </div>
                  <div className='flex flex-col justify-center'>
                    <h2 className="mt-6 text-center font-medium text-gray-300">Hospitality Sustainability</h2>
                    <p className='text-center text-base'>Concepts of environmental sustainability and corporate social responsibility in the hospitality sector.</p>
                  </div>
                </div>
              </div>

              <Link to={`/Courses`} className={`w-80 p-5 flex justify-between items-center group`} onClick={() => scrollTop()}>
                <span className={`text-sm text-white`}>Back to all courses?</span>
                <span className='translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0'><MoveRight className={`text-lg stroke-white`} /></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Bshm