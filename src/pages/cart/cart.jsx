import React from "react";
import styles from "./cart.module.css"

const Cart = () => {
      return (
            <article className="">
                  <nav className={styles.navbar}>
                        <a href="/" className={styles.throwBackAnchor}>
                              <i class="ri-arrow-left-line"></i>
                              <span>Voltar</span>
                        </a>

                        <a href="/">
                              <img  className={styles.logo}
                              src="/images/Logo@1x_1.png" 
                              alt="Logo Emake" />
                        </a>
                  </nav>
                  
                  <div className={styles.timeline}>
                        {/*Timeline*/}
                  </div>

                  <section className={styles.cartSection}>
                        
                        <main>
                              <section className={styles.cart}>
                                    <i class="ri-shopping-bag-line"></i>
                                    <span>Sua sacola está vazia</span>
                                    <a href="/">Continuar comprando</a>
                              </section>
                        </main>

                        <aside className={styles.aside}>
                              <section className={styles.contact}>
                                    <span>Serviço ao cliente</span>

                                    <p>Serviço de atendimento ao consumidor Emake:</p>
                                    <p>WhatsApp <a href="https://w.app/QE7pj9" target="_blank" rel="noopener noreferrer">+55 11 99738-8538</a></p>
                                    <p className={styles.hour}>Segunda a sexta, exceto feriados 9h - 18h</p>
                              </section>

                              <section className={styles.servicos}>
                                    <div>
                                          <i class="ri-truck-line"></i>
                                          <p>Entregas na Grande São Paulo</p>
                                    </div>

                                    <div>
                                          <i class="ri-bank-card-line"></i>
                                          <p>Pague em até 3x</p>
                                    </div>

                                    <div> 
                                          <i class="ri-shield-check-line"></i>
                                          <p>Compra segura</p>
                                    </div>
                              </section>
                        </aside>
                  </section>

                  <footer className={styles.footer}>
                        <div>
                              <a href="/cart">Termos Gerais e Condições de Venda</a>
                        </div>
                        
                        <div>
                              <a href="/cart">Entregas na Grande São Paulo</a>
                        </div>
                        
                        <div>
                              <a href="/cart">Privacidade e Cookies</a>
                        </div>

                        <div>
                              <a href="/cart">Devoluções e Trocas</a>
                        </div>

                        <div className={styles.copyright}>
                              <p>&copy; Emake 2025. Todos os direitos reservados</p>                  
                        </div>
                  </footer>
            </article>
      );
};

export default Cart;