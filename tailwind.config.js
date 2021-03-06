// tailwind.config.js
module.exports = {
    purge: [
        './src/**/*.js',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        boxShadow:{
            "FAB": '2px 3px 5px 1px rgba(0, 0, 0, 0.25)',
            inner: 'inset 0 0 6px 0 rgba(0, 0, 0, 0.4)',
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            none: 'none',

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
            visibility: ['active', 'focus'],
            textColor: ['active'],
            placeholderColor: ['hover', 'group-hover'],
        },
    },
    plugins: [],
}
