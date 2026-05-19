import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeTab, setActiveTab] = useState<'personal' | 'empresas'>('personal')
    const location = useLocation()

    const personalLinks = [
        { name: 'RESIDENCIAL', path: '/' },
        { name: 'ITINERANTE', path: '/features' },
    ]

    const empresasLinks = [
        { name: 'EMPRESARIAL', path: '/features' },
        { name: 'MARÍTIMO', path: '/about' },
    ]

    const links = activeTab === 'personal' ? personalLinks : empresasLinks

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
                <nav className="flex items-center justify-between px-8 py-5">
                    {/* Logo */}
                    <Link to="/" className="text-white text-lg font-bold tracking-[0.3em] uppercase">
                        S T A R K
                    </Link>

                    {/* Hamburger icon */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="flex h-10 w-10 items-center justify-center text-white hover:opacity-70 transition-opacity"
                        aria-label="Abrir menú"
                    >
                        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" d="M4 7h16" />
                            <path strokeLinecap="round" d="M4 12h16" />
                            <path strokeLinecap="round" d="M4 17h16" />
                        </svg>
                    </button>
                </nav>
            </header>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/50"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar panel */}
            <div
                className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-[#1a1a1a] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Close button */}
                <div className="flex justify-end px-6 py-5">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-white hover:border-white transition-colors"
                        aria-label="Cerrar menú"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-0 px-6 mb-6">
                    <button
                        onClick={() => setActiveTab('personal')}
                        className={`text-sm font-bold uppercase tracking-wide pr-4 border-r border-gray-600 transition-colors ${activeTab === 'personal' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                            }`}
                    >
                        Personal
                    </button>
                    <button
                        onClick={() => setActiveTab('empresas')}
                        className={`text-sm font-bold uppercase tracking-wide pl-4 transition-colors ${activeTab === 'empresas' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                            }`}
                    >
                        Empresas
                    </button>
                </div>

                {/* Navigation links */}
                <div className="flex flex-col px-6 gap-5">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`text-sm font-bold uppercase tracking-wide transition-colors ${location.pathname === link.path
                                    ? 'text-white'
                                    : 'text-gray-300 hover:text-white'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Divider + Country */}
                <div className="mt-10 px-6">
                    <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wide">
                        <span>CO</span>
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <circle cx="12" cy="12" r="10" />
                            <path strokeLinecap="round" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                    </div>
                </div>

                {/* Bottom links */}
                <div className="mt-10 flex flex-col px-6 gap-5">
                    <a href="#" className="text-sm font-bold uppercase tracking-wide text-gray-300 hover:text-white transition-colors">
                        Iniciar sesión
                    </a>
                    <a href="#" className="text-sm font-bold uppercase tracking-wide text-gray-300 hover:text-white transition-colors">
                        Centro de ayuda
                    </a>
                    <a href="#" className="text-sm font-bold uppercase tracking-wide text-gray-300 hover:text-white transition-colors">
                        Mapa de disponibilidad
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar
