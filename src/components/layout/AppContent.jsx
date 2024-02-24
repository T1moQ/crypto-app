import { Layout, Typography } from 'antd';
import { useCrypto } from '../../context/cryptoContext'

const AppContent = () => {
   const contentStyle = {
      textAlign: 'center',
      minHeight: 'calc(90vh - 64px)',
      color: '#fff',
      backgroundColor: '#0958d9',
      padding: '1rem'
   }
   const { assets, crypto } = useCrypto()
   return (
      <>
         <Layout.Content style={contentStyle}>
            <Typography.Title style={{ color: '#fff' }}>
               Portfolio: $ {assets.map((asset) => {
                  const coin = crypto.find((coin) => coin.id === asset.id)
                  return asset.amount * coin.price
               }).reduce((acc, value) => (acc += value), 0)
                  .toFixed(2)}
            </Typography.Title>
         </Layout.Content>
      </>
   )
}

export default AppContent
