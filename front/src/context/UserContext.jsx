import React, { createContext, useContext, useEffect, useState } from 'react'
import {authDataContext} from "./AuthContext.jsx"
import axios from "axios"


export const userDataContext = createContext()
const UserContext = ({children}) => {

 const {serverUrl} = useContext(authDataContext)

 const [userData, setuserData] = useState(null)


  const getCurrentUser = async()=>{
    try {
        
        const res =await axios.get(serverUrl + "/api/user/currentuser",{withCredentials:true}
        )
        setuserData(res.data)
    } catch (error) {
         console.log(error.message)
    }
  }


  useEffect(() => {
   getCurrentUser()
  }, [])
  

    const value ={
        userData,
        setuserData

    }



  return (
    <div>
     <userDataContext.Provider value={value}>
      {children}
     </userDataContext.Provider>
      
    </div>
  )
}

export default UserContext
