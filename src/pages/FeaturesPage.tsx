function FeaturesPage() {
    const features = [
        {
            category: 'Rendimiento',
            items: [
                {
                    title: 'Vite 6 Build System',
                    description: 'Hot Module Replacement instantáneo, builds optimizados con Rollup y pre-bundling con esbuild.',
                    icon: '⚡',
                },
                {
                    title: 'Code Splitting automático',
                    description: 'Carga solo el código necesario para cada ruta. Lazy loading inteligente.',
                    icon: '📦',
                },
                {
                    title: 'Optimización de assets',
                    description: 'Imágenes, fuentes y CSS optimizados automáticamente para producción.',
                    icon: '🖼️',
                },
            ],
        },
        {
            category: 'Desarrollo',
            items: [
                {
                    title: 'TypeScript estricto',
                    description: 'Tipado completo con inferencia avanzada. Detecta errores antes de ejecutar.',
                    icon: '🔷',
                },
                {
                    title: 'React 19',
                    description: 'Hooks mejorados, Suspense, Transitions y el nuevo compilador de React.',
                    icon: '⚛️',
                },
                {
                    title: 'Path aliases',
                    description: 'Imports limpios con @/ para acceder a cualquier módulo del proyecto.',
                    icon: '🗂️',
                },
            ],
        },
        {
            category: 'Diseño',
            items: [
                {
                    title: 'Tailwind CSS',
                    description: 'Utility-first CSS con purge automático. Solo se incluye el CSS que usas.',
                    icon: '🎨',
                },
                {
                    title: 'Dark mode nativo',
                    description: 'Tema oscuro elegante con colores cuidadosamente seleccionados.',
                    icon: '🌙',
                },
                {
                    title: 'Animaciones fluidas',
                    description: 'Transiciones CSS y micro-interacciones para una UX premium.',
                    icon: '✨',
                },
            ],
        },
    ]

    return (
        <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="text-center">
                <h1 className="text-4xl font-bold sm:text-5xl">Características</h1>
                <p className="mt-4 text-lg text-gray-400">
                    Todo lo que incluye esta plataforma moderna
                </p>
            </div>

            <div className="mt-20 space-y-24">
                {features.map((section) => (
                    <div key={section.category}>
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-primary-400">
                            {section.category}
                        </h2>
                        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {section.items.map((item) => (
                                <div key={item.title} className="card">
                                    <div className="mb-4 text-3xl">{item.icon}</div>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturesPage
