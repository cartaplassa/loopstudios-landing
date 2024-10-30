import Nav from "@components/Nav";

import "./index.scss";
import Logo from "/logo.svg";
import IconFacebook from "/icon-facebook.svg";
import IconTwitter from "/icon-twitter.svg";
import IconPinterest from "/icon-pinterest.svg";
import IconInstagram from "/icon-instagram.svg";

function Footer() {
    return (
        <footer className="footer">
            <img className="footer__logo" src={Logo} alt="Loopstudios logo" />
            <Nav />
            <div className="footer__icon-wrapper">
                <a href="#" className="footer__icon-link">
                    <img src={IconFacebook} alt="Facebook" />
                </a>
                <a href="#" className="footer__icon-link">
                    <img src={IconTwitter} alt="Twitter" />
                </a>
                <a href="#" className="footer__icon-link">
                    <img src={IconPinterest} alt="Pinterest" />
                </a>
                <a href="#" className="footer__icon-link">
                    <img src={IconInstagram} alt="Instagram" />
                </a>
            </div>
            <p className="footer__copyright">
                © 2021 Loopstudios. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
