// tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        boxShadow:{
            inner: 'inset 0 0 6px 0 rgba(0, 0, 0, 0.4)',

        },
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
