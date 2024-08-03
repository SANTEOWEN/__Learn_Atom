import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// Create a js file to import all of the images all at once.
import img_1 from '../assets/3.jpg'
import img_2 from '../assets/mary_1.jpg'
import img_3 from '../assets/test_1.jpg'
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';

const HomeSlider = () => {
    const loginNavigate = useNavigate();

    return (
        <section className='z-10'>
            <Swiper
                className='relative group'
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                navigation={{
                    nextEl: ".button-next-slide",
                    prevEl: ".button-prev-slide",
                }}
                modules={[Navigation]}
            >
                <SwiperSlide className='cursor-pointer'>
                    <div className='!bg-cover !bg-center md:h-[55rem] h-[55rem] w-full flex' style={{ background: `url(${img_1}) no-repeat` }}>
                        <div className='flex justify-center items-center p-[30px] flex-col max-w-[800px] m-auto gap-[10px]'>
                            <h6 className='text-[25px] text-white font-light'>Unitas Caritas Veritas</h6>
                            <h3 className='text-center md:text-[40px] text-2xl text-white font-semibold my-3'><span className='text-sky-600'>La Consolacion</span> College Novaliches</h3>
                            {/*Use router dom for this one*/}
                            <button className='rounded-lg bg-white flex justify-center items-center cursor-pointer w-[200px] h-[50px] text-[#6ec1e4] transition ease-in-out hover:scale-[110%] hover:bg-[#6ec1e4] hover:text-white' onClick={() => { loginNavigate(`/login`) }}>Join Us!</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='cursor-pointer'>
                    <div className='!bg-cover !bg-center md:h-[55rem] h-[55rem] w-full flex' style={{ background: `url(${img_2}) no-repeat` }}>
                        <div className='flex justify-center items-start p-[30px] md:ml-[50px] ml-0 flex-col'>
                            <h3 className='text-[30px] font-semibold text-white'>The Best Courses You Will Find Here</h3>
                            <p className='text-[20px] font-thin text-white'>We Have a <span className='text-[#006bb3]'>
                                <a href="#">Variety</a>
                            </span> of courses that you can choose.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='cursor-pointer'>
                    <div className='!bg-cover !bg-center md:h-[55rem] h-[55rem] flex w-full' style={{ background: `url(${img_3}) no-repeat` }}>
                        <div className='flex justify-center items-center p-[30px] md:ml-[50px] ml-0 flex-col'>
                            <h3 className='text-[30px] font-semibold text-white'>We Evangelize</h3>
                            <p className='text-center md:text-[15px] text-20px font-extralight text-white max-w-lg mb-5'>We passionately share the transformative power of faith. Our mission is to spread the message
                                of hope and love to all corners of the world. We believe in the power of spiritual growth
                                and the positive change it can bring to individuals and communities. Join us as we embark on
                                this journey of faith, spreading the word and making a difference in the world.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <div className='hidden md:block absolute top-[45%] z-50 group-hover:right-5 -right-[23rem] duration-500 button-next-slide text-white'>
                    <FontAwesomeIcon icon={faArrowRight} className='text-3xl cursor-pointer' />

                </div>
                <div className='hidden md:block absolute top-[45%] z-50 group-hover:left-5 -left-[23rem] duration-500 button-prev-slide text-white'>
                    <FontAwesomeIcon icon={faArrowLeft} className='text-3xl cursor-pointer' />
                </div>

            </Swiper>
        </section>
    )
}

export default HomeSlider