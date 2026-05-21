function BackgroundLines() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <svg
                className="absolute w-full h-full"
                viewBox="0 0 1200 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
            >
                {/* Curvas topográficas */}
                <path
                    d="M-100 400C50 350 200 500 400 450C600 400 700 300 900 350C1100 400 1200 300 1400 350"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                />
                <path
                    d="M-100 450C50 400 200 550 400 500C600 450 700 350 900 400C1100 450 1200 350 1400 400"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                />
                <path
                    d="M-100 500C50 450 200 600 400 550C600 500 700 400 900 450C1100 500 1200 400 1400 450"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                />
                <path
                    d="M-100 550C50 500 200 650 400 600C600 550 700 450 900 500C1100 550 1200 450 1400 500"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                />
                <path
                    d="M-100 600C50 550 200 700 400 650C600 600 700 500 900 550C1100 600 1200 500 1400 550"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="1"
                />
                <path
                    d="M-100 650C50 600 200 750 400 700C600 650 700 550 900 600C1100 650 1200 550 1400 600"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                />
                {/* Círculos concéntricos */}
                <circle cx="950" cy="400" r="80" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                <circle cx="950" cy="400" r="130" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <circle cx="950" cy="400" r="180" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <circle cx="950" cy="400" r="230" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <circle cx="950" cy="400" r="280" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                {/* Curvas superiores */}
                <path
                    d="M-100 150C100 100 300 200 500 150C700 100 800 50 1000 100C1200 150 1300 50 1400 100"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="1"
                />
                <path
                    d="M-100 200C100 150 300 250 500 200C700 150 800 100 1000 150C1200 200 1300 100 1400 150"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                />
                <path
                    d="M-100 250C100 200 300 300 500 250C700 200 800 150 1000 200C1200 250 1300 150 1400 200"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1"
                />
            </svg>
        </div>
    )
}

export default BackgroundLines
