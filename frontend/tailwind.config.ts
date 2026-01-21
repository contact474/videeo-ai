import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            keyframes: {
                marquee: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(calc(-100% - var(--gap)))' },
                },
                'marquee-reverse': {
                    from: { transform: 'translateX(calc(-100% - var(--gap)))' },
                    to: { transform: 'translateX(0)' },
                },
            },
            animation: {
                marquee: 'marquee var(--duration) linear infinite',
                'marquee-reverse': 'marquee-reverse var(--duration) linear infinite',
            },
        },
    },
    plugins: [],
};
export default config;
