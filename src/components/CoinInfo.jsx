import { Flex, Typography } from 'antd'

const CoinInfo = (props) => {
   const { coin, withSymbol } = props
   return (
      <Flex align='center'>
         <img src={coin.icon} style={{ width: '40px', marginRight: '10px' }} />
         <Typography.Title level={2} style={{ margin: 0 }}>
            {withSymbol && <span>({coin.symbol})</span>} {coin.name}
         </Typography.Title>
      </Flex>
   )
}

export default CoinInfo
