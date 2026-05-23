import ContactForm from '../components/ContactForm'

function ContactoPage() {
    return (
        <div className="min-h-screen py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-12">
                    <h1 className="font-heading text-4xl font-bold uppercase sm:text-6xl">Contacto</h1>
                    <p className="mt-4 text-lg text-gray-300">
                        Nuestro equipo está listo para ayudarte a elegir la mejor solución de conectividad para ti.
                    </p>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactoPage
