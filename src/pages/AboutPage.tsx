function AboutPage() {
    const techStack = [
        { name: 'React', version: '19.0', color: 'from-cyan-400 to-blue-500' },
        { name: 'TypeScript', version: '5.7', color: 'from-blue-400 to-blue-600' },
        { name: 'Vite', version: '6.0', color: 'from-purple-400 to-yellow-400' },
        { name: 'Tailwind CSS', version: '3.4', color: 'from-cyan-400 to-teal-500' },
        { name: 'React Router', version: '7.1', color: 'from-red-400 to-pink-500' },
        { name: 'PostCSS', version: '8.4', color: 'from-orange-400 to-red-500' },
    ]

    return (
        <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-bold sm:text-5xl">Acerca del proyecto</h1>
                <p className="mt-6 text-lg leading-relaxed text-gray-400">
                    Demo Stark es un proyecto web moderno que demuestra las mejores prácticas de desarrollo frontend con las tecnologías más actuales del ecosistema.
                </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-20">
                <h2 className="text-center text-2xl font-bold">Stack tecnológico</h2>
                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {techStack.map((tech) => (
                        <div key={tech.name} className="card flex items-center gap-4">
                            <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${tech.color}`}>
                                <span className="text-lg font-bold text-white">{tech.name[0]}</span>
                            </div>
                            <div>
                                <h3 className="font-semibold">{tech.name}</h3>
                                <p className="text-sm text-gray-400">v{tech.version}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Architecture */}
            <div className="mt-24">
                <h2 className="text-center text-2xl font-bold">Arquitectura</h2>
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    <div className="card">
                        <h3 className="text-lg font-semibold text-primary-400">📁 Estructura modular</h3>
                        <p className="mt-3 text-sm text-gray-400">
                            Organización clara con separación de componentes, páginas y estilos. Cada módulo tiene una responsabilidad única.
                        </p>
                        <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-950 p-4 text-xs text-gray-300">
                            {`src/
├── components/   # UI reutilizable
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── pages/        # Vistas/rutas
│   ├── HomePage.tsx
│   ├── FeaturesPage.tsx
│   └── AboutPage.tsx
├── App.tsx       # Router config
├── main.tsx      # Entry point
└── index.css     # Estilos globales`}
                        </pre>
                    </div>
                    <div className="card">
                        <h3 className="text-lg font-semibold text-primary-400">🔧 Configuración</h3>
                        <p className="mt-3 text-sm text-gray-400">
                            Configuración optimizada para desarrollo y producción con las mejores prácticas del ecosistema.
                        </p>
                        <ul className="mt-4 space-y-3 text-sm text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="text-green-400">✓</span>
                                Path aliases (@/) para imports limpios
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400">✓</span>
                                TypeScript estricto con noUncheckedIndexedAccess
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400">✓</span>
                                PostCSS con Autoprefixer
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400">✓</span>
                                Tailwind con purge automático
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400">✓</span>
                                Vite con React plugin y HMR
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400">✓</span>
                                ESM nativo (type: module)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
