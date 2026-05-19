function AddressInput() {
    return (
        <div className="w-full max-w-xl">
            <label className="block text-lg font-bold text-white italic mb-2">
                Dirección del servicio
            </label>
            <div className="flex items-center gap-3 rounded-lg border border-gray-400/60 bg-gray-800/60 backdrop-blur-sm px-4 py-3">
                <input
                    type="text"
                    placeholder="INGRESE SU DIRECCIÓN Y SELECCIONE"
                    className="flex-1 bg-transparent text-sm text-white placeholder-gray-300 outline-none tracking-wide"
                />
                <button
                    type="button"
                    aria-label="Usar ubicación actual"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-300 hover:border-white hover:text-white transition-colors"
                >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <circle cx="12" cy="12" r="4" />
                        <path strokeLinecap="round" d="M12 2v2m0 16v2m10-10h-2M4 12H2" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default AddressInput
