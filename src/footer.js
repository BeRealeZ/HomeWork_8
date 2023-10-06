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
        <a className="logo" href="https://www.youtube.com/">
          <img
            src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"
            alt=""
          />Youtube
        </a>
        <a className="logo" href="https://twitter.com/?lang=ru">
          <img
            src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-05-512.png"
            alt=""
          />Twitter
        </a>
        <a className="logo" href="https://www.instagram.com/">
          <img
            src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-03-256.png"
            alt=""
          />Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
