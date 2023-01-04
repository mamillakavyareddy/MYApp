import React, { useState,useEffect } from 'react';
import { Button,Image,Spin} from 'antd';

export default function Dog(props){

  let [flag, setFlag]=useState(true);
  let [dogImage, setDogImage] = useState(null);

  //Event Handling
  function handleClick(e){

    //e.preventDefault();
    //alert("Hello");
    setFlag(true);

    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setDogImage(data.message))

    setFlag(false);
  }

  

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setDogImage(data.message));
    setFlag(false);
  },[])


  return (
    <Spin tip="Loading..." spinning={flag}>
    <div style={{backgroundColor:"White", border:"4px solid teal"}}>
      <h1>Dog Image</h1>

      {dogImage && <Image width={200} src={dogImage}></Image>}

      <Button type="primary" block onClick={handleClick}>Change Image</Button>
      
    </div>
    </Spin>
  );
  }







