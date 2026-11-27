import React from 'react'
import Child from './Child'
const Parent = () => {
  return (
    <div>
        <Child name="vikraam"
        email ="vikraam@example.com"
        mobile = {9876543210}
        mark = {[99,98,97,87,95]}
        dept = {{
            PL : "JavaScript",
            Stack : "MERN"
        }}
        isActive = {true}
        />
        <Child name="Vinothan"
        email = "vino@example.com"
        mobile = {1234567890}
        mark = {[99,98,97,87,95]}
        dept = {{
            PL : "JavaScript",
            Stack : "MERN"
        }}
        isActive = {false}
        />
    </div>
  )
}

export default Parent