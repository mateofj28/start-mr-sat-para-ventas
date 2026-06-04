import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function EmpresarialPage() {
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
                        src="/images/empresarial-hero.webp"
                        alt="Oficina empresarial"
                        className={`h-full w-full object-cover transition-all duration-[3000ms] ease-out ${loaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                            }`}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                        {/* Right content - Title */}
                        <div className={`max-w-lg lg:order-2 transition-all duration-1000 ease-out delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}>
                            <h1 className="text-4xl font-bold tracking-tight uppercase italic sm:text-[48px] sm:leading-[56px] lg:text-[56px] lg:leading-[64px]">
                                CONECTIVIDAD
                                <br />QUE IMPULSA TU
                                <br />NEGOCIO
                            </h1>
                        </div>

                        {/* Left content */}
                        <div className="max-w-md lg:order-1">
                            <p className={`text-lg font-semibold italic text-cyan-400 transition-all duration-1000 ease-out delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}>
                                Cotiza tu Plan Empresarial
                            </p>
                            <p className={`mt-8 text-base leading-relaxed text-white text-justify sm:text-lg transition-all duration-1000 ease-out delay-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}>
                                La conectividad de tu empresa no puede detenerse. Con nuestras soluciones integrales de internet de alta velocidad, accede a una red robusta, de baja latencia y con disponibilidad permanente, ideal para operaciones críticas, sedes remotas y organizaciones que exigen continuidad y máximo desempeño.
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
                                description: 'Soluciones de videovigilancia empresarial con transmisión en tiempo real.',
                                image: '/images/mineria-cctv.webp',
                            },
                            {
                                title: 'Conectividad IoT Satelital',
                                description: 'Interconexión de equipos, sensores y sistemas mediante red satelital segura.',
                                image: '/images/conectividad-iot.webp',
                            },
                            {
                                title: 'Centro Solar de Conexión',
                                description: 'Sistemas autónomos de energía solar para mantener conectividad continua.',
                                image: '/images/centro-solar.webp',
                            },
                            {
                                title: 'Red de Energía y Conectividad',
                                description: 'Diseño e instalación de redes híbridas de energía y datos.',
                                image: '/images/red-energia.webp',
                            },
                            {
                                title: 'Red Segura Satelital',
                                description: 'Protocolos avanzados de ciberseguridad sobre enlaces satelitales.',
                                image: '/images/red-segura.webp',
                            },
                            {
                                title: 'Certificación de Enlaces Satelitales',
                                description: 'Validación técnica y certificación de calidad de conexión.',
                                image: '/images/certificacion-satelital.webp',
                            },
                            {
                                title: 'Academia Satelital Soingtel',
                                description: 'Capacitación técnica para equipos internos en manejo y mantenimiento de tecnología satelital.',
                                image: '/images/academia-satelital.webp',
                            },
                            {
                                title: 'Panel de Control Soingtel',
                                description: 'Plataforma de monitoreo y gestión de red satelital empresarial.',
                                image: '/images/panel-control.webp',
                            },
                            {
                                title: 'Soporte Remoto Satelital',
                                description: 'Asistencia técnica remota para diagnóstico, monitoreo y resolución de incidentes en tiempo real.',
                                image: '/images/soporte-remoto.webp',
                            },
                            {
                                title: 'Kit Satelital de Emergencia',
                                description: 'Soluciones portátiles de conectividad para situaciones críticas o cortes prolongados.',
                                image: '/images/kit-satelital.webp',
                            },
                            {
                                title: 'Servicio técnico',
                                description: 'Acompañamiento técnico especializado y certificado para instalación, configuración, mantenimiento y continuidad operativa de sus servicios de conectividad.',
                                image: '/images/servicio-tecnico.webp',
                            },
                            {
                                title: 'Alquiler de Internet Satelital',
                                description: 'Planes flexibles de conectividad temporal para eventos o proyectos.',
                                image: '/images/alquiler-internet.webp',
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
                        <Link to="/contacto" className="inline-flex items-center gap-3 text-xl font-bold text-white hover:text-cyan-400 transition-colors">
                            Contáctanos
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Beneficios claves Section */}
            <section className="bg-black py-20 bg-space-3">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-3xl font-bold italic text-center sm:text-4xl mb-16">
                        Beneficios claves
                    </h2>

                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                        {[
                            {
                                icon: (
                                    <svg className="h-14 w-14" fill="currentColor" viewBox="0 0 64 64">
                                        <path d="M32 4C20 4 12 12 12 24c0 16 20 36 20 36s20-20 20-36C52 12 44 4 32 4zm0 6c8 0 14 6 14 14 0 10-10 22-14 28-4-6-14-18-14-28 0-8 6-14 14-14z" opacity="0.9" />
                                        <path d="M28 20h8v4h-8zM24 26h16v2H24zM26 30h12v2H26z" opacity="0.7" />
                                    </svg>
                                ),
                                title: 'Flexibilidad',
                                description: 'para conectar múltiples sedes en cualquier región del país.',
                            },
                            {
                                icon: (
                                    <svg className="h-14 w-14" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth={1.5}>
                                        <circle cx="32" cy="28" r="10" />
                                        <path d="M28 26h8M32 24v8" strokeLinecap="round" />
                                        <circle cx="44" cy="18" r="6" />
                                        <path d="M42 16l4 4M44 16v4" strokeLinecap="round" />
                                        <path d="M20 44c0-6 5-10 12-10s12 4 12 10" strokeLinecap="round" />
                                        <circle cx="20" cy="36" r="4" />
                                        <circle cx="44" cy="36" r="4" />
                                    </svg>
                                ),
                                title: 'Soporte técnico',
                                description: 'especializado y monitoreo remoto.',
                            },
                            {
                                icon: (
                                    <svg className="h-14 w-14" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth={1.5}>
                                        <circle cx="32" cy="34" r="12" />
                                        <path d="M32 26v8l5 5" strokeLinecap="round" />
                                        <path d="M20 14c-6 4-6 12 0 16" strokeLinecap="round" />
                                        <path d="M44 14c6 4 6 12 0 16" strokeLinecap="round" />
                                        <path d="M14 10c-8 6-8 18 0 24" strokeLinecap="round" />
                                        <path d="M50 10c8 6 8 18 0 24" strokeLinecap="round" />
                                    </svg>
                                ),
                                title: 'Conexión prioritaria',
                                description: 'y mayor velocidad para entornos corporativos exigentes.',
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

export default EmpresarialPage
