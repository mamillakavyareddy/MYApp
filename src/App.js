import React from "react";
import { Breadcrumb, Layout} from 'antd';
import "antd/dist/antd.css";

import Student from "./Student";
import Color from "./Color";
import Dog from "./dog";
import Teacher from "./teacher";

const { Header, Content, Footer } = Layout;
const StudentList = [
  {
    name: 'abc',
    email: 'abc@def.com',
  },
  {
    name: 'def',
    email: 'def@xyz.com',
  },
  {
    name: 'sajjith',
    email: 'def@xkkkk.com',
  },

];
function App() {
  return (
    <Layout>
    <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
      <div
        style={{
          float: 'left',
          width: 120,
          height: 31,
          margin: '16px 24px 16px 0',
          background: 'rgba(255, 255, 255, 0.2)',
        }}
        
      />
      
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, minHeight: 380, background: "white" }}>
        
        <div>
          <h1>Hello Programmer</h1>
          <p>upadated on jan 3</p>
          
        </div>
        
        
        
        <Dog/>
        <Teacher/>
        
        <hr/>
        
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>React Design ©2018 Created Kavya</Footer>
  </Layout>
  );
}

export default App;
