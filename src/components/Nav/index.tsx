import "./index.scss";
import cn from "@utils/cn";

interface NavProps extends React.ComponentPropsWithoutRef<"nav"> {
    aligned?: boolean;
}

function Nav({className, aligned, ...rest}: NavProps) {
    return (
        <nav
            className={cn(
                "flex flex-col items-center",
                "lg:flex-row lg:gap-8",
                aligned && "items-start justify-center flex-grow",
            )}
            {...rest}>
            {["About", "Careers", "Events", "Products", "Support"].map(el => (
                <a
                    href="#"
                    className={cn(
                        "text-[color:--color-white] mb-4",
                        "visited:text-[color:--color-white] visited:mb-4",
                        "lg:mb-0 lg:visited:mb-0",
                        aligned && "uppercase text-3xl josefin",
                        "custom-effect-underlined",
                    )}
                    key={el}>
                    {el}
                </a>
            ))}
        </nav>
    );
}

export default Nav;
