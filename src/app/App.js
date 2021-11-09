import "./App.css";
import Header from "../header/header";
import { useState } from "react";
import axios from 'axios'

function App() {

  //Request information

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const dataOutput=[1,2,3,4,5,6,7,8,9];

  //axios post request 

  function postData() {
    axios.post('http://localhost:4000/api/persons', {
      name: name,
      age: age,
      address: address
    })
    .then((response)=> {
      console.log(response);
    })
    .catch((error)=> {
      console.log(error);
    });

  }


  return (
    <div className="App">
      {/* Header of application */}
      <Header header={"Mini Node Stack"} />

      {/* Users details to write to mongo  */}

      <h2>Name</h2>
      <input type="text" onChange={(e)=>{setName(()=>{return e.target.value})}} placeholder={name} /> <br/>
      <h2>Age</h2>
      <input type="text" onChange={(e)=>{setAge(()=>{return e.target.value})}} placeholder={age} /><br/>
      <h2>Address</h2>
      <input type="text" onChange={(e)=>{setAddress(()=>{return e.target.value})}} placeholder={address} /><br/>

      {/* Send details */}

      <button onClick={postData}>Send</button>
{/* 
      {dataOutput.map((out)=>{
        return <h5>{out}</h5>
      })} */}


    </div>
  );
}

export default App;
