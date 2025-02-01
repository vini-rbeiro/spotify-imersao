import React from "react";
import "./Sidebar.css";
import logoSpotify from "../assets/icons/logo-spotify.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar_navigation">
        <div className="logo">
          <a href="">
            <img src={logoSpotify} alt="Logo do Spotify" />
          </a>
        </div>
        <div>
          <ul>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faHome} className="icon-home" />
                <span>Início</span>
              </a>
            </li>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faSearch} className="icon-search" />
                <span>Buscar</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="library">
        <div className="library_content">
          <button>
            <FontAwesomeIcon icon={faBook} className="icon-book" />
            <span>Sua biblioteca</span>
          </button>
          <FontAwesomeIcon icon={faPlus} className="icon-plus" />
        </div>

        <section className="section-playlist">
          <div className="section-playlist_content">
            <p className="section-playlist_content_title">
              Crie sua primeira playlist
            </p>
            <p className="section-playlist_content_subtitle">
              É fácil, vamos te ajudar.
            </p>
          </div>

          <button className="section-playlist_button">Criar playlist</button>
        </section>

        <a href="" className="library_cookies">
          Cookies
        </a>

        <button className="languages">
          <FontAwesomeIcon icon={faGlobe} className="icon-globe" />

          <p>Português do Brasil</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
