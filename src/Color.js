import React from "react";
import { useState } from "react";
import { Button, Space } from 'antd';
import { PoweroffOutlined , VerticalRightOutlined , FullscreenOutlined } from '@ant-design/icons';


export default function Color() {
    const [color, setColor] = useState("red");
    


     //Event Handling
  function handleClick(e){

    //alert("button is clicked");
    setColor("green");
  }
    return (
      <div style={{backgroundColor:"white", border:"4px solid blue"}}>
        <h1>My favorite color is {color}!</h1>
        <button
          type="button"
          onClick={() => setColor("blue")}
        >Blue</button>
        <button
          type="button"
          onClick={() => setColor("white")}
          >white</button>
          <Button type="primary" icon={<PoweroffOutlined />} onClick={handleClick}>
          Click Me
          </Button>

      </div>
    )
  }