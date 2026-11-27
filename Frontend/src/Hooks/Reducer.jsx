import React, { useReducer } from 'react'
import { Button } from "@/components/ui/button";
const reducer = (state,action) =>{
    switch(action.type){
        case "INC" :
            return {count : state.count+1};
        case "DEC" :
            return {count : state.count-1};
        case "RESET" :
            return {count : 0};
        default:
            return state;
    }
}
const Reducer = () => {
    const [state,dispatch] = useReducer(reducer,{count:0});
  return (
    <div>
        <h1>Count : {state.count}</h1>
        <Button variant="destructive" onClick={()=>dispatch({type:"INC"})}>Increment</Button>
        <Button variant="secondary" onClick={()=>dispatch({type:"RESET"})}>Reset</Button>
        <Button variant="link" onClick={()=>dispatch({type:"DEC"})}>Decrement</Button>
    </div>
  )
}

export default Reducer