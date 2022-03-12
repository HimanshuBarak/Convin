import React, {useState, useEffect } from 'react'
import axios from 'axios';
import './App.css';
import Main from './components/Main';
import {adduser,addtotal} from './actions'
import {useDispatch,useSelector} from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const dispatch = useDispatch()
  const total = useSelector(state=>state.total)
  const [loading,setloading] = useState(true)
  useEffect(() =>{
     function fetchUserData(){
          axios.get("https://reqres.in/api/users?per_page=20")
          .then((res)=>{
            
            dispatch(addtotal(res.data.total))
             
            console.log(total)
            axios.get(`https://reqres.in/api/users?per_page=${total}`)
            .then((resp)=>{
              dispatch(adduser(resp.data.data))
              setloading(false)
            })
            .catch((err)=>{
              console.log(err)
            })
          })
          .catch((err)=>{
            console.log(err)
          })
             
        
    } fetchUserData()
})
  return (
    <div className="app">
      <h1>Convin AI</h1>
      {!loading &&<Main />}
      <ClipLoader  loading={loading}  size={50} />
    </div>
  );
}

export default App;
