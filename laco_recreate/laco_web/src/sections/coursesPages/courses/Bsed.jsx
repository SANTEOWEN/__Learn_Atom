import { MoveRight, BookHeart, LibraryBig, PersonStanding, Wand, HeartHandshake, BookUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { scrollTop } from '../../../constants/constants'
import { sharingImg } from '../../../assets/courses_assets/courseAssets'

function Bsed() {
  return (
    <>
      <div className='max-h-full w-full flex lg:items-center flex-col z-50'>
        <h1 className="lg:mt-0 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">BACHELOR OF SCIENCE IN <span className='text-pink-500'>EDUCATION</span></h1>
        <p className="mt-3 text-lg font-normal lg:text-base sm:px-16 xl:px-48 text-start lg:text-center text-ellipsis text-gray-400">The BSIT program is a study of the theoretical and practical foundations of information technology. It prepares students to be IT professionals, equipped with the skills to design, implement, and manage computing solutions for organizations.</p>
        <p className='hidden lg:block mt-3 text-lg font-normal  lg:text-base sm:px-16 xl:px-48 text-start lg:text-center text-ellipsis text-gray-400'>The curriculum is based on standards set by the Commission on Higher Education (CHED) and is benchmarked against leading academic programs both nationally and internationally. It addresses the evolving needs of the IT industry by providing a comprehensive education in areas such as software development, database management, networking, cybersecurity, and IT infrastructure.</p>

        <div className='mx-auto px-6 max-w-7xl text-gray-500 mt-10'>
          <div className="relative">
            <div className="relative  grid gap-3 grid-cols-6">

              <div className='group col-span-full lg:col-span-2 overflow-hidden flex relative p-8 rounded-xl bg-[#1f2937] border border-pink-500'>
                <div className='size-fit m-auto relatives'>
                  <div className='group relative h-28 w-full flex items-start justify-start'>
                    <BookHeart className='w-fit block mx-auto' size={100} color='white' />
                  </div>
                  <div className='flex flex-col justify-center'>
                    <h2 className="mt-6 text-center font-medium text-gray-300">Foundations of Education</h2>
                    <p className='text-center text-base'>Study of the historical, philosophical, and sociological underpinnings of education.</p>
                  </div>
                </div>
              </div>

              <div className="group col-span-full sm:col-span-3 lg:col-span-4 overflow-hidden relative p-8 rounded-xl bg-[#1f2937] border border-pink-500">

                <div>
                  <div className="relative aspect-square rounded-full size-32 flex border mx-auto dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                    <LibraryBig className='w-24 m-auto h-fit' color='white' />
                  </div>
                  <div className="mt-6 text-center relative space-y-2">
                    <h2 className="text-lg font-medium text-gray-300">Teaching Methodologies</h2>
                    <p className="text-center text-base">Techniques and strategies for effective instruction and classroom delivery.</p>
                  </div>
                </div>

              </div>

              <div className="group col-span-full sm:col-span-3 lg:col-span-4 overflow-hidden relative p-8 rounded-xl bg-[#1f2937] border border-pink-500">
                <div>
                  <div className="relative aspect-square rounded-full size-32 flex border mx-auto dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                    <PersonStanding className='w-24 m-auto h-fit' color='white' />
                  </div>

                  <div className="mt-6 text-center relative space-y-2">
                    <h2 className="text-lg font-medium text-gray-300">Educational Psychology</h2>
                    <p className="text-center text-base">Understanding of human development, learning theories, and individual differences.</p>
                  </div>
                </div>
              </div>

              <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-[#1f2937] border border-pink-500">
                <div>

                  <Wand className='w-24 m-auto h-fit' color='white' />

                  <div className="mt-6 text-center relative space-y-2">
                    <h2 className="text-lg font-medium text-gray-300">Curriculum and Instructional Design</h2>
                    <p className="text-center text-base">Principles and practices of designing and implementing educational curricula.</p>
                  </div>
                </div>
              </div>

              <div className='group col-span-full lg:col-span-2 overflow-hidden flex relative p-8 rounded-xl bg-[#1f2937] border border-pink-500'>
                <div className='size-fit m-auto relatives'>
                  <div className='group relative h-28 w-full flex items-start justify-start'>
                    <BookUp className='w-fit block mx-auto' size={100} color='white' />
                  </div>
                  <div className='flex flex-col justify-center'>
                    <h2 className="mt-6 text-center font-medium text-gray-300">Educational Technology</h2>
                    <p className='text-center text-base'>Integration of technology to enhance teaching and learning.</p>
                  </div>
                </div>
              </div>

              <div className="col-span-full lg:col-span-4 overflow-hidden relative p-8 rounded-xl bg-[#1f2937] border border-pink-500">
                <div className="grid sm:grid-cols-2">
                  <div className="flex flex-col justify-around relative space-y-12 lg:space-y-6">
                    <div className="relative aspect-square rounded-full size-12 flex border dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                      <HeartHandshake className='size-6 m-auto' color='white' />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-lg font-medium text-gray-300">Student Assessment</h2>
                      <p className='text-base '>Methods for evaluating student learning and providing constructive feedback.</p>
                    </div>
                  </div>

                  <img src={sharingImg} alt="" className='w-full sm:w-[150%] stroke-pink-500' />

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

export default Bsed