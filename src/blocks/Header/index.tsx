import {useState} from "react";
import cn from "@utils/cn";

import Logo from "/logo.svg";
import Menu from "/icon-hamburger.svg";
import Close from "/icon-close.svg";
import Nav from "@components/Nav";
import useMinWidth from "@hooks/useMinWidth";

interface _MottoProps extends React.ComponentPropsWithoutRef<"div"> {}
function _Motto({...props}: _MottoProps) {
    const wrapperClassName =
        "flex-grow flex flex-col justify-center align-start lg:py-48";
    const mottoClassName = cn(
        "uppercase text-white text-[calc(15cqi-1rem)] leading-none",
        "p-6 pb-4 border-2 border-white",
        "lg:text-7xl lg:max-w-xl",
    );

    return (
        <div className={wrapperClassName}>
            <h2 className={mottoClassName}>
                Immersive experiences that deliver
            </h2>
        </div>
    );
}

function Header() {
    const isDesktop = useMinWidth(1000);
    const [isNavVisible, setNavVisible] = useState(false);
    const toggleNavVisible = () => setNavVisible(!isNavVisible);
    const className = cn(
        "h-[100dvh] bg-black shadow-inset",
        "bg-[url('/mobile/image-hero.jpg')] bg-center bg-cover",
        "sm:bg-[url('/desktop/image-hero.jpg')] lg:h-auto",
        "flex flex-col box-border",
        "ease-in-out duration-300",
        isNavVisible && "bg-none",
    );

    return (
        <div className={className}>
            <header className="flex justify-between items-center">
                <img src={Logo} alt="Loopstudios logo" />
                {!isDesktop ? (
                    <img
                        src={isNavVisible ? Close : Menu}
                        alt="Menu"
                        onClick={toggleNavVisible}
                    />
                ) : (
                    <Nav />
                )}
            </header>
            {isDesktop ? (
                <_Motto />
            ) : isNavVisible ? (
                <Nav aligned />
            ) : (
                <_Motto />
            )}
        </div>
    );
}

export default Header;
