import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

// Custom plugin to make CSS non-render-blocking
const asyncCssPlugin = () => ({
    name: 'async-css',
    transformIndexHtml(html) {
        // Transform CSS links to use async loading pattern
        return html.replace(
            /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/g,
            `<link rel="preload" as="style" href="$1" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="$1"></noscript>`
        );
    }
});

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        asyncCssPlugin(),
        sitemap({
            hostname: 'https://eastglobal.es',
            dynamicRoutes: [
                '/',
                '/nosotros',
                '/servicios',
                '/proyectos',
                '/rrss',
                '/contacto',
                '/privacidad',
                '/terminos',
                '/cookies'
            ]
        })
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
                    animations: ['framer-motion'],
                    icons: ['lucide-react'],
                },
            },
        },
    },
    assetsInclude: ['**/*.mp4'],
})
