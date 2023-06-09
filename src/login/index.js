import { Button, Form, Input } from "antd"
import './css/login.css'
import { useNavigate } from "react-router-dom"


const Login = (props) => {

    const history = useNavigate();
    
    const onFinish = (value) => {
        console.log('Success: ', value)
        history('/home')
    }
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed: ', errorInfo)
    }

    return (
        <div>
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
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}>
                <Form.Item label="Username" name="username" 
                        rules={[{required: true, message: 'Please input your username'}]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Password" name="pasword"
                        rules={[{required: true, message: 'Please input your password'}]}>
                    <Input.Password />
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
        </div>
        
    )
}

export default Login