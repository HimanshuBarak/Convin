import React, {useState, useEffect } from 'react'
import axios from 'axios';
import './App.css';
import Main from './components/Main';
import {adduser,addtotal} from './actions'
import {useDispatch} from 'react-redux'


function App() {
  const dispatch = useDispatch()
  useEffect(() =>{
    async function fetchUserData(){
        const response = await axios.get("https://reqres.in/api/users?per_page=20")
        console.log(response.data.data)
        
        dispatch(adduser(response.data.data))
        dispatch(addtotal(response.data.total))
    } fetchUserData()
})
  return (
    <div className="app">
      <h1>Convin AI</h1>
      <Main />
    </div>
  );
}

export default App;
