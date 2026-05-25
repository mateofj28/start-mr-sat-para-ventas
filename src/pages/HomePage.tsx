import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'

function HomePage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative overflow-hidden min-h-screen flex items-center">
                {/* Video Background */}
                <div className="absolute inset-0 -z-10">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover"
                    >
                        <source
                            src="/hero-video.mp4"
                            type="video/mp4"
                        />
                    </video>
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                        {/* Left content */}
                        <div className="max-w-xl">
                            <h1 className="text-4xl font-bold tracking-tight uppercase italic sm:text-[56px] sm:leading-[64px] lg:text-[72px] lg:leading-[80px]">
                                <span className="block">CONECTIVIDAD</span>
                                <span className="block">SIN LÍMITES</span>
                            </h1>
                            <p className="mt-4 text-xl font-bold italic text-gray-200 sm:text-2xl">
                                Donde quiera que estés
                            </p>
                            <Link to="/features" className="mt-8 inline-flex items-center gap-2 text-base font-semibold italic text-cyan-400 hover:text-cyan-300 transition-colors">
                                Descubre nuestros servicios
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        {/* Right content */}
                        <div className="max-w-sm">
                            <p className="text-base leading-relaxed text-white text-justify sm:text-lg">
                                Nosotros llevamos Internet satelital de alta velocidad a hogares, empresas, el campo y la industria. Todo gracias a nuestras soluciones integrales de Internet Satelital.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Starlink Colombia Section */}
            <section className="relative py-20 bg-space-1">

                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-4xl font-bold italic sm:text-5xl mb-12">Starlink Colombia</h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Left - Person image */}
                        <div className="overflow-hidden rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=faces"
                                alt="Persona usando tecnología"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        {/* Right - Satellite image + text */}
                        <div className="flex flex-col gap-6">
                            <div className="overflow-hidden rounded-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&h=300&fit=crop"
                                    alt="Satélite en el espacio"
                                    className="h-64 w-full object-cover"
                                />
                            </div>
                            <p className="text-base leading-relaxed text-white text-justify sm:text-lg">
                                Nos especializamos en brindar soluciones de conectividad satelital de última generación, siendo proveedores de diferentes marcas de Internet satelital. Nuestra misión es conectar personas y negocios, sin importar lo lejos que estén, ofreciendo servicios confiables y de alta velocidad.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beneficios Section */}
            <section className="relative py-20 bg-space-2">

                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-4xl font-bold italic sm:text-5xl">Beneficios de elegir</h2>
                        <p className="mt-2 text-xl font-bold italic text-white">
                            Nuestros servicios Integrados de Internet satelital
                        </p>
                    </div>
                    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                icon: (
                                    <svg className="h-20 w-20" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth={1.5}>
                                        <path d="M12 44c0-11 9-20 20-20s20 9 20 20" strokeLinecap="round" />
                                        <path d="M18 44c0-7.7 6.3-14 14-14s14 6.3 14 14" strokeLinecap="round" />
                                        <path d="M24 44c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeLinecap="round" />
                                        <circle cx="32" cy="44" r="3" fill="currentColor" />
                                    </svg>
                                ),
                                text: 'Velocidad de conexión de hasta 250 Mbps.',
                            },
                            {
                                icon: (
                                    <svg className="h-20 w-20" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth={1.5}>
                                        <circle cx="32" cy="34" r="12" />
                                        <path d="M32 26v8l5 5" strokeLinecap="round" />
                                        <circle cx="22" cy="14" r="4" />
                                        <circle cx="42" cy="14" r="4" />
                                        <path d="M26 14h12" strokeLinecap="round" />
                                        <path d="M32 10v-4M32 50v4" strokeLinecap="round" />
                                    </svg>
                                ),
                                text: 'Latencia baja ideal para videollamadas, streaming y gaming.',
                            },
                            {
                                icon: (
                                    <svg className="h-20 w-20" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth={1.5}>
                                        <circle cx="28" cy="32" r="12" />
                                        <path d="M28 24v8l4 4" strokeLinecap="round" />
                                        <path d="M44 20l8-4" strokeLinecap="round" />
                                        <path d="M48 32h6" strokeLinecap="round" />
                                        <circle cx="52" cy="16" r="2" fill="currentColor" />
                                        <circle cx="54" cy="32" r="2" fill="currentColor" />
                                    </svg>
                                ),
                                text: 'Instalación rápida y sencilla.',
                            },
                            {
                                icon: (
                                    <svg className="h-20 w-20" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth={1.5}>
                                        <rect x="10" y="34" width="14" height="14" rx="2" />
                                        <path d="M10 48l6-6" strokeLinecap="round" />
                                        <path d="M24 34l-6 6" strokeLinecap="round" />
                                        <path d="M30 40c4-8 10-12 16-10" strokeLinecap="round" />
                                        <circle cx="48" cy="28" r="6" />
                                        <path d="M46 26l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ),
                                text: 'Cobertura en zonas rurales y remotas.',
                            },
                            {
                                icon: (
                                    <svg className="h-20 w-20" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth={1.5}>
                                        <circle cx="32" cy="28" r="10" />
                                        <circle cx="32" cy="28" r="4" />
                                        <path d="M28 28h-4M36 28h4M32 24v-4M32 32v4" strokeLinecap="round" />
                                        <circle cx="20" cy="48" r="5" />
                                        <circle cx="44" cy="48" r="5" />
                                        <path d="M25 48h14" strokeLinecap="round" />
                                    </svg>
                                ),
                                text: 'Soporte técnico especializado.',
                            },
                            {
                                icon: (
                                    <svg className="h-20 w-20" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth={1.5}>
                                        <path d="M14 50l12-12" strokeLinecap="round" />
                                        <path d="M26 38l6-2 2-6 6 2 2 6 6 2-2 6-6 2-2 6-6-2-2-6-6-2z" strokeLinejoin="round" />
                                        <circle cx="34" cy="34" r="4" />
                                        <path d="M50 14l-8 8" strokeLinecap="round" />
                                        <circle cx="52" cy="12" r="3" />
                                    </svg>
                                ),
                                text: 'Tecnología respaldada por las diferentes redes satelitales.',
                            },
                        ].map((benefit, index) => (
                            <div key={index} className="group flex flex-col items-center text-center">
                                <div className="mb-6 text-white transition-all duration-500 ease-out group-hover:scale-125 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] group-hover:animate-pulse">
                                    {benefit.icon}
                                </div>
                                <p className="text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-300">{benefit.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Marquee Bar */}
            <section className="bg-black border-t border-gray-800 overflow-hidden py-4">
                <div className="flex whitespace-nowrap" style={{ animation: 'marquee 15s linear infinite' }}>
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="text-2xl font-bold uppercase text-white mx-4 tracking-wide inline-block">
                            CONEXIÓN &nbsp;·&nbsp; VELOCIDAD &nbsp;·&nbsp; COBERTURA &nbsp;·&nbsp; ESTABILIDAD &nbsp;·&nbsp; TECNOLOGÍA &nbsp;·&nbsp; INNOVACIÓN &nbsp;·&nbsp;
                        </span>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 bg-space-3">

                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr_1fr] items-center">
                        {/* Left - Title */}
                        <div>
                            <h2 className="text-4xl font-bold italic sm:text-5xl leading-tight">
                                <span className="block">Sectores</span>
                                <span className="block font-normal italic">a los que llegamos</span>
                            </h2>
                        </div>

                        {/* Center - Hogar & Agro */}
                        <div className="flex flex-col gap-6">
                            <Link to="/hogar" className="group block">
                                <div className="overflow-hidden rounded-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=300&fit=crop"
                                        alt="Hogar"
                                        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex items-center justify-between mt-3">
                                    <span className="text-lg font-medium text-white">Hogar</span>
                                    <svg className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </Link>
                            <Link to="/agro" className="group block">
                                <div className="overflow-hidden rounded-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&h=300&fit=crop"
                                        alt="Agro"
                                        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex items-center justify-between mt-3">
                                    <span className="text-lg font-medium text-white">Agro</span>
                                    <svg className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </Link>
                        </div>

                        {/* Right - Empresarial & Minería */}
                        <div className="flex flex-col gap-6">
                            <Link to="/empresarial" className="group block">
                                <div className="overflow-hidden rounded-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=250&fit=crop"
                                        alt="Empresarial"
                                        className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex items-center justify-between mt-3">
                                    <span className="text-lg font-medium text-white">Empresarial</span>
                                    <svg className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </Link>
                            <Link to="/minero" className="group block">
                                <div className="overflow-hidden rounded-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=250&fit=crop"
                                        alt="Minería"
                                        className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex items-center justify-between mt-3">
                                    <span className="text-lg font-medium text-white">Minería</span>
                                    <svg className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="relative py-20 bg-space-4">

                <div className="mx-auto max-w-7xl px-6">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold italic sm:text-5xl">
                            Hablemos de tu conexión
                        </h2>
                        <p className="mt-3 text-sm font-semibold text-white">
                            Nuestro equipo está listo para ayudarte a elegir la mejor solución de conectividad para ti.
                        </p>
                    </div>

                    {/* Form */}
                    <ContactForm />
                </div>
            </section>
        </div>
    )
}

export default HomePage
