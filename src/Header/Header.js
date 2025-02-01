import React from "react";
import "./Header.css";
import smallLeft from "../assets/icons/small-left.png";
import smallRight from "../assets/icons/small-right.png";
import search from "../assets/icons/search.png";

const Header = () => {
  return (
    <div class="main-container">
      <nav className="header__navigation">
        <div className="navigation">
          <button className="arrow-left">
            <img src={smallLeft} alt="Seta esquerda" />
          </button>
          <button className="arrow-right">
            <img src={smallRight} alt="Seta direita" />
          </button>
        </div>
        <div className="header__search">
          <img src={search} alt="Buscar" />
          <input
            id="search-input"
            maxLength="800"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            placeholder="O que você quer ouvir?"
          />
        </div>
        <div className="header__login">
          <button className="subscribe">Inscreva-se</button>
          <button className="login">Entrar</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
