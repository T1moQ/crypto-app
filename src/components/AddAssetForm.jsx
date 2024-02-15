import { useState } from "react"
import { Select, Space, Typography } from 'antd'
import { useCrypto } from "../context/cryptoContext"

const AddAssetForm = () => {
   const { crypto } = useCrypto()
   const [coin, setCoin] = useState(null)

   if (!coin) {
      return (
         <Select
            style={{ width: '100%' }}
            onSelect={(v) => setCoin((crypto.find((c) => c.id === v)))}
            placeholder='Select Coin'
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
      )
   }

   return (
      <form>
         <Typography.Title level={2} style={{ margin: 0 }}>
            {coin.name}
         </Typography.Title>
      </form>
   )
}

export default AddAssetForm
