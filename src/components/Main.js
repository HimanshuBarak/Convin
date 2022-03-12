import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import Button from './Button';
import UserCard from './UserCard'
import './main.css'

function Main() {
     
    const curr = useSelector(state=>state.curr_user)
    const users = useSelector(state=>state.users)
    let size = Object.keys(curr).length;
    
  return (
    <div className="main">
       <div >
         {size>0?(<UserCard user={curr}/>):(<h1 >Click on any button to view Details</h1>)} 
       </div> 
       {
         users.map(user=>{
           return  <Button value={user.id} />
         })
       }

    </div>
  )
}

export default Main