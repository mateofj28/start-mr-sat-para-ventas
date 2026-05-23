import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import HogarPage from './pages/HogarPage'
import EmpresarialPage from './pages/EmpresarialPage'
import AgroPage from './pages/AgroPage'
import MineroPage from './pages/MineroPage'
import ContactoPage from './pages/ContactoPage'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
              <Route path="hogar" element={<HogarPage />} />
              <Route path="empresarial" element={<EmpresarialPage />} />
              <Route path="agro" element={<AgroPage />} />
              <Route path="minero" element={<MineroPage />} />
              <Route path="contacto" element={<ContactoPage />} />
          </Route>
      </Routes>
  )
}

export default App
