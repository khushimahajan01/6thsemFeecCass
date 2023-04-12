import axios  from 'axios'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk' 


export const fact = () => async (dispatch) =>{
    const response = await axios.get("https://catfact.ninja/fact?max_length=140")

    dispatch({
        type: "GET_CAT_FACT",
        payload: response.data.fact
    })

}

const initialState = {
    fact:""
}
// //action 
// const action ={
//     type:"INCREMENT"
// }

// //Action creator functions
// export function increment(){

//     return(dispatch) => {

//         setTimeout( () => dispatch({   //this dispatch function is passing through reducer 
//             type:"INCREMENT"
//         }),2000)
//     }

// }

// export function decrement(){

//     return{
//         type:"DECREMENT"

//     }

// }


//reducer
//returns a new  state based on the action

// function reducer(count = 0,action){
//     switch(action.type){
//         case "INCREMENT": return count +1 
//         case "DECREMENT": return count -1 
//         default: return count
//     }

// }

function reducer(state = initialState, action){
    switch (action.type){
        case "GET_CAT_FACT": {
            return{
                ...state,
                fact: action.payload
            }
        }
        default: return state
    }
}

//store
const store = createStore(reducer, applyMiddleware(thunk))

export  default store
