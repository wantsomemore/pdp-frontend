import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import {Routes} from './routes/Routes'

function App() {
//   const [data, setData] = useState([])
//   const addItem= async () => {
// await axios.post('http://localhost:3000/add-item', {name: 'aa', age: '20', salary: 1000})

//   }
// const call = async () => {
//   const response = await axios.get('http://localhost:3000/');
//   setData(response.data)
//   console.log(response.data)
// return response.data
// }

//   useEffect(() => {
//    call()

//   }, [])
  
//   <>
// {data.map(item => <div>{item.name}</div>)}
// <button onClick={addItem}>Add</button>
// </> 

  return      <Routes />

  
}


export default App;
