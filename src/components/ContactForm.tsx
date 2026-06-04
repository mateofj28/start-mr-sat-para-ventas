import { useState } from 'react'

interface FormData {
    nombre: string
    email: string
    prefijo: string
    telefono: string
    mensaje: string
}

interface FormErrors {
    nombre?: string
    email?: string
    telefono?: string
    mensaje?: string
}

const prefijos = [
    { code: '+57', country: 'Colombia' },
    { code: '+1', country: 'Estados Unidos' },
    { code: '+52', country: 'México' },
    { code: '+51', country: 'Perú' },
    { code: '+56', country: 'Chile' },
    { code: '+54', country: 'Argentina' },
    { code: '+593', country: 'Ecuador' },
    { code: '+58', country: 'Venezuela' },
    { code: '+507', country: 'Panamá' },
    { code: '+506', country: 'Costa Rica' },
    { code: '+502', country: 'Guatemala' },
    { code: '+503', country: 'El Salvador' },
    { code: '+504', country: 'Honduras' },
    { code: '+505', country: 'Nicaragua' },
    { code: '+591', country: 'Bolivia' },
    { code: '+595', country: 'Paraguay' },
    { code: '+598', country: 'Uruguay' },
    { code: '+55', country: 'Brasil' },
    { code: '+34', country: 'España' },
]

const WEB3FORMS_KEY = 'b728f220-ffea-43df-aa2a-431358b373db'

function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        nombre: '',
        email: '',
        prefijo: '+57',
        telefono: '',
        mensaje: '',
    })
    const [errors, setErrors] = useState<FormErrors>({})
    const [submitted, setSubmitted] = useState(false)
    const [sending, setSending] = useState(false)
    const [sendError, setSendError] = useState(false)

    const validate = (): boolean => {
        const newErrors: FormErrors = {}

        if (!formData.nombre.trim()) {
            newErrors.nombre = 'El nombre es obligatorio'
        } else if (formData.nombre.trim().length < 3) {
            newErrors.nombre = 'El nombre debe tener al menos 3 caracteres'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'El email es obligatorio'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Ingrese un email válido'
        }

        if (!formData.telefono.trim()) {
            newErrors.telefono = 'El teléfono es obligatorio'
        } else if (!/^\d{7,10}$/.test(formData.telefono)) {
            newErrors.telefono = 'Ingrese un teléfono válido (7-10 dígitos)'
        }

        if (!formData.mensaje.trim()) {
            newErrors.mensaje = 'El mensaje es obligatorio'
        } else if (formData.mensaje.trim().length < 10) {
            newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validate()) return

        setSending(true)
        setSendError(false)

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    subject: `Contacto Web - ${formData.nombre}`,
                    from_name: formData.nombre,
                    nombre: formData.nombre,
                    email: formData.email,
                    telefono: `${formData.prefijo} ${formData.telefono}`,
                    mensaje: formData.mensaje,
                }),
            })

            const result = await response.json()

            if (result.success) {
                setSubmitted(true)
                setFormData({ nombre: '', email: '', prefijo: '+57', telefono: '', mensaje: '' })
                setTimeout(() => setSubmitted(false), 5000)
            } else {
                setSendError(true)
            }
        } catch {
            setSendError(true)
        } finally {
            setSending(false)
        }
    }

    if (submitted) {
        return (
            <div className="mx-auto max-w-2xl text-center py-12">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-white">¡Mensaje enviado!</h3>
                <p className="mt-2 text-gray-300">Nos pondremos en contacto contigo pronto.</p>
            </div>
        )
    }

    return (
        <div className="mx-auto max-w-2xl">
            <form onSubmit={handleSubmit} noValidate autoComplete="off" className="flex flex-col gap-6">
                {/* Nombre */}
                <div>
                    <label htmlFor="nombre" className="block text-lg font-bold text-white italic mb-2">Nombre:</label>
                    <div className={`flex items-center gap-3 rounded-lg border ${errors.nombre ? 'border-red-500' : 'border-gray-400/60'} bg-gray-800/60 backdrop-blur-sm px-4 py-3`}>
                        <input
                            id="nombre"
                            name="nombre"
                            type="text"
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder="INGRESE SU NOMBRE"
                            autoComplete="off"
                            className="flex-1 bg-transparent text-sm text-white placeholder-gray-300 outline-none tracking-wide"
                        />
                    </div>
                    {errors.nombre && <p className="mt-1 text-xs text-red-400">{errors.nombre}</p>}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-lg font-bold text-white italic mb-2">Email:</label>
                    <div className={`flex items-center gap-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-400/60'} bg-gray-800/60 backdrop-blur-sm px-4 py-3`}>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="INGRESE SU EMAIL"
                            autoComplete="off"
                            className="flex-1 bg-transparent text-sm text-white placeholder-gray-300 outline-none tracking-wide"
                        />
                    </div>
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>

                {/* Teléfono */}
                <div>
                    <label htmlFor="telefono" className="block text-lg font-bold text-white italic mb-2">Teléfono:</label>
                    <div className={`flex items-center gap-1 rounded-lg border ${errors.telefono ? 'border-red-500' : 'border-gray-400/60'} bg-gray-800/60 backdrop-blur-sm px-4 py-3`}>
                        <select
                            name="prefijo"
                            value={formData.prefijo}
                            onChange={handleChange}
                            className="bg-transparent text-sm text-white outline-none cursor-pointer appearance-none pr-1"
                        >
                            {prefijos.map((p) => (
                                <option key={p.code} value={p.code} className="bg-gray-900 text-white">
                                    {p.code} {p.country}
                                </option>
                            ))}
                        </select>
                        <span className="text-gray-500">|</span>
                        <input
                            id="telefono"
                            name="telefono"
                            type="tel"
                            value={formData.telefono}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, '').slice(0, 10)
                                setFormData(prev => ({ ...prev, telefono: value }))
                                if (errors.telefono) setErrors(prev => ({ ...prev, telefono: undefined }))
                            }}
                            placeholder="INGRESE SU TELÉFONO"
                            maxLength={10}
                            className="flex-1 bg-transparent text-sm text-white placeholder-gray-300 outline-none tracking-wide ml-2"
                        />
                    </div>
                    {errors.telefono && <p className="mt-1 text-xs text-red-400">{errors.telefono}</p>}
                </div>

                {/* Mensaje */}
                <div>
                    <label htmlFor="mensaje" className="block text-lg font-bold text-white italic mb-2">Mensaje:</label>
                    <div className={`flex items-start gap-3 rounded-lg border ${errors.mensaje ? 'border-red-500' : 'border-gray-400/60'} bg-gray-800/60 backdrop-blur-sm px-4 py-3`}>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            placeholder="INGRESE SU MENSAJE"
                            rows={4}
                            className="flex-1 bg-transparent text-sm text-white placeholder-gray-300 outline-none tracking-wide resize-none"
                        />
                    </div>
                    {errors.mensaje && <p className="mt-1 text-xs text-red-400">{errors.mensaje}</p>}
                </div>

                {/* Error de envío */}
                {sendError && (
                    <p className="text-sm text-red-400 text-center">Hubo un error al enviar el mensaje. Intente nuevamente.</p>
                )}

                {/* Enviar */}
                <div>
                    <button type="submit" disabled={sending} className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                        {sending ? 'ENVIANDO...' : 'ENVIAR'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
