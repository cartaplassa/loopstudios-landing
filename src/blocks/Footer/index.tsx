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

const icons: Record<string, string> = {
    Facebook: IconFacebook,
    Twitter: IconTwitter,
    Pinterest: IconPinterest,
    Instagram: IconInstagram,
};
const Icons = () => (
    <div className="footer__icon-wrapper">
        {Object.keys(icons).map(el => (
            <a
                href="#"
                className="footer__icon-link custom-effect-underlined"
                key={el}>
                <img src={icons[el]} alt={el} />
            </a>
        ))}
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
