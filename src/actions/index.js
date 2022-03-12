
export const adduser=(users)=>{
   return{
      type:"SET_USERS",
      payload:users
   } 
}

export const addtotal=(total)=>{
    return{
        type:"SET_TOTAL",
        payload:total
     } 
}

export const getcurr=(user)=>{
    return{
        type:"SET_CURR",
        payload:user
     } 
}