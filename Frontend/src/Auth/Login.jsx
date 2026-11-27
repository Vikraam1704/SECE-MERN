import React, { useState } from 'react'

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(email === "vikraam@gmail.com" && password === "123456"){
        setMessage("Login Successfull");
    }
    else{
      setMessage("Invalid Login");
    }
  }
  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <label>Email : </label>
            <input type="email" 
            placeholder='Enter the Email'
            name = 'email'
            onChange={(e)=>setEmail(e.target.value)}
            />

            <br /> <br />
            <label>Password : </label>
            <input type="password"
            placeholder='Enter the Password' 
            name = 'password'
            onChange={(e)=>setPassword(e.target.value)}
            />

            <br /> <br />
            <button type='submit'>Submit</button>
        </form>
        <p>{message}</p>
    </div>
  )
}

export default Login