import { Layout } from 'antd';

const AppContent = () => {
   const contentStyle = {
      textAlign: 'center',
      minHeight: 'calc(90vh - 64px)',
      color: '#fff',
      backgroundColor: '#0958d9',
      padding: '1rem'
   }
   return (
      <>
         <Layout.Content style={contentStyle}>Content</Layout.Content>
      </>
   )
}

export default AppContent
