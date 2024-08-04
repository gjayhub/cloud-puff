import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        roboto: ["var(--font-roboto)"],
        permanent_marker: ["var(--font-permanent_marker)"],
      },
      fontSize: {
        header: "clamp(15px, 15vw, 80px)",
        "sub-header": "clamp(1.2rem, 2vw, 2.5rem)",
      },
      textColor: {},
      colors: {
        "primary-text": "#eee",
      },
    },
  },
  plugins: [],
};
export default config;
