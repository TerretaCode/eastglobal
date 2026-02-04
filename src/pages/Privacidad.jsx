import React from 'react';
import SEO from '../components/common/SEO';
import { motion } from 'framer-motion';

const Privacidad = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-brand/30">
            <SEO title="Política de Privacidad" description="Consulta nuestra política de privacidad y cómo tratamos tus datos personales." />
            <div className="container mx-auto px-4 py-32 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Política de <span className="text-brand">Privacidad</span></h1>
                    <p className="text-gray-400 mb-12">Última actualización: 06/07/2025</p>

                    <div className="space-y-12 text-gray-300 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">¿Quién es el responsable del tratamiento de tus datos?</h2>
                            <p><strong>Responsable:</strong> EAST</p>
                            <p><strong>Correo electrónico:</strong> contacto@eastglobal.es</p>
                            <p><strong>Teléfono:</strong> +34 699 484 661</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">¿Qué datos recogemos?</h2>
                            <p className="mb-4">Podemos recoger la siguiente información cuando interactúas con nosotros:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Nombre y apellidos</li>
                                <li>Dirección de correo electrónico</li>
                                <li>Teléfono (si lo proporcionas)</li>
                                <li>Información sobre tu empresa o proyecto (si la compartes en formularios)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">¿Para qué usamos tus datos?</h2>
                            <p className="mb-4">Usamos tus datos para:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Responder a tus consultas o solicitudes de contacto</li>
                                <li>Enviar presupuestos o información sobre nuestros servicios</li>
                                <li>Gestionar la relación comercial contigo</li>
                                <li>Enviar comunicaciones relacionadas con EAST (solo si lo consientes)</li>
                            </ul>
                            <p className="mt-4">Nunca compartimos tus datos con terceros sin tu permiso.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">¿Cuál es la base legal para el tratamiento?</h2>
                            <p>La base legal es tu consentimiento al contactarnos o enviar tus datos a través del formulario, así como el interés legítimo para gestionar posibles relaciones comerciales.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">¿Durante cuánto tiempo conservamos tus datos?</h2>
                            <p>Conservaremos tus datos el tiempo necesario para cumplir con la finalidad para la que se recogieron y, en su caso, mientras exista una relación comercial activa.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">¿Cuáles son tus derechos?</h2>
                            <p className="mb-4">Tienes derecho a:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Acceder a tus datos personales</li>
                                <li>Rectificar datos inexactos</li>
                                <li>Solicitar su supresión</li>
                                <li>Limitar u oponerte a su tratamiento</li>
                                <li>Retirar tu consentimiento en cualquier momento</li>
                            </ul>
                            <p className="mt-4">Para ejercer estos derechos, puedes escribirnos a <a href="mailto:contacto@eastglobal.es" className="text-brand hover:underline">contacto@eastglobal.es</a>.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Seguridad</h2>
                            <p>En EAST aplicamos medidas de seguridad técnicas y organizativas para proteger tus datos personales frente a accesos no autorizados o usos indebidos.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Cambios en esta política</h2>
                            <p>Podremos actualizar esta política ocasionalmente. Te recomendamos revisarla de vez en cuando. Si los cambios son relevantes, te lo comunicaremos.</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Privacidad;
