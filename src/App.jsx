import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/common/BackToTop';
import BackgroundEffects from './components/BackgroundEffects';
import CookieConsent from './components/CookieConsent';

// Eager loading for Home (LCP optimization)
import Home from './pages/Home';

// Lazy loading pages
const Nosotros = lazy(() => import('./pages/Nosotros'));
const Servicios = lazy(() => import('./pages/Servicios'));
const Proyectos = lazy(() => import('./pages/Proyectos'));
const RRSS = lazy(() => import('./pages/RRSS'));
const Contacto = lazy(() => import('./pages/Contacto'));
const Privacidad = lazy(() => import('./pages/Privacidad'));
const Terminos = lazy(() => import('./pages/Terminos'));
const Cookies = lazy(() => import('./pages/Cookies'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component
const PageLoader = () => (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[1000]">
        <div className="w-12 h-12 border-4 border-brand/20 border-t-brand rounded-full animate-spin" />
    </div>
);

function App() {
    return (
        <HelmetProvider>
            <Router>
                <ScrollToTop />
                <div className="min-h-screen bg-black text-white selection:bg-brand/30 selection:text-white relative flex flex-col">
                    <BackgroundEffects />
                    <Navbar />
                    <main className="relative z-10 flex-grow min-h-screen">
                        <Suspense fallback={<PageLoader />}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/nosotros" element={<Nosotros />} />
                                <Route path="/servicios" element={<Servicios />} />
                                <Route path="/proyectos" element={<Proyectos />} />
                                <Route path="/rrss" element={<RRSS />} />
                                <Route path="/contacto" element={<Contacto />} />
                                <Route path="/privacidad" element={<Privacidad />} />
                                <Route path="/terminos" element={<Terminos />} />
                                <Route path="/cookies" element={<Cookies />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Suspense>
                    </main>
                    <Footer />
                    <BackToTop />
                    <CookieConsent />
                </div>
            </Router>
        </HelmetProvider>
    );
}

export default App;
