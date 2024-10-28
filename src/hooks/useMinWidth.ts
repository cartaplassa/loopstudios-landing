import { useMediaQuery } from "react-responsive";

export default function useMinWidth(width: number) {
    return useMediaQuery({query: `(min-width: ${width}px)`})
}