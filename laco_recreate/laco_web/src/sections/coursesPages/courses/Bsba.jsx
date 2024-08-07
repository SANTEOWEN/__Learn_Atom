import { Link } from 'react-router-dom'
import { scrollTop } from '../../../constants/constants'
import { MoveRight, HandCoins, ChartBarBig, ChartNoAxesGantt, PhilippinePeso, ChartNoAxesCombined, Scale } from 'lucide-react'
import { marketingImg } from '../../../assets/courses_assets/courseAssets'

function Bsba() {
    return (
        <>
            <div className='max-h-full w-full flex lg:items-center flex-col z-50'>
                <h1 className="lg:mt-0 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">BACHELOR OF SCIENCE IN <span className='text-amber-500'>BUSINESS ADMINISTRATION</span></h1>
                <p className="mt-3 text-lg font-normal lg:text-base sm:px-16 xl:px-48 text-start lg:text-center text-ellipsis text-gray-400">The BSBA program provides a comprehensive study of the theoretical and practical foundations of business administration. It prepares students to become well-rounded business professionals, equipped with the knowledge and skills to lead, manage, and drive the success of organizations across various industries.</p>
                <p className='hidden lg:block mt-3 text-lg font-normal  lg:text-base sm:px-16 xl:px-48 text-start lg:text-center text-ellipsis text-gray-400'>The curriculum is developed in accordance with standards set by the Commission on Higher Education (CHED) and is benchmarked against leading business programs both nationally and internationally. It addresses the evolving needs of the business world by delivering a multi-disciplinary education covering core business functions such as management, finance, marketing, operations, and human resources.</p>

                <div className='mx-auto px-6 max-w-7xl text-gray-500 mt-10'>
                    <div className="relative">
                        <div className="relative  grid gap-3 grid-cols-6">

                            <div className="col-span-full lg:col-span-4 overflow-hidden relative p-8 rounded-xl bg-[#1f2937] border border-amber-500">
                                <div className="grid sm:grid-cols-2">
                                    <div className="flex flex-col justify-around relative space-y-12 lg:space-y-6">
                                        <div className="relative aspect-square rounded-full size-12 flex border dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                                            <HandCoins className='size-6 m-auto' color='white' />
                                        </div>
                                        <div className="space-y-2">
                                            <h2 className="text-lg font-medium text-gray-300">Marketing Management</h2>
                                            <p className='text-base '>Strategies for product development, pricing, promotion, and distribution.</p>
                                        </div>
                                    </div>

                                    <img src={marketingImg} alt="" className='w-full sm:w-[150%] stroke-amber-500' />

                                </div>
                            </div>

                            <div className='group col-span-full lg:col-span-2 overflow-hidden flex relative p-8 rounded-xl bg-[#1f2937] border border-amber-500'>
                                <div className='size-fit m-auto relatives'>
                                    <div className='group relative h-28 w-full flex items-start justify-start'>
                                        <ChartBarBig className='w-fit block mx-auto' size={100} color='white' />
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <h2 className="mt-6 text-center font-medium text-gray-300">Operations and Supply Chain</h2>
                                        <p className='text-center text-base'>Concepts of business operations, logistics, and supply chain management. Resource Management: Theories and practices for recruiting, developing, and managing organizational talent.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-[#1f2937] border border-amber-500">

                                <div>
                                    <div className="relative aspect-square rounded-full size-32 flex border mx-auto dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                                        <ChartNoAxesGantt className='w-24 m-auto h-fit' color='white' />
                                    </div>
                                    <div className="mt-6 text-center relative space-y-2">
                                        <h2 className="text-lg font-medium text-gray-300">Strategic Management</h2>
                                        <p className="text-center text-base">Frameworks and decision-making processes for formulating and implementing business strategies.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="group col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-[#1f2937] border border-amber-500">
                                <div>
                                    <div className="relative aspect-square rounded-full size-32 flex border mx-auto dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                                        <PhilippinePeso className='w-24 m-auto h-fit' color='white' />
                                    </div>

                                    <div className="mt-6 text-center relative space-y-2">
                                        <h2 className="text-lg font-medium text-gray-300">Accounting and Finance</h2>
                                        <p className="text-center text-base">Principles of financial and managerial accounting, corporate finance, and investment analysis.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-[#1f2937] border border-amber-500">
                                <div>

                                    <ChartNoAxesCombined className='w-24 m-auto h-fit' color='white' />

                                    <div className="mt-6 text-center relative space-y-2">
                                        <h2 className="text-lg font-medium text-gray-300">Business Analytics</h2>
                                        <p className="text-center text-base">Techniques for data-driven analysis to support business decisions.</p>
                                    </div>
                                </div>
                            </div>

                            <div className='group col-span-full lg:col-span-6 overflow-hidden flex relative p-8 rounded-xl bg-[#1f2937] border border-amber-500'>
                                <div className='size-fit m-auto relatives'>
                                    <div className='group relative h-28 w-full flex items-start justify-start'>
                                        <Scale className='w-fit block mx-auto' size={100} color='white' />
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <h2 className="mt-6 text-center font-medium text-gray-300">Business Law and Ethics</h2>
                                        <p className='text-center text-base'>Understanding of legal environments and ethical considerations in the business world.</p>
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

export default Bsba