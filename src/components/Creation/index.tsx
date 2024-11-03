import clsx from "clsx";
import "./index.scss";

interface CreationProps extends React.ComponentPropsWithoutRef<"article"> {
    heading: string;
    image: string;
    isVertical?: boolean;
}

function Creation({
    heading,
    image,
    isVertical = false,
    ...rest
}: CreationProps) {
    const imagePath = [
        import.meta.env.BASE_URL,
        isVertical ? "desktop" : "mobile",
        image + ".jpg",
    ].join("/");

    const articleClassName = clsx(
        "creation",
        isVertical && "creation--vertical",
    );

    return (
        <article className={articleClassName} {...rest}>
            <img className="creation__image" src={imagePath} alt={heading} />
            <div className="creation__wrapper">
                <h3 className="creation__heading">{heading}</h3>
            </div>
        </article>
    );
}

export default Creation;
