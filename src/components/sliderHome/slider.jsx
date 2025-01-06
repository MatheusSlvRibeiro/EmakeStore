import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import styles from'./slider.module.css'; 

export default function SimpleSlider() {
  
  return (
    <Swiper
      className={styles.Slider}
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{clickable: true}}
      autoplay={{
            delay: 5000,
            disableOnInteraction: false,
      }}
      loop={true}
      speed={1000}
      spaceBetween={0}
      slidesPerView={1}
      allowTouchMove={false}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="/images/slider/1.jpg" alt="none" className={styles.slide} /></SwiperSlide>
      <SwiperSlide><img src="/images/slider/2.jpg" alt="none" className={styles.slide} /></SwiperSlide>
      <SwiperSlide><img src="/images/slider/3.jpg" alt="none" className={styles.slide} /></SwiperSlide>
    </Swiper>
  );
}

