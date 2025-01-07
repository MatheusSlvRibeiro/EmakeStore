import React from "react";
import styles from "./product.module.css"

import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"

const Product = () => {
      return(
            <article>
                  <Navbar />
                        <section>
                              <main>
                                    <img src= alt="" />
                              </main>
                              
                              <aside>
                              </aside>
                        </section>
                  <Footer />
            </article>
      );
};

export default Product;
