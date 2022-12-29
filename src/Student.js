import React from "react";



export default function Student(props){
    const isLoggedIn = props.loggedin;
    console.log(isLoggedIn);
    
    if (isLoggedIn) {
    return (
        <div style={{backgroundColor:"teal", border:"4px solid grey"}}>
          <h1>user is loggedin</h1>
          <h1>Student Name: {props.name}</h1>
          <h2>Email: {props.email}</h2>
          
          
        </div>
    );
    }else{
        return (
            <div style={{backgroundColor:"teal", border:"4px solid grey"}}>
              <h1>user is not loggedin</h1>
              <h1>Student Name: {props.name}</h1>
              <h2>Email: {props.email}</h2>
              
              
            </div>
        ); 
    }

}