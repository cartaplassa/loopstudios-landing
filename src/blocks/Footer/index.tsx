import Nav from "@components/Nav";

import "./index.scss";
import LogoImage from "/logo.svg";
import IconFacebook from "/icon-facebook.svg";
import IconTwitter from "/icon-twitter.svg";
import IconPinterest from "/icon-pinterest.svg";
import IconInstagram from "/icon-instagram.svg";
import useMinWidth from "@hooks/useMinWidth";

const Logo = () => (
    <img className="footer__logo" src={LogoImage} alt="Loopstudios logo" />
);
const Copyright = () => (
    <p className="footer__copyright">
        © 2021 Loopstudios. All rights reserved.
    </p>
);
const Icons = () => (
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
);

function Footer() {
    const isDesktop = useMinWidth(1000);

    return !isDesktop ? (
        <footer className="footer">
            <Logo />
            <Nav />
            <Icons />
            <Copyright />
        </footer>
    ) : (
        <footer className="footer footer--desktop">
            <div className="footer__flex">
                <Logo />
                <Icons />
            </div>
            <div className="footer__flex">
                <Nav />
                <Copyright />
            </div>
        </footer>
    );
}

export default Footer;
