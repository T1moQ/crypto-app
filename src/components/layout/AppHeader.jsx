import { Layout, Select, Space, Button, Flex } from 'antd'
import { useCrypto } from '../../context/cryptoContext';

const handleChange = (value) => {
   console.log(`selected ${value}`);
};

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
   const { crypto } = useCrypto()

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
                  value={'Press to open'}
                  optionLabelProp="label"
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
            </Flex>
         </Layout.Header>
      </div>
   )
}

export default AppHeader
