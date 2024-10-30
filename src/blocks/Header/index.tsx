import {Collapse} from "react-collapse";
import {useState} from "react";

import "./index.scss";
import Logo from "/logo.svg";
import Menu from "/icon-hamburger.svg";
import Nav from "@components/Nav";
import useMinWidth from "@hooks/useMinWidth";

function Header() {
    const isDesktop = useMinWidth(1000);
    const [isNavVisible, setNavVisible] = useState(false);
    const toggleNavVisible = () => setNavVisible(!isNavVisible);

    return (
        <div className="start">
            <header className="header">
                <img src={Logo} alt="Loopstudios logo" />
                {!isDesktop ? (
                    <img src={Menu} alt="Menu" onClick={toggleNavVisible} />
                ) : (
                    <Nav className="start__nav" />
                )}
            </header>
            {!isDesktop && (
                <Collapse isOpened={isNavVisible}>
                    <Nav className="start__nav" />
                </Collapse>
            )}
            <div className="start__wrapper">
                <h2 className="start__motto">
                    Immersive experiences that deliver
                </h2>
            </div>
        </div>
    );
}

export default Header;
