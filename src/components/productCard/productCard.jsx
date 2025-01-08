import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from "./productCard.module.css"
import lancamentos from "../../data/latestReleases.json"
import maquiagem from "../../data/maquiagem.json"
import hidratacao from "../../data/hidratacao.json"

const ProductCard = ({ produtos }) => {
      const navigate = useNavigate();

      const productData = {
        lancamentos,
        maquiagem,
        hidratacao,
      };

      const categoryTitle = {
        lancamentos: "Últimos lançamentos",
        maquiagem: "Maquiagem",
        hidratacao: "Hidratação e Cuidados",
      }[produtos] || "Produtos";

      const products = productData[produtos]?.products || [];
return (
    <section className={styles.sectionContainer}>
      <h3 className={styles.sectionTitle}>{categoryTitle}</h3>

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
                () => navigate(`/produtos/${item.cod}`)}>
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
