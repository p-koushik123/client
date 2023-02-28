// import { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//     const [result,setResult] = useState(null);
//     function getProducts()
//     {
//         axios.get("http://localhost:8888/products",{
//             params : {}
//         }).then((response) =>{
//             console.log(response.data);
//             setResult(response.data);
//         }).catch((error)=>{
//             console.log(error)
//         })
//     }
//     function deleteProduct(id)
//     {
//         axios.delete(`http://localhost:8888/delete/${id}`,
//         {params : {}
//     }).then((response)=>{
//         getProducts();
//     }).catch((error)=>{
//         console.log(error)
//     })
//     }
//     // const getProducts = () => {

//     // }
//     if(result == null)
//     {
//         return (
//             <div className="App">
//                 <button onClick={() => getProducts()}>GetProductData</button>
              
//             </div>
//           );
//     }else
//     {
//         return (
//             <div className="App">
//                 <table border="1">
//                     <tr>
//                       <th>PID</th>
//                       <th>PNAME</th>
//                       <th>PRICE</th>
//                       <th>ACTIONS</th>
//                     </tr>
                    
//                     {
//                         result.map((obj)=>(
//                             <tr key={obj.pid}>
//                               <td>{obj.pid}</td>
//                               <td>{obj.pname}</td>
//                               <td>{obj.price}</td>
                              
//                             </tr>
//                         ))
//                     }
                    
                    
//                     </table> 
//             </div>
//           );
//     }
  
// }
// export default App;
import './App.css';
import { useState } from 'react';
import axios from 'axios';
function App() {
  const [result,setResult] = useState(null);
  function getProducts(){
    axios.get("http://localhost:8888/products",{
        params : {}
    }).then((response)=>{
        console.log(response.data);
        setResult(response.data);
    }).catch((error)=>{
        console.log(error)
    })
  }
  function deleteProduct(id){
    axios.delete(`http://localhost:8888/delete/${id}`,
        {params : {}
    }).then((response)=>{
        console.log(response.data);
        getProducts();
    }).catch((error)=>{
        console.log(error);
    })
  }
  function updateProduct(id){
    axios.update(`http://localhost:8888/update/{pname}`,
        {params : {}
    }).then((response)=>{
        console.log(response.data);
        getProducts();
    }).catch((error)=>{
        console.log(error);
    })
  }
  if( result == null ){
    return (
        <div className="App">
        <button onClick={()=>getProducts()}>GetProductData</button>
        </div>
    );
  }else{
    return (
        <div className="App">
          <table border="1">
            <tr>
                <th>PID</th>
                <th>PNAME</th>
                <th>PRICE</th>
                <th>ACTIONS</th>
                <th>ACTIONS1</th>
            </tr>
            {
                result.map((obj)=>(
                    <tr key={obj.pid}>
                        <td>{obj.pid}</td>
                        <td>{obj.pname}</td>
                        <td>{obj.price}</td>
                        <td><button onClick={()=>deleteProduct(obj.pid)}>Delete</button></td>
                        <td><button onClick={()=>updateProduct(obj.pname,obj.price)}>Update</button></td>
                    </tr>
                ))
            }
          </table>
        </div>
      );
  }
}

export default App;
