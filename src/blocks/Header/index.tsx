import {useState} from "react";

import "./index.scss";
import Logo from "/logo.svg";
import Menu from "/icon-hamburger.svg";
import Close from "/icon-close.svg";
import Nav from "@components/Nav";
import useMinWidth from "@hooks/useMinWidth";
import clsx from "clsx";

const Motto = () => (
    <div className="start__wrapper">
        <h2 className="start__motto">Immersive experiences that deliver</h2>
    </div>
);

function Header() {
    const isDesktop = useMinWidth(1000);
    const [isNavVisible, setNavVisible] = useState(false);
    const toggleNavVisible = () => setNavVisible(!isNavVisible);
    const rootClassName = clsx("start", isNavVisible && "start--black");

    return (
        <div className={rootClassName}>
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
                <Nav aligned className="start__nav josefin" />
            ) : (
                <Motto />
            )}
        </div>
    );
}

export default Header;
