function WhatsAppButton() {
    const phoneNumber = '573107686304'
    const message = encodeURIComponent('Hola, me gustaría obtener más información.')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enviar mensaje por WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="h-8 w-8 fill-white"
            >
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.335 22.594c-.39 1.1-1.932 2.014-3.168 2.28-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.826-6.798-8.064-7.114-.23-.316-1.932-2.572-1.932-4.904s1.222-3.48 1.656-3.956c.434-.476.948-.596 1.264-.596.316 0 .632.002.908.016.292.014.684-.11 1.07.816.39.948 1.328 3.242 1.444 3.478.118.236.196.51.04.826-.158.316-.236.512-.472.788-.236.278-.496.62-.71.832-.234.234-.478.488-.206.958.274.47 1.216 2.006 2.612 3.25 1.794 1.598 3.306 2.094 3.776 2.33.47.236.746.196 1.02-.118.274-.316 1.178-1.374 1.492-1.846.316-.47.632-.39 1.066-.236.434.158 2.762 1.302 3.234 1.538.47.236.786.354.904.55.116.196.116 1.136-.274 2.236z" />
            </svg>
        </a>
    )
}

export default WhatsAppButton
