
import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './page.css';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { Form, Input, InputNumber, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { keyboard } from "@testing-library/user-event/dist/keyboard";
function Registor() {

    const [data, setData] = useState([]);
    const navigate = useNavigate();
    // const [useriteam, setUserItems] = useState([]);
    console.log(data)
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
    };
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
            username: '${label} is not a valid username!',
            password: '${lable} is not a valid password!'
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };
    /* eslint-enable no-template-curly-in-string */

    // const Demo = () => {

    const onFinish = (values) => {
        console.log(values);
        var useriteam = JSON.parse(JSON.stringify(data));
        useriteam.push(values.user)
        setData(useriteam)
        localStorage.setItem('data', JSON.stringify(useriteam));
        // console.log(values)

        navigate("/Login");
    }
    return (
        <div className="container">
            <div className="header-bar">
              <h1 style={{color:"white",marginLeft:'500px'}}>DashBoard</h1>
            </div>
            <div className="main">
                <Form className="hello"{...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={['user', 'username']} label="Username" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'password']} label="Password" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    {/*<Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
    </Form.Item>*/}
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            );

        </div>
    )
}
export default Registor