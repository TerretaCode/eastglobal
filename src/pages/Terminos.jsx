import React from 'react';
import { motion } from 'framer-motion';

const Terminos = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#EBC7DD]/30">
            <div className="container mx-auto px-4 py-32 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Términos de <span className="text-[#EBC7DD]">Servicio</span></h1>
                    <p className="text-gray-400 mb-12">Última actualización: 06/07/2025</p>

                    <div className="space-y-12 text-gray-300 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Aceptación de los términos</h2>
                            <p>Al acceder y utilizar esta web, aceptas cumplir con estos Términos de Servicio. Si no estás de acuerdo con alguno de ellos, por favor no utilices nuestros servicios.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Servicios ofrecidos</h2>
                            <p>EAST ofrece servicios de estrategia, diseño, marketing y producción de contenido. El detalle de los servicios se encuentra en la sección correspondiente de esta web y puede variar según el proyecto o acuerdo individual.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Propiedad intelectual</h2>
                            <p>Todo el contenido generado por EAST, incluidos textos, imágenes, vídeos, diseños y materiales entregables, es propiedad de EAST salvo acuerdo explícito con el cliente. Queda prohibida su reproducción sin autorización previa.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Obligaciones del usuario</h2>
                            <p>El usuario se compromete a proporcionar información veraz, a no utilizar esta web con fines ilícitos y a respetar la propiedad intelectual e industrial de EAST y de terceros.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Confidencialidad</h2>
                            <p>Toda la información compartida entre el cliente y EAST será tratada de forma confidencial y no será divulgada a terceros sin consentimiento expreso, salvo obligación legal.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Limitación de responsabilidad</h2>
                            <p>EAST no se hace responsable por daños derivados del uso indebido del sitio web, interrupciones técnicas o decisiones basadas en la información contenida en esta web.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Modificaciones</h2>
                            <p>Nos reservamos el derecho de modificar estos Términos de Servicio en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en esta web.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Legislación aplicable</h2>
                            <p>Estos términos se rigen por la legislación española. Cualquier disputa relacionada con el uso de esta web será resuelta por los tribunales competentes en Valencia, España.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Contacto</h2>
                            <p>Si tienes dudas sobre estos Términos de Servicio, puedes escribirnos a <a href="mailto:contacto@eastglobal.es" className="text-[#EBC7DD] hover:underline">contacto@eastglobal.es</a>.</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Terminos;
