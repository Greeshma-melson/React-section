import { Route, Routes, Link, Router } from 'react-router-dom';
import React, {useEffect, useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import { Avatar } from 'antd';
import { Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Alert } from 'antd';
function Setting()
{
  const navigate=useNavigate();
  const [iteam,setLoginItem]=useState([]);
  const [loginUser,setUserlogin]=useState([]);
   const [loginPassword,setPaswword]=useState([]);
  const[data ,setData]=useState([]);
  const onFinish = (values) => {
  }
  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem('iteam'));
    if (data) {
     setData(data);
     console.log("#",data)//[0//].username)
     
    }
    
  }, []);
  function removeToken() {
    sessionStorage.removeItem("iteam");
    navigate("/")}
  return(
    <div  className="hello">
      <div className='header-bar'>
        <h1 style={{color:"white",marginLeft:"500px"}}>Setting</h1>
      </div>

<div className="row">
       <div className="username:">username:</div>
        <div className='col-md-8'>{data.username}</div>
        </div>
        
        <div className="row">
        <div className="password:">password:</div>
        <div className='col-md-8'>{data.password}</div>
        </div>
        <button className='set-btn' onClick={removeToken}>logout</button>
    </div>
  )
  }
  export default  Setting;