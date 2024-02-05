import { Layout } from 'antd';

const AppSider = () => {
   const siderStyle = {
      textAlign: 'center',
      lineHeight: '120px',
      color: '#fff',
      backgroundColor: '#1677ff',
   }
   return (
      <>
         <Layout.Sider width="25%" style={siderStyle}>
            Sider
         </Layout.Sider>
      </>
   )
}

export default AppSider
