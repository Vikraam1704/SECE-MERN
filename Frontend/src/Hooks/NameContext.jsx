import React, { createContext } from 'react'

const NameContext = createContext();
export const ContextProvider = ({children}) => {
    let data = {name : "vikraam"};
  return (
    <NameContext.Provider value={data}>
        {children}
    </NameContext.Provider>
  )
}

export default NameContext