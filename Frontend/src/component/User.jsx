import axios from "axios";
import { useEffect, useState } from "react"

const User = () =>{
    const [users,setUsers] = useState([]);
    const fetchData = async() => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(res.data);
    }
    useEffect(()=>{
        fetchData();
    },[])
    return(
        <div>
            <ul>
                {users.map((user)=>(
                    <li key={user.id}>Name : {user.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default User