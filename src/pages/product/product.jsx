import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./product.module.css"

import lancamentos from "../../data/latestReleases.json"
import maquiagem from "../../data/maquiagem.json"
import hidratacao from "../../data/hidratacao.json"

import ProductCard from "../../components/productCard/productCard";

import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"

const Product = () => {
      const { cod, category } = useParams();
      const [ product, setProduct ] = useState(null);
      const [ loading, setLoading ] = useState(true);

      const productData = {
              lancamentos,
              maquiagem,
              hidratacao,
            };

      useEffect(() => {
            const products = productData[category]?.products || [];
            const foundProduct = products.find((item) => item.cod === cod);
            setProduct(foundProduct || null);
            setLoading(false);
      }, [category, cod]);

      const formatPrice = (price) => price.toFixed(2).replace(".", ",");


      if (loading){
            return <p>Carregando...</p>
      }

      if (!product) {
            return <article className={styles.undefinedProduct}>
                        <p>Produto não encontrado.</p>
                        <a
                        href="/" 
                        className={styles.throwBack}>Voltar</a>
                  </article>

      }

      const productUrl = `${window.location.origin}/produtos/${category}/${product.cod}`;

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
                                          <h3 className={styles.productPrice}>R$ {formatPrice(product.price)}</h3>
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
                                          <a 
                                                href={`https://wa.me/?text=${encodeURIComponent(`Confira este produto incrível: ${product.name}\n${productUrl}`)}`} 
                                                target="_blank" 
                                                rel="noopener noreferrer">
                                                <i class="ri-whatsapp-line"></i>
                                          </a>

                                          <a 
                                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`Confira este produto incrível: ${product.name}\n${productUrl}`)}`} target="_blank" 
                                                rel="noopener noreferrer">
                                                <i class="ri-facebook-line"></i>
                                          </a>

                                          <a 
                                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Confira este produto incrível: ${product.name}`)}&url=${encodeURIComponent(productUrl)}`} 
                                                target="_blank" 
                                                rel="noopener noreferrer">
                                                <i class="ri-twitter-line"></i>
                                          </a>
                                    </div>
                              </aside>

                        </section>
                  
                        <ProductCard produtos="lancamentos"/>


                  <Footer />
            </article>
      );
};

export default Product;
