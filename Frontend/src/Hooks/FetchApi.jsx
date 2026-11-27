import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const [users,setUsers] = useState([]);
    const [count,setCount] = useState(0);
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((res)=>res.json())
    //     .then((data)=>setUsers(data))
    //     .catch((err)=>console.log(err))
    // },[])

    useEffect(()=>{
        const run = setInterval(()=>{
            setCount(prev => prev+1)
        },1000)
        return ()=>clearInterval(run)
    },[])
  return (
    <div>
        <h1> Count : {count}</h1>
        {/* {users.map((user,index)=>
            <div key={user.id}>
                <h1>Name : {user.name}</h1>
                <h2>User Name : {user.username}</h2>
            </div>
        )} */}
    </div>
  )
}
export default FetchApi