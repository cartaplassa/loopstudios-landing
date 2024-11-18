import cn from "@utils/cn";

interface NavLinkProps extends React.ComponentPropsWithoutRef<"a"> {
    text: string;
    aligned?: boolean;
}

function NavLink({href, text, aligned = false}) {
    const className = cn(
        "text-white mb-4",
        "visited:text-white visited:mb-4",
        "lg:mb-0 lg:visited:mb-0",
        aligned && "uppercase text-3xl font-heading",
        "custom-effect-underline",
    );
    return (
        <a href={href} className={className}>
            {text}
        </a>
    );
}

interface NavProps extends React.ComponentPropsWithoutRef<"nav"> {
    aligned?: boolean;
}

const links = ["About", "Careers", "Events", "Products", "Support"];
function Nav({aligned = false, ...rest}: NavProps) {
    const className = cn(
        "flex flex-col items-center",
        "lg:flex-row lg:gap-8 lg:mt-0",
        aligned && "items-start justify-center flex-grow mt-8",
    );
    return (
        <nav className={className} {...rest}>
            {links.map(el => (
                <NavLink href="#" text={el} aligned={aligned} key={el} />
            ))}
        </nav>
    );
}

export default Nav;
