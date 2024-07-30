import React from 'react'

const History = () => {
    return (
        <>
            <section className='flex flex-col flex-wrap items-center min-h-screen gap-5 bg-[#242526] overflow-hidden md:px-40 px-10' id='history_section'>

                <div className='my-3 justify-center items-center flex-col text-center'>
                    <h1 className='text-[#006bb3] text-5xl mb-5'>History</h1>
                    <p className='text-white'>The whole timeline of the achievements and progress of the institution</p>
                </div>


                <ol className="relative border-s border-gray-200 dark:border-gray-700 md:mb-3 mb-15">
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2000</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-cyan-400">La Consolacion College Novaliches (LCCN)</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">was founded In this year, LCCN was established as an educational institution, marking the
                            beginning of its journey in providing education and academic services.</p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2002</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-cyan-400">LCCN introduced its first batch of college programs</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            This marked the expansion of LCCN's educational offerings to include college-level programs,
                            providing students with opportunities for higher education.</p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2005</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-cyan-400">The college expanded its course offerings</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">LCCN likely introduced new academic programs or expanded existing ones to cater to a wider range
                            of academic interests and career paths.Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2010</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-cyan-400">LCCN celebrated its 10th anniversary</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">This milestone was likely celebrated with special events and activities, reflecting on a decade
                            of educational service and achievements.</p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2012</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-cyan-400">The school initiated various community outreach programs</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">LCCN may have started community engagement initiatives, demonstrating its commitment to social
                            responsibility and community development.</p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2015</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-cyan-400">LCCN underwent infrastructure improvements and expansion</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">During this year, the college likely invested in upgrading its facilities and possibly expanded
                            its campus to accommodate a growing student population.</p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2020</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-cyan-400">The school adapted to online learning during the COVID-19 pandemic</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Like many educational institutions worldwide, LCCN likely transitioned to online learning to
                            ensure the continuity of education during the global pandemic.</p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2023</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-cyan-400">LCCN continued to evolve and innovate in education</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">This year represents the college's ongoing commitment to providing quality education and adapting
                            to changing educational trends and needs.</p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2024</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-cyan-400">La Consolacion College Novaliches and its remarkable Journey</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">In this year, La Consolacion College Novaliches (LCCN) celebrated its enduring commitment to
                            education and academic excellence. It marked another significant milestone in the college's history,
                            highlighting its ongoing dedication to providing quality education and adapting to changing
                            educational trends and needs.</p>
                    </li>

                </ol>


            </section>
        </>
    )
}

export default History