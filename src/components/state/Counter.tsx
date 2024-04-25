import { count } from "console";
import { useReducer } from "react";

type CounterState = {
    count: number
}
type UpdateAction ={
    type: 'incerment' |'decerment'
    payload: number
}
type ResetAction ={
    type: 'reset'
}
type CounterAction = UpdateAction | ResetAction

const initialState = { count: 0}

function reducer (state: CounterState,action: CounterAction){
    switch (action.type){
        case 'incerment':
            return {count: state.count + action.payload}
        case 'decerment':
            return { count: state.count - action.payload}
        case 'reset':
            return  initialState
        default:
            return state
    }
}

export const Counter =()=>{
    const [state,dispatch] =useReducer(reducer, initialState)
    return (
        <>
            Count: {state.count}
            <button onClick={()=> dispatch({type: 'incerment',payload:20    })}>
                Incerment 10
            </button>
            <button onClick={()=> dispatch({type: 'decerment',payload:10})}>
                Decerment 10
            </button>
            <button onClick={()=> dispatch({type: 'reset'   })}>
                Reset
            </button>
        </>
    )
}