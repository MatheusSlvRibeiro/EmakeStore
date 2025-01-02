import React, { useState } from "react"
import styles from "./footer.module.css"

const Footer = () => {
      
      return (
            <footer className={styles.footerContainer}>
                  <div className={styles.footerTop}>
                        <div className={styles.contact}>
                              <span className={styles.title}>Serviço ao cliente</span>
                              <p>Serviço de atendimento ao consumidor Emake:</p>
                              <p>WhatsApp <a href="+55 11 91234-5678">+55 11 91234-5678</a></p>
                              <p>Segunda a sexta, exceto feriados 9h - 18h</p>
                        </div>

                        <div className={styles.newsletter}>
                                    <span className={styles.title}>Newsletter</span>
                                    <p>Receba nossa newsletter e conheça coleções e surpresas</p>
                                    
                                    <button type="subtmit">Inscreva-se</button>
                              
                        </div>

                        <div className={styles.socialMedia}>
                              
                              <span className={styles.title}>Siga-nos</span>

                              <div className={styles.socialMediaIcons}>
                                    <a href="https://www.instagram.com/emakeloja/">
                                          <i class="ri-instagram-line"></i>
                                    </a>

                                    <a href="https://www.facebook.com/">
                                          <i class="ri-facebook-line"></i>
                                    </a>
                                    
                                    <a href="https://x.com/?lang=en&mx=2">
                                          <i class="ri-twitter-line"></i>
                                    </a>
                              </div>
                        </div>
                  </div>

                  <div className={styles.footerBottom}>
                        <p>&copy; Emake 2025. Todos os direitos reservados</p>                  
                  </div>
            </footer>
      );
};

export default Footer;