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
            {/* Bottom bar */}
            <div className="mx-auto max-w-7xl px-6 py-4">
                <div className="flex items-center justify-center">
                    <p className="text-xs text-gray-400 font-medium">
                        © 2026 Soingtel. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
