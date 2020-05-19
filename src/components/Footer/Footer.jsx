import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <React.Fragment>
    <div className="footer__container">
      <div className="footer__featured">
        <h3 className="footer__title">DESTAQUE</h3>
          <ul className="footer__list">
            <li>Mais vendidos</li>
            <li>Novidades</li>
            <li>Ofertas</li>
            <li>Collection</li>
          </ul>
      </div>

      <div className="footer__services">
        <h3 className="foote__title">SERVIÇOS</h3>
          <ul className="footer__list">
            <li>Atendimento</li>
            <li>Meus Pedidos</li>
            <li>Minha Conta</li>
            <li>Nossas Lojas</li>
          </ul>
        </div>

        <div className="footer__institutional">
        <h3 className="foote__title">INSTITUCIONAL</h3>
          <ul className="footer__list">
            <li>Sobre Nós</li>
            <li>Segurança</li>
            <li>Política de Privacidade</li>
            <li>Trocas e Devoluções</li>
          </ul>
        </div>

        <div className="footer__social">
          <h3 className="footer__title">MÍDIAS SOCIAIS</h3>
          <ul className="footer__LIST">
            <p className="footer__icon"><ion-icon name="logo-facebook"></ion-icon></p>
            <p className="footer__icon"><ion-icon name="logo-instagram"></ion-icon></p>
            <p className="footer__icon"><ion-icon name="logo-twitter"></ion-icon></p>
          </ul>
        </div>
      </div>
      <div className="footer__info">
        <p>Produzido com <ion-icon name="heart-outline"></ion-icon> por Squad 2 - AceleraDev</p>
      </div>
      </React.Fragment>
  )
}

export default Footer;
