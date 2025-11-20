/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                mainBeige: "#b7a696",
                strongBeige: "#846c5b",
                faintBeige: "#F0ECE6",
                mainWhite: "#ffffff",
                mainBlack: "#22211D",
                bgBlack: "#1a1a1a",
                whiteGray: "#eeeeee",
                whiteBorder: "#CECECE",
                formWhite: "#EBEBEB",
                bgSidebar: "#ad9a8a",
                cinza: "#ccc",
            },
        },
    },
    plugins: [],
}

