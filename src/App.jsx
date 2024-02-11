import './App.css'
import AppLayout from './components/layout/AppLayout'
import { CryptoContextpProvider } from './context/cryptoContext'


function App() {
  return (
    <CryptoContextpProvider>
      <AppLayout />
    </CryptoContextpProvider>
  )
}

export default App
