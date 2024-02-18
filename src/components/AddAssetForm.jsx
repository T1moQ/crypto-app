import { useState } from "react"
import { Select, Space, Typography, Flex, Divider, Form, Button, InputNumber, DatePicker, Result } from 'antd'
import { useCrypto } from "../context/cryptoContext"

const AddAssetForm = ({ onClose }) => {
   const [form] = Form.useForm()
   const { crypto } = useCrypto()
   const [coin, setCoin] = useState(null)
   const [submited, setSubmited] = useState(false)

   if (submited) {
      <Result
         status="success"
         title="New Asset Added"
         subTitle={`Add ${1} of ${coin.name} bu price ${10}`}
         extra={[
            <Button type="primary" key="console" onClick={onClose}>
               Go Console
            </Button>,
            <Button key="buy">Buy Again</Button>,
         ]}
      />
   }

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

   const onFinish = (value) => {
      console.log(value)
      setSubmited(true)
   }

   const validateMessages = {
      required: "${label}' is required!",
      types: {
         number: '${label} is not valid number',
      },
      range: '${label} must between ${min} and ${max}'
   }

   const handleAmountChange = (value) => {
      const price = form.getFieldValue('price')
      form.setFieldsValue({
         total: +(value * price).toFixed(2)
      })
   }

   const handlePriceChange = (value) => {
      const amount = form.getFieldValue('amount')
      form.setFieldsValue({
         total: +(value * amount).toFixed(2)
      })
   }

   return (
      <Form
         form={form}
         name="basic"
         labelCol={{
            span: 8,
         }}
         wrapperCol={{
            span: 16,
         }}
         style={{
            maxWidth: 600,
         }}
         initialValues={{
            price: coin.price,
         }}
         onFinish={onFinish}
         validateMessages={validateMessages}
      >
         <Flex align='center'>
            <img src={coin.icon} style={{ width: '40px', marginRight: '10px' }} />
            <Typography.Title level={2} style={{ margin: 0 }}>
               {coin.name}
            </Typography.Title>
         </Flex>
         <Divider />

         <Form.Item
            label="Amount"
            name="amount"
            rules={[
               {
                  required: true,
                  type: 'number',
                  min: 0,
               },
            ]}
         >
            <InputNumber
               placeholder="Enter coin amount"
               onChange={handleAmountChange}
               style={{ width: '100%' }} />
         </Form.Item>
         <Form.Item label="Date & Time" name="date">
            <DatePicker showTime />
         </Form.Item>

         <Form.Item label="Price" name="price">
            <InputNumber onChange={handleAmountChange} style={{ width: '100%' }} />
         </Form.Item>

         <Form.Item label="Total" name="total">
            <InputNumber disabled style={{ width: '100%' }} />
         </Form.Item>

         <Form.Item>
            <Button type="primary" htmlType="submit">
               Add Asset
            </Button>
         </Form.Item>
      </Form>
   )
}

export default AddAssetForm
