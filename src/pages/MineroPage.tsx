import { useEffect, useState } from 'react'

function MineroPage() {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => setLoaded(true), 100)
    }, [])

    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 -z-10">
                    <img
                        src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=1600&h=900&fit=crop"
                        alt="Operación minera"
                        className={`h-full w-full object-cover transition-all duration-[3000ms] ease-out ${loaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                            }`}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                        {/* Left content */}
                        <div className={`max-w-lg transition-all duration-1000 ease-out delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}>
                            <h1 className="text-4xl font-bold tracking-tight uppercase italic sm:text-[48px] sm:leading-[56px] lg:text-[56px] lg:leading-[64px]">
                                COMUNICACIÓN
                                <br />SEGURA EN
                                <br />CUALQUIER ENTORNO
                            </h1>
                            <p className={`mt-6 text-lg font-semibold italic text-cyan-400 transition-all duration-1000 ease-out delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}>
                                Conecta tu operación minera
                            </p>
                        </div>

                        {/* Right content */}
                        <div className={`max-w-md transition-all duration-1000 ease-out delay-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}>
                            <p className="text-base leading-relaxed text-white text-justify sm:text-lg">
                                Las operaciones mineras requieren comunicación constante, incluso en entornos extremos. Con nuestros servicios integrados de internet satelital, las compañías mineras obtienen conectividad de alta capacidad, resiliente y segura, afianzando la coordinación, el monitoreo y la seguridad operativa en cada sitio.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Servicios especializados Section */}
            <section className="bg-black py-20 bg-space-2">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-3xl font-bold italic text-center sm:text-4xl mb-12">
                        Servicios especializados
                    </h2>

                    <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
                        {[
                            {
                                title: 'CCTV',
                                description: 'Sistemas de videovigilancia rural conectados vía satélite.',
                                image: 'https://images.unsplash.com/photo-1580795479225-c50ab8c3348d?w=500&h=200&fit=crop',
                            },
                            {
                                title: 'Conectividad IoT Satelital',
                                description: 'Soluciones de agricultura inteligente basadas en sensores conectados.',
                                image: 'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=500&h=200&fit=crop',
                            },
                            {
                                title: 'Centro Solar de Conexión',
                                description: 'Energía solar autosuficiente para puntos de conectividad minera.',
                                image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=200&fit=crop',
                            },
                            {
                                title: 'Red de Energía y Conectividad',
                                description: 'Integración de redes energéticas y de datos para operaciones mineras tecnificadas.',
                                image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=200&fit=crop',
                            },
                            {
                                title: 'Red Segura Satelital',
                                description: 'Transmisión de datos mineros segura y cifrada.',
                                image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=200&fit=crop',
                            },
                            {
                                title: 'Certificación de Enlaces Satelitales',
                                description: 'Verificación técnica de enlaces para proyectos mineros.',
                                image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&h=200&fit=crop',
                            },
                            {
                                title: 'Academia Satelital Soingtel',
                                description: 'Capacitación del servicio satelital.',
                                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=200&fit=crop',
                            },
                            {
                                title: 'Panel de Control Soingtel',
                                description: 'Gestión centralizada de equipos y consumo satelital.',
                                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=200&fit=crop',
                            },
                            {
                                title: 'Soporte Remoto Satelital',
                                description: 'Asistencia técnica remota desde cualquier punto del país.',
                                image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=200&fit=crop',
                            },
                            {
                                title: 'Kit Satelital de Emergencia',
                                description: 'Conectividad portátil para contingencias mineras.',
                                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=200&fit=crop',
                            },
                            {
                                title: 'Servicio técnico',
                                description: 'Despliegue técnico para instalación y mantenimiento en áreas mineras.',
                                image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=200&fit=crop',
                            },
                            {
                                title: 'Alquiler de Internet Satelital',
                                description: 'Internet temporal para proyectos o eventos mineros.',
                                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=250&fit=crop&crop=top',
                            },
                        ].map((service, index) => (
                            <div key={index} className="group [perspective:1000px] h-[260px] w-full">
                                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Front */}
                                    <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl overflow-hidden bg-white">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-[200px] object-cover"
                                        />
                                        <div className="p-3">
                                            <h3 className="text-base font-bold text-gray-900">{service.title}</h3>
                                        </div>
                                    </div>
                                    {/* Back */}
                                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl bg-white flex flex-col items-center justify-center p-6 text-center">
                                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                                        <p className="mt-4 text-sm text-gray-600">{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contáctanos */}
                    <div className="flex items-center justify-center mt-12">
                        <a href="/contacto" className="inline-flex items-center gap-3 text-xl font-bold text-white hover:text-cyan-400 transition-colors">
                            Contáctanos
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
            {/* Beneficios claves Section */}
            <section className="bg-black py-20 bg-space-3">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-3xl font-bold italic text-center sm:text-4xl mb-16">
                        Beneficios claves
                    </h2>

                    <div className="grid gap-10 sm:grid-cols-2 max-w-4xl mx-auto">
                        {[
                            {
                                icon: (
                                    <svg className="h-14 w-14" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth={1.5}>
                                        <circle cx="32" cy="32" r="12" />
                                        <circle cx="32" cy="28" r="4" />
                                        <path d="M28 36h8" strokeLinecap="round" />
                                        <path d="M30 38c0 2 1 3 2 3s2-1 2-3" strokeLinecap="round" />
                                        <path d="M16 28c-4 0-6 2-6 6s2 6 6 6" strokeLinecap="round" />
                                        <path d="M48 28c4 0 6 2 6 6s-2 6-6 6" strokeLinecap="round" />
                                        <circle cx="14" cy="34" r="3" />
                                        <circle cx="50" cy="34" r="3" />
                                    </svg>
                                ),
                                title: 'Soporte de operaciones',
                                description: 'críticas con conexión prioritaria.',
                            },
                            {
                                icon: (
                                    <svg className="h-14 w-14" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth={1.5}>
                                        <circle cx="32" cy="36" r="12" />
                                        <path d="M32 28v8l5 5" strokeLinecap="round" />
                                        <path d="M20 16c-6 4-6 12 0 16" strokeLinecap="round" />
                                        <path d="M44 16c6 4 6 12 0 16" strokeLinecap="round" />
                                        <circle cx="32" cy="12" r="5" />
                                        <path d="M28 10h8M32 8v4" strokeLinecap="round" />
                                    </svg>
                                ),
                                title: 'Monitoreo y control',
                                description: 'remoto de operaciones.',
                            },
                            {
                                icon: (
                                    <svg className="h-14 w-14" fill="currentColor" viewBox="0 0 64 64">
                                        <path d="M32 4C20 4 12 12 12 24c0 16 20 36 20 36s20-20 20-36C52 12 44 4 32 4zm0 6c8 0 14 6 14 14 0 10-10 22-14 28-4-6-14-18-14-28 0-8 6-14 14-14z" opacity="0.9" />
                                        <path d="M28 20h8v4h-8zM24 26h16v2H24zM26 30h12v2H26z" opacity="0.7" />
                                    </svg>
                                ),
                                title: 'Comunicación continua',
                                description: 'en zonas sin infraestructura terrestre.',
                            },
                            {
                                icon: (
                                    <svg className="h-14 w-14" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth={1.5}>
                                        <path d="M12 44c0-11 9-20 20-20s20 9 20 20" strokeLinecap="round" />
                                        <path d="M18 44c0-7.7 6.3-14 14-14s14 6.3 14 14" strokeLinecap="round" />
                                        <path d="M24 44c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeLinecap="round" />
                                        <circle cx="32" cy="44" r="3" fill="currentColor" />
                                    </svg>
                                ),
                                title: 'Red segura',
                                description: 'con respaldo energético autónomo.',
                            },
                        ].map((benefit, index) => (
                            <div key={index} className="group flex items-start gap-4">
                                <div className="text-white transition-all duration-500 ease-out group-hover:scale-110 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                                    <p className="text-sm text-gray-300">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MineroPage
