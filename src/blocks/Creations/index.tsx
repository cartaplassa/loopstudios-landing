import "./index.scss";

import Creation from "@components/Creation";
import useMinWidth from "@hooks/useMinWidth";

import ImageMobileDeepEarth from "/mobile/image-deep-earth.jpg";
import ImageMobileNightArcade from "/mobile/image-night-arcade.jpg";
import ImageMobileSoccerTeam from "/mobile/image-soccer-team.jpg";
import ImageMobileGrid from "/mobile/image-grid.jpg";
import ImageMobileFromAbove from "/mobile/image-from-above.jpg";
import ImageMobilePocketBorealis from "/mobile/image-pocket-borealis.jpg";
import ImageMobileCuriosity from "/mobile/image-curiosity.jpg";
import ImageMobileFisheye from "/mobile/image-fisheye.jpg";

import ImageDesktopDeepEarth from "/desktop/image-deep-earth.jpg";
import ImageDesktopNightArcade from "/desktop/image-night-arcade.jpg";
import ImageDesktopSoccerTeam from "/desktop/image-soccer-team.jpg";
import ImageDesktopGrid from "/desktop/image-grid.jpg";
import ImageDesktopFromAbove from "/desktop/image-from-above.jpg";
import ImageDesktopPocketBorealis from "/desktop/image-pocket-borealis.jpg";
import ImageDesktopCuriosity from "/desktop/image-curiosity.jpg";
import ImageDesktopFisheye from "/desktop/image-fisheye.jpg";

const creations: Record<string, string[]> = {
    "Deep Earth": [ImageMobileDeepEarth, ImageDesktopDeepEarth],
    "Night Arcade": [ImageMobileNightArcade, ImageDesktopNightArcade],
    "Soccer Team\u00A0VR": [ImageMobileSoccerTeam, ImageDesktopSoccerTeam],
    "The Grid": [ImageMobileGrid, ImageDesktopGrid],
    "From\u00A0Up Above\u00A0VR": [ImageMobileFromAbove, ImageDesktopFromAbove],
    "Pocket Borealis": [ImageMobilePocketBorealis, ImageDesktopPocketBorealis],
    "The Curiosity": [ImageMobileCuriosity, ImageDesktopCuriosity],
    "Make\u00A0It Fisheye": [ImageMobileFisheye, ImageDesktopFisheye],
};

function Link() {
    return (
        <div className="see-all">
            <a className="see-all__link" href="#">
                See all
            </a>
        </div>
    );
}

function Creations({isDesktop}: {isDesktop: boolean}) {
    const isGrid = useMinWidth(600);

    return (
        <section className="creations">
            <div
                className={
                    "creations__header" +
                    (isDesktop ? " creations__header--desktop" : "")
                }>
                <h2 className="creations__heading">Our creations</h2>
                {isDesktop && <Link />}
            </div>
            <div
                className={
                    "creations__wrapper" +
                    (isGrid ? " creations__wrapper--grid" : "")
                }>
                {Object.keys(creations).map(item => (
                    <Creation
                        heading={item}
                        imgs={creations[item]}
                        isVertical={isGrid}
                        key={item}
                    />
                ))}
            </div>
            {!isDesktop && <Link />}
        </section>
    );
}

export default Creations;
