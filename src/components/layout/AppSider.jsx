import { Layout, Card, Statistic, List, Typography, Tag } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { capitalizer } from '../../utils/utils';
import { useContext } from 'react';
import CryptoContext from '../../context/cryptoContext';

const siderStyle = {
   textAlign: 'center',
   lineHeight: '120px',
   color: '#fff',
   padding: '10px',
   backgroundColor: '#1677ff',
}

const AppSider = () => {
   const { assets } = useContext(CryptoContext)

   return (
      <>
         <Layout.Sider width="25%" style={siderStyle}>
            {assets.map(asset => {
               return <div key={asset.id}>
                  <Card style={{ marginBottom: '1rem' }}>
                     <Statistic
                        title={capitalizer(asset.id)}
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
                           { title: 'Total Profit', value: asset.totalProfit, hasATag: true },
                           { title: 'Asset Amount', value: asset.amount, isPLain: true },
                        ]}
                        renderItem={(item) => (
                           <List.Item>
                              <div>{item.title}</div>
                              <span>
                                 {item.hasATag && <Tag color={asset.grow ? 'green' : 'red'}>{asset.growPercent} %</Tag>}
                                 {item.isPLain && item.value}
                                 {!item.isPLain && (<Typography.Text type={asset.grow ? 'success' : 'danger'}>
                                    $ {item.value.toFixed(2)}
                                 </Typography.Text>
                                 )}
                              </span>
                           </List.Item>
                        )}
                     />
                  </Card >
               </div>
            })}
         </Layout.Sider >
      </>
   )
}

export default AppSider


