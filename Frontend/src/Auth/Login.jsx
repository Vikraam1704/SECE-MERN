
import React, { useState } from 'react'
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user,setUser] = useState({
    email: "",
    password :""
  })

  const navigate =useNavigate();

  const userSchema = z.object({
    email : z.string().email("Invalid Email"),
    password : z.string().min(8,"Enter atleast 8 characters")
  })

  const handleChange = (e) =>{
      const {name,value} = e.target;
      setUser({...user,[name]:value});
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = userSchema.safeParse(user);
    if(data.success){
      alert("Login Successfull✔️");
      console.log(user);
      navigate('/dashboard');
    }
    else{
      alert(data.error.issues[0].message);
      console.log(data);
    }
  }
  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <label>Email : </label>
            <input type="email" 
            placeholder='Enter the Email'
            name = 'email'
            value = {user.email}
            onChange={(e)=>handleChange(e)}
            />

            <br /> <br />
            <label>Password : </label>
            <input type="password"
            placeholder='Enter the Password' 
            name = 'password'
            value = {user.password}
            onChange={(e)=>handleChange(e)}
            />

            <br /> <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Login