import React from 'react';
import footerStyles from "./Footer.module.css"

const Footer = () => (
    <footer className={footerStyles.footer}>
        <div className="container">
            <span className="text-dark">© Ana Leal 2020</span>
        </div>
    </footer>
);

export default Footer;