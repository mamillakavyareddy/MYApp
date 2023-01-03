import React from "react";
import { useState,useEffect } from "react";

import { Button, Space } from 'antd';
import { PoweroffOutlined , VerticalRightOutlined , FullscreenOutlined } from '@ant-design/icons';


export default function Color() {
    const [color, setColor] = useState("red");
    let [dogImage, setDogImage] = useState(null);


     //Event Handling
  function handleClick(e){

    //alert("button is clicked");
    setColor("green");
  }
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setDogImage(data.message))
  },[]);

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
          <br></br>
          {dogImage && <img width="500" height="500" src={dogImage}></img>}

      </div>
    )
  }