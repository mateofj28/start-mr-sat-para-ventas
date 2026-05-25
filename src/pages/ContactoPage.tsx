import ContactForm from '../components/ContactForm'

function ContactoPage() {
    return (
        <div>
            {/* Servicio de atención al cliente */}
            <section className="bg-black py-20 mt-16">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Left - Image */}
                        <div className="flex-1">
                            <img
                                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=500&fit=crop"
                                alt="Smartphone con satélite"
                                className="w-full max-w-md mx-auto rounded-xl"
                            />
                        </div>

                        {/* Right - Contact info */}
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold italic sm:text-4xl">
                                Servicio de atención al cliente
                            </h1>

                            <div className="relative mt-8 border-2 border-white bg-transparent p-8">
                                <p className="text-base text-gray-300">
                                    Contáctanos a traves de los siguientes canales:
                                </p>

                                <div className="mt-6">
                                    <h3 className="text-xl font-bold text-white">Whatsapp</h3>
                                    <a href="https://wa.me/573107686304" target="_blank" rel="noopener noreferrer" className="mt-1 text-base text-gray-300 hover:text-cyan-400 transition-colors">+57 310 768 63 04</a>
                                </div>

                                <div className="mt-6">
                                    <h3 className="text-xl font-bold text-white">Correo electrónico</h3>
                                    <p className="mt-1 text-base text-gray-300">Info@starlinkcolombia.com.co</p>
                                </div>

                                {/* WhatsApp button */}
                                <a
                                    href="https://wa.me/573107686304"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute -bottom-5 -right-5 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 hover:bg-green-400 transition-colors shadow-lg"
                                    aria-label="WhatsApp"
                                >
                                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Formulario */}
            <section className="bg-black py-20 bg-space-4">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold italic sm:text-5xl">
                            Hablemos de tu conexión
                        </h2>
                        <p className="mt-3 text-sm font-semibold text-white">
                            Nuestro equipo está listo para ayudarte a elegir la mejor solución de conectividad para ti.
                        </p>
                    </div>
                    <ContactForm />
                </div>
            </section>
        </div>
    )
}

export default ContactoPage
