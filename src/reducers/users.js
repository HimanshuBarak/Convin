

export const initialState = {
    total:0,
    users:[],
    curr_user:{}
}


const userreducer =(state=initialState,action)=>{
    

    switch(action.type){
        case 'SET_TOTAL': 
        return{
            ...state,total:action.payload
        }
        case 'SET_USERS':
             
             return{
              ...state,users:action.payload
            }
        case 'SET_CURR':
            return {
                ...state,curr_user:action.payload
            }    
        default: 
        return state;
    }
}

export default userreducer;