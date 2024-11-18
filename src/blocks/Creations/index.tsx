import Creation from "@components/Creation";
import useMinWidth from "@hooks/useMinWidth";
import cn from "@utils/cn";

interface _SeeAllProps extends React.ComponentPropsWithoutRef<"div"> {}

function _SeeAll({...props}: _SeeAllProps) {
    const className = cn(
        "text-black uppercase tracking-[.3em]",
        "border-2 border-black",
        "py-3 px-10 mb-16 h-[fit-content]",
        "hover:bg-black hover:text-white",
        "ease-in-out duration-200",
    );
    return (
        <div className="flex justify-center mt-8" {...props}>
            <a className={className} href="#">
                See all
            </a>
        </div>
    );
}

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

interface CreationsProps extends React.ComponentPropsWithoutRef<"section"> {
    isDesktop?: boolean;
}

function Creations({isDesktop = false, ...rest}: CreationsProps) {
    const isGrid = useMinWidth(640);

    return (
        <section className="lg:pb-48 my-0 mx-auto max-w-6xl xl:px-0" {...rest}>
            <div className="flex justify-around items-center lg:justify-between">
                <h2 className="text-3xl lg:text-5xl leading-none text-center mb-6">
                    Our creations
                </h2>
                {isDesktop && <_SeeAll />}
            </div>
            <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 md:grid-cols-4">
                {Object.keys(creations).map(item => (
                    <Creation
                        heading={item}
                        image={creations[item]}
                        isVertical={isGrid}
                        key={item}
                    />
                ))}
            </div>
            {!isDesktop && <_SeeAll />}
        </section>
    );
}

export default Creations;
