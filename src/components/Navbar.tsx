import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight * 0.8)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg'
                    : 'bg-transparent'
                }`}>
                <nav className="flex items-center justify-between px-8 py-5">
                    {/* Logo */}
                    <Link to="/" className="flex flex-col items-center leading-tight">
                        <span className="text-white text-sm font-bold tracking-[0.3em] uppercase">·STARLINK·</span>
                        <span className="text-white text-[10px] tracking-[0.35em] uppercase">LATINOAMÉRICA</span>
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

                {/* Navigation links */}
                <div className="flex flex-col px-6 gap-5">
                    {[
                        { name: 'INICIO', path: '/' },
                        { name: 'HOGAR', path: '/hogar' },
                        { name: 'EMPRESARIAL', path: '/empresarial' },
                        { name: 'AGRO', path: '/agro' },
                        { name: 'MINERO', path: '/minero' },
                        { name: 'CONTACTO', path: '/contacto' },
                    ].map((link) => (
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

            </div>
        </>
    )
}

export default Navbar
