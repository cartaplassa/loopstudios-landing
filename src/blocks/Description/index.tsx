import cn from "@utils/cn";

import ImageVRSetMobile from "/mobile/image-interactive.jpg"; // WARN
import ImageVRSetDesktop from "/desktop/image-interactive.jpg";

function Description() {
    return (
        <section className="text-center pt-28 pb-8 xl:text-left xl:my-0 xl:mx-auto xl:max-w-6xl xl:px-0">
            <div className="xl:relative min-h-[30rem]">
                <img
                    className="inline max-w-full xl:absolute xl:top-0 xl:left-0"
                    src={ImageVRSetMobile}
                    alt="VR set"
                />
                <div
                    className={cn(
                        "bg-white xl:absolute xl:right-0 xl:bottom-0",
                        "xl:max-w-[35em] xl:pt-24 xl:pl-24",
                    )}>
                    <h2 className="text-3xl my-7 lg:text-5xl lg:my-12 xl:mt-0">
                        The&nbsp;leader&nbsp;in interactive&nbsp;VR
                    </h2>
                    <p className="px-4 text-gray-400 leading-7 xl:p-0 xl:m-0">
                        Founded in 2011, Loopstudios has been producing
                        world-class virtual reality projects for some of the
                        best companies around the globe. Our award-winning
                        creations have transformed businesses through digital
                        experiences that bind to their brand.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Description;
