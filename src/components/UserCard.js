import React from 'react'
import './usercard.css'

function UserCard({user}) {
  return (
    <div className="usercard">
        
          
          <div className="details">
              <h3> {`First Name : ${user.first_name}`}</h3>
              <h3>{`Last Name : ${user.last_name}`}</h3>
              <h3>{`Email     : ${user.email}`}</h3>
          </div>
          <div className="avatar">
        <img src={user.avatar} alt="" />
        </div>
    </div>
  )
}

export default UserCard