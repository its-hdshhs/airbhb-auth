import React, { Children, createContext } from 'react'

export const authDataContext = createContext()

const AuthContext = ({children}) => {
    const serverUrl = "https://airbhb-auth-production.up.railway.app/"
    const value ={
        serverUrl
    }
  return (
    
        <authDataContext.Provider value={value}>
            {children}
        </authDataContext.Provider>
      
  
  )
}

export default AuthContext
