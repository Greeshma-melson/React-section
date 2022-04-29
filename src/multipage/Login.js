
import { Form, Input, Button, Checkbox } from 'antd';
import React, {useEffect, useState } from "react";
import {  Route, Routes ,Link} from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Alert } from 'antd';

//const Demo = () => {
  //const [items, setItems] = useState([]);

  function Login (){
   const navigate=useNavigate();
  const [iteam,setLoginItem]=useState([]);
  const [loginUser,setUserlogin]=useState([]);
  const[data ,setData]=useState([]);
 

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) {
     setData(data);
     console.log("#",data)
    }
    
  }, []);

  const onFinish = (values) => {

    var getUserStore = JSON.parse(localStorage.getItem("data"));

    var userIndex = getUserStore.findIndex(getUserStore => getUserStore.username === values.username);

    var userDetail = getUserStore[userIndex];

    var passCheck = userDetail.password;

    console.log("passCheck", passCheck)

    if (passCheck === values.password) {

        sessionStorage.setItem("iteam", JSON.stringify(values));

        // window.location.href = "#/" + userIndex;
        alert("Password is crt..");
        
        navigate("/Dashboard");
    }

    else {

        alert("Password is Wrong..");

    }

};
 
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  

  return(
    <div >
                     <div className="header-bar">
                       <h1 style={{color:"white",marginLeft:"500px"}}>Login</h1>
                     </div>
       

                       
 <Form className='login'
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
           
      <Avatar icon={<UserOutlined />} />
      <Form.Item
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
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        
      </Form.Item>
    </Form>
  );
    </div>
  )
}
export default Login;