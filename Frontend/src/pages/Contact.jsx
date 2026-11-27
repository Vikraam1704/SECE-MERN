
import React, { useContext } from 'react'
import NameContext from '../Hooks/NameContext';
const Contact = () => {
  const {name} = useContext(NameContext);
  return (
    <div>Name : {name}</div>
  )
}

export default Contact