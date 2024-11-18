import type {Config} from "tailwindcss";
import plugin from "tailwindcss";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            white: "hsl(0, 0%, 100%)",
            black: "hsl(0, 0%, 0%)",
            gray: {
                400: "hsl(0, 0%, 55%)",
                500: "hsl(0, 0%, 41%)",
            },
        },
        extend: {
            boxShadow: {
                inset: "inset 0 0 0 50cqi rgba(0,0,0,.4)",
            },
            fontFamily: {
                default: ["Alata", "sans-serif"],
                heading: ["Josefin Sans", "sans-serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/container-queries")],
} satisfies Config;
