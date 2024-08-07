const MissionVision = () => {
    return (
        <section className="mx-auto px-8 py-20 lg:py-40 bg-[#1d232f]">
            <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-gray-50 lg:!text-4xl">Mission, Vision</h2>
            <p className="block antialiased font-sans text-xl leading-relaxed text-inherit mt-2 w-full font-normal !text-gray-400 lg:w-5/12">concepts that provide direction and guidance</p>
            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
                <div className=" flex flex-col bg-clip-border bg-transparent text-gray-700 shadow-md relative min-h-[30rem] justify-end overflow-hidden rounded-xl"><img src="https://bucket.material-tailwind.com/magic-ai/58b51625af5803baea7811b7e9128c8b23c0706c3271fa863b6bc287c2d3958a.jpg" alt="bg" className="absolute inset-0 h-full w-full object-cover object-center" />
                    <div className="absolute inset-0 bg-black/70"></div>
                    <div className="p-6 relative flex flex-col justify-end">
                        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Mission Statement</h4>
                        <p className="block antialiased font-sans text-base font-light leading-relaxed text-gray-400 my-2">We commit the LCC-NovaIiches to
                            live a Christ-like life, work towards a
                            holistic
                            transformation of
                            the
                            community and render loving and
                            enduring services as we respond to
                            the call of the times.</p>
                    </div>
                </div>
                <div className="flex flex-col bg-clip-border bg-transparent text-gray-700 shadow-md relative min-h-[30rem] justify-end overflow-hidden rounded-xl"><img src="https://bucket.material-tailwind.com/magic-ai/36e7d64250cd9568062f658a26b4d0107c00235cb3b85fa4919b3ba4070c9bed.jpg" alt="bg" className="absolute inset-0 h-full w-full object-cover object-center" />
                    <div className="absolute inset-0 bg-black/70"></div>
                    <div className="p-6 relative flex flex-col justify-end">
                        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Vision Statement</h4>
                        <p className="block antialiased font-sans text-base font-light leading-relaxed text-gray-400 my-2">We, envision the LCC-Novaliches to
                            become evangelizers in pursuit of
                            Quality Catholic Education rooted to
                            the values of our foundresses Mo.
                            Rita and Mo. Consuelo and in the
                            spirit of St. Augustine.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionVision