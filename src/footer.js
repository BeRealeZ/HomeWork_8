import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="info-1">
        <h2>Контакты</h2>
        <p>Адрес: ваш адрес</p>
        <p>Email: ваш email</p>
      </div>
      <div className="info-2"> 
        <h2>Социальные сети</h2>
        <a  href="https://www.youtube.com/">Youtube</a>
        <a  href="https://twitter.com/?lang=ru">Twitter</a>
        <a  href="https://www.instagram.com/">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
