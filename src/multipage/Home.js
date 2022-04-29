import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import home from './home.png'

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  SettingFilled,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

export default class Home extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div>
        <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{color:"white"}}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                label: 'Home',
              },
              {
                key: '2',
             
                label:  <Link to='registor'>Registor</Link>
                
              },
              {
                key: '3',
               
                label: <Link to='login'>Login</Link>
                 
              },
              {
                key: '4',
              
                label:<Link to='dashboard'>Dashboard</Link> 
              },
              {
                key: '5',
                icon:<SettingFilled /> ,
                label: 
                <Link to='setting'>Setting</Link>
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
           
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
           <img src={home} width="600" height="400" />
          </Content>
        </Layout>
      </Layout>
      </div>
    )
  }
}
