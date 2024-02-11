import { Layout, Spin } from 'antd';
import { useContext } from 'react';
import AppHeader from './AppHeader';
import AppSider from './AppSider';
import AppContent from './AppContent';
import AppFooter from './AppFooter'
import CryptoContext from '../../context/cryptoContext';

const AppLayout = () => {
   const { loading } = useContext(CryptoContext)

   if (loading) {
      return <Spin fullscreen />
   }

   return (
      <div>
         <Layout>
            <AppHeader />
            <Layout>
               <AppContent />
               <AppSider />
            </Layout>
            <AppFooter />
         </Layout>
      </div>
   )
}

export default AppLayout
