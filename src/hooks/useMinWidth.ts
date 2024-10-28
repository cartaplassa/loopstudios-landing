import { useMediaQuery } from "react-responsive";

export default function useMinWidth(width) {
    return useMediaQuery({query: `(min-width: ${width}px)`})
}