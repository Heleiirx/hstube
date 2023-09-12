import {React, useState, useEffect} from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Video from "../video";
import "./carousel.css"


function Carousel({color, videos}){

    const [slides, setSlides] = useState(videos);
    
    console.log(videos)

    return <div className="carousel">

        <div className="container">
            <div className="swiperContainer">
                <Swiper 
                style={{
                    '--swiper-navigation-color': color,
                    '--swiper-pagination-color': color,
                  }}
                    modules={[Pagination, Autoplay, Navigation]}
                    autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={{
                        
                    }}
                    // slidesPerView={auto}
                    breakpoints={{
                    0: {
                        slidesPerView: 2.25,
                        spaceBetween: 3,  
                    },
                    640: {
                        slidesPerView: 2.25,
                        spaceBetween: 3,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                    },
                    }}>
                    {
                        slides.length>0 ? slides.map((slide)=>{
                            return <SwiperSlide key={slide.id}> <Video id={slide.id} link={slide.link} img={slide.img} category={slide.category} color={color} /> </SwiperSlide>
                        }) : <></>
                    }   
                </Swiper>
            </div>
        </div>
        
    </div>
}


export default Carousel