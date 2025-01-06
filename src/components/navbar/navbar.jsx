import React, { useEffect, useRef } from "react";
import Styles from "./navbar.module.css"

const Navbar = () => {
      
      const menuSideRef = useRef(null);

      useEffect(() => {
            const menuSide = menuSideRef.current;

            if (!menuSide) return;

            const handleOpenMenu = () => {
                  menuSide.classList.toggle(Styles.open);
            };

            const buttonExpand = document.querySelector(`.${Styles.menuIcon} i`);
            const buttonClose = menuSide.querySelector(`.${Styles.menuTitle} i`);

            if (buttonExpand) buttonExpand.addEventListener("click", handleOpenMenu);
            if (buttonClose) buttonClose.addEventListener("click", handleOpenMenu);
            
            return() => {
                  if (buttonExpand) buttonExpand.removeEventListener("click", handleOpenMenu);
                  if (buttonClose) buttonClose.removeEventListener("click", handleOpenMenu);
            };
      }, []);
      
      return (
            <header className={Styles.header}>
                  <div className={Styles.menuIcon}>
                        <i className="ri-menu-line"></i> <span>Menu</span>
                  
                        <div className={Styles.search}>
                              <a href="/" id="magnifyingGlass"><i class="ri-search-2-line"></i></a>
                              <input type="text" id="magnifyingGlassInput" placeholder="Buscar produtos" />
                        </div>

                  </div>

                  

                  <nav className={Styles.navbar}>
                        <div className={Styles.menuTitle}>
                              <span>Menu </span>
                              <i className="ri-close-line"></i>
                        </div>

                        <ul className={Styles.menu}>
                              <li><a href="/">Hidratação e Cuidados</a></li>
                              <li><a href="/">Maquiagem</a></li>
                              <li><a href="/">Acessórios</a></li>
                        </ul>

                        <div className={Styles.institutional}>
                              <a href="/account"><i class="ri-user-line"></i>
      Conta</a>
                              <a href="/contact"><i class="ri-chat-1-line"></i>Fale conosco</a>
                        </div>
                  </nav>

                  <a href="/">
                        <img 
                        className={Styles.logo}
                        src="/images/Logo@1x_1.png" 
                        alt="Logo Emake"/></a>
                  
                  <div className={Styles.ulBarIcons}>
                        <a href="/account">
                              <i className="ri-user-line"></i>
                              <span>Conta</span>
                        </a>
                        <a href="/cart">
                              <i className="ri-shopping-bag-line"></i>
                              <span>Sacola</span>
                        </a>
                  </div>
            </header>
      )
};

export default Navbar;