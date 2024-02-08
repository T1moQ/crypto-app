import { useEffect, useState } from 'react';
import { Layout, Card, Statistic, List, Typography, Spin } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { fakeFetchCrypto, fetchAssets } from '../../api'

const percentDifferencr = (a, b) => {
   return 100 * Math.abs((a - b) / ((a + b) / 2))
}

const siderStyle = {
   textAlign: 'center',
   lineHeight: '120px',
   color: '#fff',
   padding: '10px',
   backgroundColor: '#1677ff',
}

const AppSider = () => {
   const [loading, setLoading] = useState(false)
   const [crypto, setCrypto] = useState([])
   const [assets, setAssets] = useState([])

   useEffect(() => {
      async function preload() {
         setLoading(true)
         const { result } = await fakeFetchCrypto()
         const assets = await fetchAssets()

         setAssets(assets.map(asset => {
            const coin = result.find((c) => c.id === asset.id)
            return {
               grow: asset.price < coin.price,
               growPercent: percentDifferencr(asset.price, coin.price),
               totalMount: asset.amount * coin.price,
               totalProfit: (asset.amount * coin.price) - (asset.amount * asset.price),
               ...asset
            }
         }))
         setCrypto(result)
         setLoading(false)
      }
      preload()
   }, [])

   if (loading) {
      return <Spin fullscreen />
   }

   return (
      <>
         <Layout.Sider width="25%" style={siderStyle}>
            {assets.map(asset => {
               return <>
                  <Card key={asset.id} style={{ marginBottom: '1rem' }}>
                     <Statistic
                        title={asset.id}
                        value={asset.totalAmount}
                        precision={2}
                        valueStyle={{ color: asset.grow ? '#3f8600' : '#cf1322' }}
                        prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                        suffix="$"
                     />
                     <List
                        size='small'
                        bordered
                        dataSource={[
                           { title: 'Total Profit', value: asset.totalProfit },
                           { title: 'Asset Amount', value: asset.amount },
                           { title: 'Difference', value: asset.growPercent },
                        ]}
                        renderItem={(item) => (
                           <List.Item>
                              <span>{item.title}</span>
                              <span>{item.value}</span>
                           </List.Item>
                        )}
                     />
                  </Card>
                  {/* <Card bordered={false}>
                     <Statistic
                        title="Idle"
                        value={9.3}
                        precision={2}
                        valueStyle={{ color: '#cf1322' }}
                        prefix={<ArrowDownOutlined />}
                        suffix="%"
                     />
                  </Card> */}
               </>
            })}

         </Layout.Sider>
      </>
   )
}

export default AppSider


