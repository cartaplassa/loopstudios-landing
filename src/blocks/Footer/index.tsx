import Nav from "@components/Nav";

import LogoImage from "/logo.svg";
import IconFacebook from "/icon-facebook.svg";
import IconTwitter from "/icon-twitter.svg";
import IconPinterest from "/icon-pinterest.svg";
import IconInstagram from "/icon-instagram.svg";
import {ReactNode} from "react";
import useMaxWidth from "@hooks/useMaxWidth";
import cn from "@utils/cn";

interface _LogoProps extends React.ComponentPropsWithoutRef<"img"> {}
function _Logo({...props}: _LogoProps) {
    return (
        <img
            className="w-fit mt-8 mr-0 mb-12 lg:m-0"
            src={LogoImage}
            alt="Loopstudios logo"
            {...props}
        />
    );
}

interface _CopyrightProps extends React.ComponentPropsWithoutRef<"p"> {}
function _Copyright({...props}: _CopyrightProps) {
    return (
        <p className="text-gray-500 my-4 lg:m-0" {...props}>
            © 2021 Loopstudios. All rights reserved.
        </p>
    );
}

interface _IconProps extends React.ComponentPropsWithoutRef<"a"> {
    src: string;
    alt: string;
}
function _Icon({href = "#", src, alt, ...props}: _IconProps) {
    return (
        <a href={href} className="custom-effect-underline">
            <img src={src} alt={alt} />
        </a>
    );
}

const icons: Record<string, string> = {
    Facebook: IconFacebook,
    Twitter: IconTwitter,
    Pinterest: IconPinterest,
    Instagram: IconInstagram,
};
interface _IconsProps extends React.ComponentPropsWithoutRef<"div"> {}
function _Icons({...props}: _IconsProps) {
    return (
        <div className="mt-10 space-x-4 lg:m-0" {...props}>
            {Object.keys(icons).map(el => (
                <_Icon src={icons[el]} alt={el} key={el} />
            ))}
        </div>
    );
}

function Footer() {
    const isMobile = useMaxWidth(1024);
    const className = cn(
        "bg-black flex flex-col",
        isMobile ? "items-center pb-12" : "items-stretch py-12 gap-8",
    );

    return isMobile ? (
        <footer className={className}>
            <_Logo />
            <Nav />
            <_Icons />
            <_Copyright />
        </footer>
    ) : (
        <footer className={className}>
            <div className="flex justify-between">
                <_Logo />
                <_Icons />
            </div>
            <div className="flex justify-between">
                <Nav />
                <_Copyright />
            </div>
        </footer>
    );
}

export default Footer;
