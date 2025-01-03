import React, { useState } from "react";
import Styles from "./navbar.module.css"

const Navbar = () => {
      const [menuOpen, setMenuOpen] = useState(false);
      
      const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
      
      return (
            <header className={Styles.header}>

                  <div 
                        className={Styles.menuIcon}
                        onClick={toggleMenu}>
                        <i class="ri-menu-line"></i> <span>Menu</span>
                  
                        <div className={Styles.search}>
                              <a href="/" id="magnifyingGlass"><i class="ri-search-2-line"></i></a>
                              <input type="text" id="magnifyingGlassInput" placeholder="Pesquisar" />
                        </div>

                  </div>

                  

                  <nav className={Styles.navbar}>
                        <span>Menu</span>
                        
                        <ul className={Styles.menu}>
                              <li><a href="/">Hidratação e Cuidados</a></li>
                              <li><a href="/">Maquiagem</a></li>
                              <li><a href="/">Acessórios</a></li>
                        </ul>

                        <div className={Styles.institutional}>
                              <a href="/cart"><i class="ri-user-line"></i>
      Conta</a>
                              <a href="/contato"><i class="ri-chat-1-line"></i>Fale conosco</a>
                        </div>
                  </nav>

                  <a href="/">
                        <img 
                        className={Styles.logo}
                        src="/images/Logo@1x_1.png" 
                        alt="Logo Emake"/></a>
                  
                  <div className={Styles.ulBarIcons}>
                        <a href="/account">
                              <i class="ri-user-line"></i>
                              <span>Conta</span>
                        </a>
                        <a href="/cart">
                              <i class="ri-shopping-bag-line"></i>
                              <span>Sacola</span>
                        </a>
                  </div>
            </header>
      )
};

export default Navbar;