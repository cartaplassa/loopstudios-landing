import cn from "@utils/cn";

interface _ImageProps extends React.ComponentPropsWithoutRef<"img"> {}

function _Image({src, alt}) {
    const className = cn(
        "object-contain max-w-full max-h-full",
        "ease-in-out duration-300",
        "group-hover:scale-105",
    );

    return <img className={className} src={src} alt={alt} />;
}

interface _WrapperProps extends React.ComponentPropsWithoutRef<"div"> {
    isVertical: boolean;
}

function _Wrapper({children, isVertical}: _WrapperProps) {
    const className = cn(
        "absolute bottom-0 w-full h-full",
        "text-[11cqw] p-5 custom-effect-tint-0",
        !isVertical && "text-[6cqw] p-4 custom-effect-tint-90",
        "ease-in-out duration-300",
        "group-hover:bg-white group-hover:bg-opacity-80",
    );

    return <div className={className}>{children}</div>;
}

interface _TitleProps extends React.ComponentPropsWithoutRef<"h3"> {
    content: string;
}

function _Title({content}: _TitleProps) {
    const className = cn(
        "absolute bottom-0 pb-[inherit] m-0 w-2/6",
        "text-white uppercase leading-none",
        "group-hover:text-black",
    );

    return <h3 className={className}>{content}</h3>;
}

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
    const className = cn(
        "@container group",
        "relative flex flex-col",
        "cursor-pointer overflow-hidden",
        "ease-in-out duration-300",
    );

    return (
        <article className={className} {...rest}>
            <_Image src={imagePath} alt={heading} />
            <_Wrapper isVertical={isVertical}>
                <_Title content={heading} />
            </_Wrapper>
        </article>
    );
}

export default Creation;
