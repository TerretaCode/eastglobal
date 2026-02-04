/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: '#EBC7DD',
                    light: '#F0D4E6',
                    dark: '#D4AFCB',
                },
                primary: {
                    DEFAULT: '#3b82f6',
                    dark: '#2563eb',
                },
                secondary: {
                    DEFAULT: '#10b981',
                    dark: '#059669',
                },
                accent: {
                    DEFAULT: '#f59e0b',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
