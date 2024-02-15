import { Layout, Select, Space, Button, Flex, Modal, Drawer } from 'antd'
import { useCrypto } from '../../context/cryptoContext';
import { useEffect, useState } from 'react';
import CoinInfoAsset from '../CoinInfoAsset';
import AddAssetForm from '../AddAssetForm';

const AppHeader = () => {
   const [select, setSelect] = useState(false)
   const [modal, setModal] = useState(false)
   const [coin, setCoin] = useState(null)
   const [drawer, setDrawer] = useState(true)
   const { crypto } = useCrypto()

   const selectHandler = (value) => {
      setCoin(crypto.find((c) => c.id === value))
      setModal(true)
   }

   useEffect(() => {
      const keypress = (event) => {
         if (event.key === '/') {
            setSelect((prev) => !prev)
         }
      }
      document.addEventListener('keypress', keypress)
      return () => document.removeEventListener('keypress', keypress)
   }, [])

   const headerStyle = {
      width: '100%',
      textAlign: 'center',
      color: '#fff',
      height: 64,
      backgroundColor: '#4096ff',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
   }

   return (
      <div>
         <Layout.Header style={headerStyle}>
            <h1>Crypto App</h1>
            <Flex gap="small" wrap="wrap">
               <Select
                  style={{ width: 250 }}
                  onSelect={selectHandler}
                  onClick={() => setSelect((prev) => !prev)}
                  open={select}
                  value={'Press / to open'}
                  options={crypto.map((coin) => ({
                     label: coin.name,
                     value: coin.id,
                     icon: coin.icon
                  }))}
                  optionRender={(option) => (
                     <Space>
                        <img style={{ width: '20px' }} src={option.data.icon} alt={option.data.label} />
                        {option.data.label}
                     </Space>
                  )}
               />
               <Button
                  type="primary"
                  onClick={() => setDrawer(true)}
               >Add Asset</Button>
               <Modal
                  open={modal}
                  onOk={() => setModal(false)}
                  onCancel={() => setModal(false)}
                  footer={null}
               >
                  <CoinInfoAsset coin={coin} />
               </Modal>
               <Drawer
                  title="Add Asset"
                  onClose={() => setDrawer(false)}
                  open={drawer}
                  destroyOnClose>
                  <AddAssetForm />
               </Drawer>
            </Flex>
         </Layout.Header>
      </div>
   )
}

export default AppHeader
