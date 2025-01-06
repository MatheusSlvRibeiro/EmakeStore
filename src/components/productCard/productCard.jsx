import React from "react";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from "./productCard.module.css"
import latestReleases from "../../data/latestReleases.json"

const ProductCard = () => {

      const { products } = latestReleases;

      return(
            <section className={styles.sectionContainer}>
                  
                  <h3 className={styles.sectionTitle}>Últimos Lançamentos</h3>

                  <section>
                              <Swiper 
                                    modules={[Navigation, Autoplay]}
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    loop={true}
                                    navigation={true}
                                    autoplay={{
                                          delay: 4000,
                                          disableInteraction: false,
                                    }}
                                    className={styles.sectionSlider}
                                    >
                                    {products.map((item, index) => (
                                          <SwiperSlide key={index} className={styles.productCard} >
                                                <div className={styles.cardImage}>
                                                      <div className={styles.favIcon}>
                                                            <i className="ri-heart-line"></i>
                                                      </div>

                                                      <img 
                                                            src={item.img} 
                                                            alt={item.alt} 
                                                            className={styles.productImage} />
                                                </div>

                                                <div className={styles.productInfo}>
                                                      <span className={styles.productName}>{item.name}</span>
                                                      <h3 className={styles.productPrice}>R$ {item.price}</h3>
                                                      <p>Em até 2x sem juros no cartão</p>

                                                </div>
                                          </SwiperSlide>
                                    ))}
                              </Swiper>
                  </section>
            </section>
      );
};

export default ProductCard;