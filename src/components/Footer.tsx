import { Link } from 'react-router-dom'

function Footer() {
    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Hogar', path: '/' },
        { name: 'Empresarial', path: '/features' },
        { name: 'Agro', path: '/features' },
        { name: 'Minero', path: '/features' },
        { name: 'Contacto', path: '/about' },
    ]

    return (
        <footer className="bg-black">
            {/* Nav links */}
            <div className="border-b border-gray-800">
                <div className="mx-auto max-w-7xl px-6 py-4">
                    <nav className="flex items-center justify-center gap-8 flex-wrap">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm transition-colors ${index === 0
                                    ? 'font-semibold text-white underline underline-offset-8'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="mx-auto max-w-7xl px-6 py-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <p className="text-xs text-gray-400 font-medium">
                        © 2026 Soingtel. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-4">
                        {/* Facebook */}
                        <a href="https://web.facebook.com/profile.php?id=61583364812006" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-white transition-colors">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a href="https://www.instagram.com/mr_sat_oficiall/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-white transition-colors">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <rect x="2" y="2" width="20" height="20" rx="5" />
                                <circle cx="12" cy="12" r="5" />
                                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                            </svg>
                        </a>
                        {/* TikTok */}
                        <a href="https://www.tiktok.com/@mrsat.oficial" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-white transition-colors">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.11v-3.5a6.37 6.37 0 00-.82-.05A6.34 6.34 0 003.15 15.7 6.34 6.34 0 009.49 22a6.34 6.34 0 006.34-6.34V9.08a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.51z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
