import { Layout } from 'antd';

const AppHeader = () => {
   const headerStyle = {
      textAlign: 'center',
      color: '#fff',
      height: 64,
      paddingInline: 48,
      lineHeight: '64px',
      backgroundColor: '#4096ff',
   }
   return (
      <div>
         <Layout.Header style={headerStyle}><h1>Crypto App</h1></Layout.Header>
      </div>
   )
}

export default AppHeader
