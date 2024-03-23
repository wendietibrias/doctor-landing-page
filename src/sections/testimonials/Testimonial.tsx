import './testimonial.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { useState } from 'react';
import { testimonials } from '../../constants/testimonials';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import pattern from '../../assets/images/pattern.png';

const Testimonial = () => {
    const [currentIndex,setCurrentIndex] = useState<number>(0);
    return (
        <section className='testimonial-section'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                  enabled:false

                }}
                navigation={{ nextEl:'.button-next',prevEl:'.button-prev' }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
              {testimonials.map((item:any,idx:number) => (
                <SwiperSlide key={idx} className='swiper-slide'>
                  <div className='testimonial-section--container'>
                      <div className='header'>
                      <h3>What our customer are saying</h3>
                      </div>
                      <div className='testimonials'>
                          <div className='testimonials--user-info'>
                              <img src={item.profile} alt="user 1"/>
                              <div className='user-info--detail'>
                                  <h4>{item.name}</h4>
                                  <p>{item.job}</p>
                              </div>
                          </div>
                          <p className='testi-content'>
                             {`"${item.testimonial}"`}
                          </p>
                      </div>
                  </div>
             </SwiperSlide>
              ))}
            </Swiper>
          <div className='swiper-pagination-action'>
            <button
              onClick={()=>{
                if(currentIndex <= 0) {
                   setCurrentIndex(0);
                } else {
                   setCurrentIndex(currentIndex-1);
                }
            }}
              className='button-prev'>
              <i className="ri-arrow-left-line"></i>
            </button>
            <div className='bullets'>
                {testimonials.map((item:any,idx:number)=>(
                    <div  key={idx} className={`bullet-item  ${currentIndex == idx ? 'active' :''}`}>
                      {item && item.name && ""}
                    </div>
                ))}
            </div>
            <button
            onClick={()=>{
                if(currentIndex == (testimonials.length-1)) {
                   setCurrentIndex(0);
                } else {
                   setCurrentIndex(currentIndex+1);
                }
           }}
             className='button-next'>
              <i className="ri-arrow-right-line"></i>

            </button>
          </div>
          <img src={pattern} alt="pattern-bg-1" id="testi-pattern-bg"/>
          <img src={pattern} alt="pattern-bg-2" id="testi-pattern-bg"/>

        </section>
    )
}

export default Testimonial;