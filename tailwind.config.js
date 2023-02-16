const colors = require('tailwindcss/colors');

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
    theme: {
        colors: {
            transparent: 'transparent',
            primary: colors.slate,
            green: colors.green,
            red: colors.red,
            blue: colors.blue,
        },
        extend: {},
    },
    plugins: [],
}
