import React from "react";
import Styles from "./navbar.module.css"

const Navbar = () => {
      return (
            <header className={Styles.header}>
                  <nav className={Styles.navbar}>
                        <ul>
                              <li>Início</li>
                              <li>Hidratação e Cuidados</li>
                              <li>Maquiagem</li>
                              <li>Acessórios</li>
                        </ul>

                        <div className={Styles.institutional}>
                        <a href="#">Conta</a>
                        <a href="#">Fale conosco</a>
                        </div>
                  </nav>

                  <div className={Styles.search}>

                        <a href="#" id="magnifyingGlass"><i class="ri-search-2-line"></i></a>
                        <input type="text" id="magnifyingGlassInput" placeholder="Pesquisar" />
                  </div>

                  <a href="/">
                        <img 
                        className={Styles.logo}
                        src="/images/Logo@1x_1.png" 
                        alt="Logo Emake"/></a>
                  
                  <div className={Styles.ulBarIcons}>
                        <a href="/conta">
                              <i class="ri-user-line"></i>
                              <span>Conta</span>
                        </a>
                        <a href="/sacola">
                              <i class="ri-shopping-bag-line"></i>
                              <span>Sacola</span>
                        </a>
                  </div>
            </header>
      )
};

export default Navbar;