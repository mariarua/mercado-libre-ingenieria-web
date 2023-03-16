/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        desktop: "1200px",
      },
      colors: {
        primary: "#FFF158",
        homepage: "#EBEBEB",
        link: "#3483FA",
        offers: "#00A650",
      },
      boxShadow: {
        narrow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
        extranarrow: "0px 1px 1px rgba(0, 0, 0, 0.1)",
        m: "0 2px 15px 0 rgb(0 0 0 / 10%)",
      },
      backgroundImage: {
        susbcribe: "linear-gradient(90deg,#a90f90 55%,#0c1a51)",
      },
    },
  },
  plugins: [],
};
