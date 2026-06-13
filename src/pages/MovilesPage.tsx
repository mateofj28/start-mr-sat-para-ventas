import { useEffect, useState } from 'react'

function MovilesPage() {
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
                        src="/images/hero-moviles.webp"
                        alt="Vehículo con conectividad satelital"
                        className={`h-full w-full object-cover transition-all duration-[3000ms] ease-out ${loaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                        {/* Left content */}
                        <div className={`max-w-lg transition-all duration-1000 ease-out delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <h1 className="text-4xl font-bold tracking-tight uppercase italic sm:text-[48px] sm:leading-[56px] lg:text-[56px] lg:leading-[64px]">
                                CONECTIVIDAD
                                <br />SIN LÍMITES
                            </h1>
                            <p className={`mt-6 text-lg font-semibold italic text-cyan-400 transition-all duration-1000 ease-out delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                Internet satelital para vehículos y operaciones móviles
                            </p>
                        </div>

                        {/* Right content */}
                        <div className={`max-w-md transition-all duration-1000 ease-out delay-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <p className="text-base leading-relaxed text-white text-justify sm:text-lg">
                                Lleva internet de alta velocidad a cualquier lugar. Nuestras soluciones móviles permiten conexión permanente en camionetas, camiones, embarcaciones, maquinaria y equipos de trabajo en movimiento, incluso en las zonas más alejadas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Soluciones Section */}
            <section className="bg-black py-20 bg-space-2">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-3xl font-bold italic text-center sm:text-4xl mb-12">
                        Soluciones móviles
                    </h2>

                    <div className="grid gap-8 sm:grid-cols-3 max-w-5xl mx-auto">
                        {[
                            {
                                title: 'Vehículos',
                                description: 'Internet satelital para camionetas, camiones y flotas en movimiento. Mantén la conexión activa en carretera, zonas rurales o rutas sin cobertura.',
                                image: '/images/movil-vehiculos.webp',
                            },
                            {
                                title: 'Embarcaciones',
                                description: 'Conectividad de alta velocidad para embarcaciones comerciales, pesqueras y de recreo. Comunicación continua mar adentro.',
                                image: '/images/movil-embarcaciones.webp',
                            },
                            {
                                title: 'Equipos de emergencia',
                                description: 'Soluciones portátiles de conectividad para unidades de rescate, bomberos y equipos de respuesta rápida en zonas de desastre.',
                                image: '/images/movil-emergencia.webp',
                            },
                        ].map((item, index) => (
                            <div key={index} className="group [perspective:1000px] h-[260px] w-full">
                                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Front */}
                                    <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl overflow-hidden bg-white">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-[200px] object-cover"
                                        />
                                        <div className="p-3">
                                            <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                                        </div>
                                    </div>
                                    {/* Back */}
                                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl bg-white flex flex-col items-center justify-center p-6 text-center">
                                        <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                                        <p className="mt-4 text-sm text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Beneficios Section */}
            <section className="bg-black py-20 bg-space-3">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-3xl font-bold italic text-center sm:text-4xl mb-16">
                        Beneficios claves
                    </h2>

                    <div className="grid gap-10 sm:grid-cols-3 max-w-5xl mx-auto">
                        {[
                            {
                                icon: (
                                    <svg className="h-14 w-14" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth={1.5}>
                                        <path d="M12 44c0-11 9-20 20-20s20 9 20 20" strokeLinecap="round" />
                                        <path d="M18 44c0-7.7 6.3-14 14-14s14 6.3 14 14" strokeLinecap="round" />
                                        <path d="M24 44c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeLinecap="round" />
                                        <circle cx="32" cy="44" r="3" fill="currentColor" />
                                    </svg>
                                ),
                                title: 'Cobertura en Movimiento',
                                description: 'Conectividad estable para vehículos, embarcaciones y operaciones móviles en cualquier lugar del país.',
                            },
                            {
                                icon: (
                                    <svg className="h-14 w-14" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth={1.5}>
                                        <circle cx="32" cy="28" r="10" />
                                        <circle cx="32" cy="28" r="4" />
                                        <path d="M28 28h-4M36 28h4M32 24v-4M32 32v4" strokeLinecap="round" />
                                        <circle cx="20" cy="48" r="5" />
                                        <circle cx="44" cy="48" r="5" />
                                        <path d="M25 48h14" strokeLinecap="round" />
                                    </svg>
                                ),
                                title: 'Soporte Especializado',
                                description: 'Instalación, configuración y acompañamiento técnico para garantizar la continuidad de la operación.',
                            },
                            {
                                icon: (
                                    <svg className="h-14 w-14" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth={1.5}>
                                        <circle cx="32" cy="20" r="8" />
                                        <path d="M32 28v8" strokeLinecap="round" />
                                        <path d="M24 36l8 8 8-8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16 48c0-8 7-14 16-14s16 6 16 14" strokeLinecap="round" />
                                    </svg>
                                ),
                                title: 'Conexión Sin Fronteras',
                                description: 'Internet de alta velocidad incluso en zonas rurales, remotas o sin cobertura de operadores tradicionales.',
                            },
                        ].map((benefit, index) => (
                            <div key={index} className="group flex flex-col items-center text-center gap-4">
                                <div className="text-white transition-all duration-500 ease-out group-hover:scale-110 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                                    <p className="mt-2 text-sm text-gray-300">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MovilesPage
