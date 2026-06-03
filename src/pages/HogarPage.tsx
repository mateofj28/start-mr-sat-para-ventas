import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HogarPage() {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => setLoaded(true), 100)
    }, [])

    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background Image with zoom animation */}
                <div className="absolute inset-0 -z-10">
                    <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop"
                        alt="Casa con internet satelital"
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
                                INTERNET RÁPIDO
                                <br />Y CONFIABLE
                                <br />PARA TU HOGAR
                            </h1>
                            <p className={`mt-6 text-lg font-semibold italic text-cyan-400 transition-all duration-1000 ease-out delay-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}>
                                Lleva internet satelital
                            </p>
                        </div>

                        {/* Right content */}
                        <div className={`max-w-md transition-all duration-1000 ease-out delay-[1200ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}>
                            <p className="text-base leading-relaxed text-white text-justify sm:text-lg">
                                Con nuestra red de sistemas integrales de internet satelital, tu hogar disfruta de una conexión estable, rápida y segura. Nuestra tecnología garantiza una experiencia de navegación fluida, ideal para streaming, videollamadas, teletrabajo y entretenimiento familiar, incluso en zonas rurales.
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
                        {/* CCTV */}
                        <div className="group [perspective:1000px] h-[260px] w-full">
                            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                {/* Front */}
                                <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl overflow-hidden bg-white">
                                    <img
                                        src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=500&h=200&fit=crop"
                                        alt="CCTV"
                                        className="w-full h-[200px] object-cover"
                                    />
                                    <div className="p-3">
                                        <h3 className="text-base font-bold text-gray-900">CCTV</h3>
                                    </div>
                                </div>
                                {/* Back */}
                                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl bg-white flex flex-col items-center justify-center p-6 text-center">
                                    <h3 className="text-2xl font-bold text-gray-900">CCTV</h3>
                                    <p className="mt-4 text-sm text-gray-600">Implementación de sistemas de videovigilancia satelital para mayor seguridad doméstica.</p>
                                </div>
                            </div>
                        </div>

                        {/* Conectividad IoT Satelital */}
                        <div className="group [perspective:1000px] h-[260px] w-full">
                            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                {/* Front */}
                                <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl overflow-hidden bg-white">
                                    <img
                                        src="https://images.unsplash.com/photo-1558002038-1055907df827?w=500&h=200&fit=crop"
                                        alt="Conectividad IoT Satelital"
                                        className="w-full h-[200px] object-cover"
                                    />
                                    <div className="p-3">
                                        <h3 className="text-base font-bold text-gray-900">Conectividad IoT Satelital</h3>
                                    </div>
                                </div>
                                {/* Back */}
                                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl bg-white flex flex-col items-center justify-center p-6 text-center">
                                    <h3 className="text-2xl font-bold text-gray-900">Conectividad IoT Satelital</h3>
                                    <p className="mt-4 text-sm text-gray-600">Integración de dispositivos inteligentes en el hogar con conexión directa a la red de internet satelital.</p>
                                </div>
                            </div>
                        </div>

                        {/* Servicio técnico */}
                        <div className="group [perspective:1000px] h-[260px] w-full">
                            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                {/* Front */}
                                <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl overflow-hidden bg-white">
                                    <img
                                        src="https://images.unsplash.com/photo-1621274403997-37aace184f49?w=500&h=200&fit=crop"
                                        alt="Servicio técnico"
                                        className="w-full h-[200px] object-cover"
                                    />
                                    <div className="p-3">
                                        <h3 className="text-base font-bold text-gray-900">Servicio técnico</h3>
                                    </div>
                                </div>
                                {/* Back */}
                                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl bg-white flex flex-col items-center justify-center p-6 text-center">
                                    <h3 className="text-2xl font-bold text-gray-900">Servicio técnico</h3>
                                    <p className="mt-4 text-sm text-gray-600">Acompañamiento técnico especializado y certificado para instalación, configuración, mantenimiento y continuidad operativa de sus servicios de conectividad.</p>
                                </div>
                            </div>
                        </div>

                        {/* Contáctanos */}
                        <div className="flex items-center justify-center">
                            <Link to="/contacto" className="inline-flex items-center gap-3 text-xl font-bold text-white hover:text-cyan-400 transition-colors">
                                Contáctanos
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* Beneficios claves Section */}
            <section className="bg-black py-20 bg-space-3">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-3xl font-bold italic text-center sm:text-4xl mb-16">
                        Beneficios claves
                    </h2>

                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
                        {[
                            {
                                icon: (
                                    <svg className="h-14 w-14" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth={1.5}>
                                        <path d="M10 48l8-8 6 4 10-12 8 6" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="14" cy="20" r="4" />
                                        <path d="M30 48V30l6-10" strokeLinecap="round" />
                                        <path d="M44 20l4-8 4 8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M48 20v28" strokeLinecap="round" />
                                    </svg>
                                ),
                                title: 'Cobertura',
                                description: 'en zonas rurales y remotas.',
                            },
                            {
                                icon: (
                                    <svg className="h-14 w-14" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth={1.5}>
                                        <circle cx="32" cy="36" r="12" />
                                        <path d="M32 28v8l5 5" strokeLinecap="round" />
                                        <path d="M20 16c-4 4-4 10 0 14" strokeLinecap="round" />
                                        <path d="M44 16c4 4 4 10 0 14" strokeLinecap="round" />
                                        <path d="M26 10c-8 4-8 14 0 20" strokeLinecap="round" />
                                        <path d="M38 10c8 4 8 14 0 20" strokeLinecap="round" />
                                    </svg>
                                ),
                                title: 'Conexión estable',
                                description: 'incluso en climas adversos.',
                            },
                            {
                                icon: (
                                    <svg className="h-14 w-14" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth={1.5}>
                                        <circle cx="32" cy="32" r="14" />
                                        <path d="M32 22v10l6 6" strokeLinecap="round" />
                                        <path d="M18 32H8M56 32h-6" strokeLinecap="round" />
                                    </svg>
                                ),
                                title: 'Fácil de instalar',
                                description: 'y mover si cambias de ubicación.',
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
                                title: 'Sin depender de cables',
                                description: 'o infraestructura local, internet de alta velocidad.',
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

export default HogarPage
