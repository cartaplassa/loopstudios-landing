import "./index.scss";

import {useMediaQuery} from "react-responsive";

import Creation from "@components/Creation";

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
    "Soccer Team VR": [ImageMobileSoccerTeam, ImageDesktopSoccerTeam],
    "The Grid": [ImageMobileGrid, ImageDesktopGrid],
    "From Up Above VR": [ImageMobileFromAbove, ImageDesktopFromAbove],
    "Pocket Borealis": [ImageMobilePocketBorealis, ImageDesktopPocketBorealis],
    "The Curiosity": [ImageMobileCuriosity, ImageDesktopCuriosity],
    "Make It Fisheye": [ImageMobileFisheye, ImageDesktopFisheye],
};

function Creations() {
    const isDesktop = useMediaQuery({query: "(min-width: 800px)"});

    return (
        <section className="creations">
            <h2 className="creations__heading">Our creations</h2>
            <div className="creations__wrapper">
                {Object.keys(creations).map(item => (
                    <Creation
                        heading={item}
                        img={
                            isDesktop ? creations[item][1] : creations[item][0]
                        }
                        key={item}
                    />
                ))}
            </div>
            <div className="creations__link-wrapper">
                <a className="creations__link" href="#">
                    See all
                </a>
            </div>
        </section>
    );
}

export default Creations;
