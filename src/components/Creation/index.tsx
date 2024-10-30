import "./index.scss";

function Creation({
    heading,
    imgs,
    isVertical,
}: {
    heading: string;
    imgs: string[];
    isVertical: boolean;
}) {
    return (
        <article
            className={"creation" + (isVertical ? " creation--vertical" : "")}>
            <img
                className="creation__image"
                src={imgs[isVertical ? 1 : 0]}
                alt={heading}
            />
            <div className="creation__wrapper">
                <h3 className={"creation__heading"}>{heading}</h3>
            </div>
        </article>
    );
}

export default Creation;
