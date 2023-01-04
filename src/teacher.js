
import React, { useState,useEffect } from 'react';


 export default function Teacher() {

  const [teacher, setTeacher] = useState([{
    firstname: 'mamilla',
    lastname: 'kavya' ,
    age: 35,
  }]);

  useEffect(() => {
    fetch("http://localhost:8080/ThirdProject/v1/AllStudents")
    .then(response =>response.json())
    .then(data => setTeacher(data));
        
    
  },[])

    return (
        <div style={{backgroundColor:"white", border:"4px solid grey"}}>
          <h1>list of Teacher</h1>
       
          <table>
          {teacher && 
          teacher.map((temp) => <tr> 
            
            <td> Firstname: {temp.firstname} </td> 
            <td> Lastname: {temp.lastname} </td> 
            <td> Age: {temp.age} </td> 
          
          </tr> )}

    </table>
  
        </div>
      )
 }