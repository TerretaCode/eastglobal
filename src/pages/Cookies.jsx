import React from 'react';
import SEO from '../components/common/SEO';
import { motion } from 'framer-motion';

const Cookies = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-brand/30">
            <SEO title="Política de Cookies" description="Información sobre el uso de cookies en nuestra web." />
            <div className="container mx-auto px-4 py-32 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Política de <span className="text-brand">Cookies</span></h1>
                    <p className="text-gray-400 mb-12">Última actualización: 06/07/2025</p>

                    <div className="space-y-12 text-gray-300 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">¿Qué son las cookies?</h2>
                            <p>Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas sitios web. Sirven para recordar tus preferencias, mejorar la experiencia del usuario y recopilar información estadística.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">¿Qué tipos de cookies utiliza esta web?</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">Cookies técnicas</h3>
                                    <p>Necesarias para el funcionamiento básico del sitio.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">Cookies de análisis</h3>
                                    <p>Nos ayudan a entender cómo interactúan los usuarios con la web (por ejemplo, Google Analytics).</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">Cookies de personalización</h3>
                                    <p>Permiten adaptar la experiencia a tus preferencias.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">Cookies de publicidad (opcional)</h3>
                                    <p>Si las usamos, serán para mostrar anuncios relevantes.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">¿Cómo puedes gestionar las cookies?</h2>
                            <p>Puedes permitir, bloquear o eliminar las cookies instaladas en tu dispositivo mediante la configuración de tu navegador. Ten en cuenta que desactivar cookies puede afectar al funcionamiento de algunas partes del sitio.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Cookies de terceros</h2>
                            <p>Este sitio puede utilizar servicios de terceros (como Google Analytics o redes sociales) que recopilan información con fines estadísticos o publicitarios. Estos terceros tienen sus propias políticas de cookies, ajenas a EAST.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Aceptación de la política de cookies</h2>
                            <p>Al navegar por esta web, aceptas el uso de cookies en las condiciones establecidas. Mostramos un aviso al acceder por primera vez para informarte y darte la opción de configurarlas.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Cambios en la política de cookies</h2>
                            <p>EAST puede actualizar esta política en cualquier momento. Recomendamos revisarla periódicamente para estar informado sobre el uso de cookies.</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Cookies;
