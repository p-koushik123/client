import { useState } from 'react';
import axios from 'axios';
import './App.css';
function App() {
  const [res,SetRes] = useState(null);
  const handleSubmit = (event)=>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios.post('http://localhost:8888/',{
      id : data.get('pid'),
      name : data.get('pname'),
      price : data.get('price')
    })
    .then((response)=>{
      console.log(response.data);
      SetRes(response.data);
    })
    .catch((err)=>{console.log(err)})
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label> Product ID:<input type='text' name='pid'/></label>
        <br/>
        <label> Product Name:<input type='text' name='pname'/></label>
        <br/>
        <label> Product Price:<input type='text' name='price'/></label>
        <br/>
        <input type='submit' value='STORE'/><br/><br/>
        {res}
      </form>
    </div>
  );
}

export default App;
