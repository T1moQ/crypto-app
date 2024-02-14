import { Layout, Select, Space, Button, Flex, Modal } from 'antd'
import { useCrypto } from '../../context/cryptoContext';
import { useEffect, useState } from 'react';

// const handleChange = (value) => {
//    console.log(`selected ${value}`);
// };

// const options = [
//    {
//       label: 'China',
//       value: 'china',
//       emoji: '🇨🇳',
//       desc: 'China (中国)',
//    },
//    {
//       label: 'USA',
//       value: 'usa',
//       emoji: '🇺🇸',
//       desc: 'USA (美国)',
//    },
//    {
//       label: 'Japan',
//       value: 'japan',
//       emoji: '🇯🇵',
//       desc: 'Japan (日本)',
//    },
//    {
//       label: 'Korea',
//       value: 'korea',
//       emoji: '🇰🇷',
//       desc: 'Korea (韩国)',
//    },
// ]


const AppHeader = () => {
   const [select, setSelect] = useState(false)
   const [modal, setModal] = useState(false)
   const [isModalOpen, setIsModalOpen] = useState(false)
   const { crypto } = useCrypto()

   const selectHandler = (value) => {
      console.log(value)
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
               <Button type="primary">Primary Button</Button>
               <Modal title="Basic Modal"
                  open={modal}
                  onOk={() => setModal(false)}
                  onCancel={() => setModal(false)}
                  footer={null}
               >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
               </Modal>
            </Flex>
         </Layout.Header>
      </div>
   )
}

export default AppHeader
