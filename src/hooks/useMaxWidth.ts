import { useMediaQuery } from "react-responsive";

export default function useMaxWidth(width) {
    return useMediaQuery({query: `(max-width: ${width}px)`})
}