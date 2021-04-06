// tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {

            screens: {
                'hover-hover': {'raw': '(hover: hover)'}
            }
        },
    },
    variants: {
        extend: {
            boxShadow: ['active'],
            backgroundColor: ['active'],
        },
    },
    plugins: [],
}
