import React from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux';
import {getcurr} from '../actions'

function Button({value}) {
  const dispatch = useDispatch()
   
    async function getuser(id) {
        const resp = await axios.get(`https://reqres.in/api/users/${id}`)
        console.log(resp.data.data)
        dispatch(getcurr(resp.data.data))
    }
  return (
    <button style={{marginRight:"10px"}} onClick={()=>getuser(value)}>{value}</button>
  )
}

export default Button