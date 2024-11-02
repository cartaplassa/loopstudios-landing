import {useState} from "react";

import "./index.scss";
import Logo from "/logo.svg";
import Menu from "/icon-hamburger.svg";
import Close from "/icon-close.svg";
import Nav from "@components/Nav";
import useMinWidth from "@hooks/useMinWidth";

const Motto = () => (
    <div className="start__wrapper">
        <h2 className="start__motto">Immersive experiences that deliver</h2>
    </div>
);

function Header() {
    const isDesktop = useMinWidth(1000);
    const [isNavVisible, setNavVisible] = useState(false);
    const toggleNavVisible = () => setNavVisible(!isNavVisible);

    return (
        <div className={"start" + (isNavVisible ? " start--black" : "")}>
            <header className="header">
                <img src={Logo} alt="Loopstudios logo" />
                {!isDesktop ? (
                    <img
                        src={isNavVisible ? Close : Menu}
                        alt="Menu"
                        onClick={toggleNavVisible}
                    />
                ) : (
                    <Nav className="start__nav" />
                )}
            </header>
            {isDesktop ? (
                <Motto />
            ) : isNavVisible ? (
                <Nav className="start__nav nav--aligned josefin" />
            ) : (
                <Motto />
            )}
        </div>
    );
}

export default Header;
