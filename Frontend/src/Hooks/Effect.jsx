import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count,setCount] = useState(0);
    const [like,setLike] = useState(0);
    useEffect(()=>{
        console.log("Component Rendered")
    },[count])
  return (
    <div>
        <p>Count : {count}</p>
        <button onClick={()=>setCount(count+1)}>Inc</button>
        <p>Like : {like}</p>
        <button onClick={()=>setLike(like+1)}>Inc</button>
    </div>
  )
}

export default Effect