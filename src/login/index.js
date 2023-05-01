import { Button, Form, Input } from "antd"
import './css/login.css'
function Login() {
    return (
        <Form className="login-form" name="basic" 
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
                remember: true,
              }}>
            <Form.Item label="Username" name="username" 
                       rules={[{required: true, message: 'Please input your username'}]}>
                <Input />
            </Form.Item>
            <Form.Item label="Password" name="pasword"
                       rules={[{required: true, message: 'Please input your password'}]}>
                <Input />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
                >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Login