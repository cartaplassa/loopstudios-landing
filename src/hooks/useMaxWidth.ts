import { useMediaQuery } from "react-responsive";

export default function useMaxWidth(width: number) {
    return useMediaQuery({query: `(max-width: ${width}px)`})
}