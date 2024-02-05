import { Layout } from 'antd';

const AppFooter = () => {

   const footerStyle = {
      textAlign: 'center',
      color: '#fff',
      backgroundColor: '#4096ff',
   }

   return (
      <>
         <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
      </>
   )
}

export default AppFooter
