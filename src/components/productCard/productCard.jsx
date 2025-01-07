import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from "./productCard.module.css"
import latestReleases from "../../data/latestReleases.json"


const ProductCard = () => {
      const { products } = latestReleases;
      const navigate = useNavigate();

return (
    <section className={styles.sectionContainer}>
      <h3 className={styles.sectionTitle}>Últimos Lançamentos</h3>

      <section>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={4}
          navigation
          speed={500}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className={styles.sectionSlider}
        >
          {products.map((item, index) => (
            <SwiperSlide 
              key={index} 
              className={styles.productCard}
              onClick={
                () => navigate(`/produto/${item.cod}`)}>
              <div className={styles.cardImage}>
                <div className={styles.favIcon}>
                  <i className="ri-heart-line"></i>
                </div>
                <img
                  src={item.img}
                  alt={item.alt}
                  className={styles.productImage}
                />
              </div>

              <div className={styles.productInfo}>
                <span className={styles.productName}>{item.name}</span>
                <h3 className={styles.productPrice}>R$ {item.price}</h3>
                <p>Em até 2x sem juros no cartão</p>
              </div>
            </SwiperSlide>
          ))}
        </ Swiper>
      </section>
    </section>
  );
};

export default ProductCard;
