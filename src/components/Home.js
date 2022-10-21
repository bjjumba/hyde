import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const Home = () => {
  return (
    <section className="home">
        <div className="swiper home-slid">
            <div className="wrapper">
                <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swiper wrapper"
      >
        <SwiperSlide>
            <div className="swiper-slide box">
                    <div className="image">
                        <img src="https://res.cloudinary.com/di4su7hro/image/upload/v1665562892/pic1_oqzsce.jpg" alt=""/>
                    </div>

                    <div className='content'>
                       <h3>Hyde</h3>
                       <p>HHHHHHHHH</p>
                       <button className="btn">Get Started</button>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
                    <div className="image">
                        <img src="https://res.cloudinary.com/di4su7hro/image/upload/v1665562892/pic1_oqzsce.jpg" alt=""/>
                    </div>

                    <div className='content'>
                       <h3>Hyde</h3>
                       <p>HHHHHHHHH</p>
                       <button className="btn">Get Started</button>
                    </div>
                </div>

        </SwiperSlide>
        <SwiperSlide>
           <div className="box">
                    <div className="image">
                        <img src="https://res.cloudinary.com/di4su7hro/image/upload/v1665562892/pic1_oqzsce.jpg" alt=""/>
                    </div>

                    <div className='content'>
                       <h3>Hyde</h3>
                       <p>HHHHHHHHH</p>
                       <button className="btn">Get Started</button>
                    </div>
                </div>

        </SwiperSlide>
      </Swiper>

            </div>
        </div>
    </section>
  )
}

export default Home