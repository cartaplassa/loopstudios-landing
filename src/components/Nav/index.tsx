import clsx from "clsx";
import "./index.scss";

function Nav({className, ...rest}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <nav className={clsx("nav", className)} {...rest}>
            {["About", "Careers", "Events", "Products", "Support"].map(el => (
                <a href="#" className="nav__link underlined" key={el}>
                    {el}
                </a>
            ))}
        </nav>
    );
}

export default Nav;
