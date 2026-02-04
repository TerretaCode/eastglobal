import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Proyectos from './pages/Proyectos';
import RRSS from './pages/RRSS';
import Contacto from './pages/Contacto';
import Privacidad from './pages/Privacidad';
import Terminos from './pages/Terminos';
import Cookies from './pages/Cookies';
import CookieConsent from './components/CookieConsent';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-black text-white selection:bg-[#EBC7DD]/30 selection:text-white relative">
                <BackgroundEffects />
                <Navbar />
                <main className="relative z-10">
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
                    </Routes>
                </main>
                <Footer />
                <CookieConsent />
            </div>
        </Router>
    );
}

export default App;
