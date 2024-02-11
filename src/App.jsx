import './App.css'
import { Layout } from 'antd';
import { CryptoContextpProvider } from './context/cryptoContext'
import AppHeader from './components/layout/AppHeader';
import AppSider from './components/layout/AppSider';
import AppContent from './components/layout/AppContent';
import AppFooter from './components/layout/AppFooter'


function App() {
  return (
    <CryptoContextpProvider>
      <Layout>
        <AppHeader />
        <Layout>
          <AppContent />
          <AppSider />
        </Layout>
        <AppFooter />
      </Layout>
    </CryptoContextpProvider>
  )
}

export default App
