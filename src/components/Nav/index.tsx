import "./index.scss";

function Nav({className}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <nav className={"nav" + (className ? " " + className : "")}>
            {["About", "Careers", "Events", "Products", "Support"].map(el => (
                <a href="#" className="nav__link underlined" key={el}>
                    {el}
                </a>
            ))}
        </nav>
    );
}

export default Nav;
