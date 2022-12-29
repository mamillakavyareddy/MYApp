import React from "react";
import { Button, Space } from 'antd';
import { PoweroffOutlined , VerticalRightOutlined , FullscreenOutlined } from '@ant-design/icons';

export default function Student(props){
    const isLoggedIn = props.isLoggedIn;
    console.log(isLoggedIn);

    //destructuring
  const {name,email}=props;
  
    //Event Handling
  function handleClick(e){

    alert("button is clicked");

  }

    if (isLoggedIn) {
    return (
        <div style={{backgroundColor:"white", border:"4px solid grey"}}>
          <h1>user is loggedin</h1>
          <h1>Student Name: {name}</h1>
          <h2>Email: {email}</h2>
          <Button type="primary" icon={<PoweroffOutlined />} onClick={handleClick}>
          
      Click Me
    </Button>
    

    

    
          
        </div>
    );
    }else{
        return (
            <div style={{backgroundColor:"white", border:"4px solid grey"}}>
              <h1>user is not loggedin</h1>
              <h1>Student Name: {props.name}</h1>
              <h2>Email: {props.email}</h2>
              <Button type="primary" icon={<FullscreenOutlined />} onClick={handleClick}>

              Click Me



              </Button>
              
            </div>
        ); 
    }

}