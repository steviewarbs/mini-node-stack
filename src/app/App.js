import "./App.css";
import Header from "../components/header/header";
import { useState } from "react";
import axios from 'axios'

function App() {

  //Request information

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState("");
  

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

const getData = ()=>{
  axios.get('http://localhost:4000/api/persons')
    .then(response => {
      setData(JSON.stringify(response.data));
    })
    .catch(error => {
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
      <br/>

      {/* Send details */}

      <button onClick={postData}>Post</button>
      <button onClick={getData}>Get</button>
      <br/>
      <br/>
 

      {/* Display response from the DB */}

      <textarea rows="10" cols="50" value={data}></textarea>

    </div>
  );
}

export default App;