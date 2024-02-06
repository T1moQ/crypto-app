import { Layout, Card, Statistic, List, Typography } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import axios from 'axios';

const data = [
   'Racing car sprays burning fuel into crowd.',
   'Japanese princess to wed commoner.',
   'Australian walks 100km after outback crash.',
   'Man charged over missing wedding girl.',
   'Los Angeles battles huge wildfires.',
];

const AppSider = () => {
   const siderStyle = {
      textAlign: 'center',
      lineHeight: '120px',
      color: '#fff',
      padding: '10px',
      backgroundColor: '#1677ff',
   }

   const options = {
      method: 'GET',
      url: 'https://openapiv1.coinstats.app/coins',
      headers: {
         accept: 'application/json',
         'X-API-KEY': '42r9S30ZFqxPxK7h1dHi/bZSFmIE8VXs4a5oqgZAxI4='
      }
   };

   axios
      .request(options)
      .then(function (response) {
         console.log(response.data);
      })
      .catch(function (error) {
         console.error(error);
      })

   return (
      <>
         <Layout.Sider width="25%" style={siderStyle}>
            <Card style={{ marginBottom: '1rem' }}>
               <Statistic
                  title="Active"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
               />
               <List
                  size='small'
                  bordered
                  dataSource={data}
                  renderItem={(item) => (
                     <List.Item>
                        <Typography.Text mark></Typography.Text> {item}
                     </List.Item>
                  )}
               />
            </Card>
            <Card bordered={false}>
               <Statistic
                  title="Idle"
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<ArrowDownOutlined />}
                  suffix="%"
               />
            </Card>
         </Layout.Sider>
      </>
   )
}

export default AppSider
