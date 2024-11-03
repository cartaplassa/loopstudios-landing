import clsx from "clsx";

import "./index.scss";

import Creation from "@components/Creation";
import useMinWidth from "@hooks/useMinWidth";

const creations: Record<string, string> = {
    "Deep Earth": "image-deep-earth",
    "Night Arcade": "image-night-arcade",
    "Soccer Team\u00A0VR": "image-soccer-team",
    "The Grid": "image-grid",
    "From\u00A0Up Above\u00A0VR": "image-from-above",
    "Pocket Borealis": "image-pocket-borealis",
    "The Curiosity": "image-curiosity",
    "Make\u00A0It Fisheye": "image-fisheye",
};

function SeeAll() {
    return (
        <div className="see-all">
            <a className="see-all__link" href="#">
                See all
            </a>
        </div>
    );
}

interface CreationsProps extends React.ComponentPropsWithoutRef<"section"> {
    isDesktop?: boolean;
}

function Creations({isDesktop = false, ...rest}: CreationsProps) {
    const isGrid = useMinWidth(600);
    const sectionClassName = clsx(
        "creations",
        isDesktop && "creations--desktop",
    );
    const headerClassName = clsx(
        "creations__header",
        isDesktop && "creations__header--desktop",
    );
    const wrapperClassName = clsx(
        "creations__wrapper",
        isGrid && "creations__wrapper--grid",
    );

    return (
        <section className={sectionClassName} {...rest}>
            <div className={headerClassName}>
                <h2 className="creations__heading">Our creations</h2>
                {isDesktop && <SeeAll />}
            </div>
            <div className={wrapperClassName}>
                {Object.keys(creations).map(item => (
                    <Creation
                        heading={item}
                        image={creations[item]}
                        isVertical={isGrid}
                        key={item}
                    />
                ))}
            </div>
            {!isDesktop && <SeeAll />}
        </section>
    );
}

export default Creations;
