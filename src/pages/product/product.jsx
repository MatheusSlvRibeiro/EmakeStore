import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./product.module.css"

import productsData from "../../data/latestReleases.json"
import ProductCard from "../../components/productCard/productCard";

import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"

const Product = () => {
      const { cod } = useParams();
      const [ product, setProduct ] = useState(null);
      const [ loading, setLoading ] = useState(true);

      useEffect(() => {
            const productData = productsData.products.find((item) => item.cod === cod);
            setProduct(productData)
            setLoading(false)
      }, [cod]);

      if (loading){
            return <p>Carregando...</p>
      }

      if (!product) {
            return <p>Produto não encontrado.</p>
      }

      return(
            <article>
                  <Navbar />
                        <section className={styles.productSection}>
                              <main>
                                    <img 
                                          className={styles.productImage}
                                          src={product.img} 
                                          alt={product.alt} />

                                    <section>
                                    </section>
                              </main>
                              
                              <aside className={styles.aside}>
                                    <div className={styles.asideInfo}>
                                          <span className={styles.productTitle}>{product.name}</span>
                                          <span className={styles.productBrand}>{product.brand}</span>
                                          <h3 className={styles.productPrice}>R$ {product.price}</h3>
                                    </div>

                                    <p className={styles.productDescription}>{product.description}</p>

                                    <div className={styles.buttons}>
                                          <button className={styles.favButton}>
                                                <i className="ri-heart-line"></i>
                                          </button>
                                          
                                          <button className={styles.buyButton}>
                                                <i className="ri-shopping-bag-line"></i>
                                                Adicionar à sacola
                                          </button>
                                    </div>

                                    <div className={styles.socialIcons}>
                                          <p>Curtiu? Compartilhe!</p>
                                          <i class="ri-instagram-line"></i>
                                          <i class="ri-facebook-line"></i>
                                          <i class="ri-twitter-line"></i>
                                          <i class="ri-whatsapp-line"></i>
                                    </div>
                              </aside>

                        </section>
                  
                        <ProductCard produtos="lancamentos"/>


                  <Footer />
            </article>
      );
};

export default Product;
