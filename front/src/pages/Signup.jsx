import { useContext, useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import {useNavigate} from "react-router-dom"
import {authDataContext}from "../context/AuthContext"
import axios from "axios"
import { userDataContext } from '../context/UserContext';

const Signup = () => {
   
   const [show, setshow] = useState(false)
   const navigate = useNavigate()

   const {serverUrl} = useContext(authDataContext)


   const {userData, setuserData} = useContext(userDataContext)

   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const handleSignup = async(e)=>{
     e.preventDefault()
     try {
      
      const res = await axios.post(serverUrl + "/api/auth/signup",{
        name,
        email,
        password
      },{withCredentials:true})
      setuserData(res.data)
      navigate("/")
      console.log(res)
      
     } catch (error) {
        console.log(error.message)
     }
   }

  return (
     <div className='w-[100vw] h-[100vh] flex items-center justify-center relative'>
      <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[10%] left-[20px] rounded-[50%] flex items-center justify-center' onClick={() => navigate("/")
      }><FaArrowLeft className='w-[25px] h-[25px] text-white ' /></div>
      <form action="" className='max-w-[900px] w-[90%] h-[600px] flex items-center
        justify-center  flex-col md:items-start gap-[10px]' onSubmit={handleSignup}>
        <h1 className='text-[30px] text-black font-bold'>Welcome to Airbnb</h1>
        <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] mt-[30px]'>
          <label htmlFor='name' className='text-[20px]'>UserName</label>
          <input onChange={(e)=>setName(e.target.value)} value={name} required type='text' id='name' className='w-[90%] h-[40px] border-[2px] border-black rounded-lg text-[18px] px-[20px]' />
        </div>
        <div className=' w-[90%] flex items-start justify-start flex-col gap-[10px]  '>
          <label htmlFor='email' className='text-[20px]'>Email</label>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} required type='text' id='email' className='w-[90%] h-[40px] border-[2px] border-black rounded-lg text-[18px] px-[20px]' />
        </div>

        <div className=' w-[90%] flex items-start justify-start flex-col gap-[10px] relative'>
          <label htmlFor='password' className='text-[20px]' >Password</label>
          <input onChange={(e)=>setPassword(e.target.value)} value={password} required type={show ? "text" : "password"} id='password' className='w-[90%] h-[40px] border-[2px] border-black rounded-lg text-[18px] px-[20px] ' />
          {!show && <FaEye className='w-[22px] h-[22px] absolute right-[12%] bottom-[10px]' onClick={() => setshow(prev => !prev)} />}
          {show && <FaEyeSlash className='w-[22px] h-[22px] absolute right-[12%] bottom-[10px]' onClick={() => setshow(prev => !prev)} />}

        </div>

        <button className='px-[50px] py-[10px] bg-[red] text-white text-[18px] md:px-[100px] rounded-lg'>Signup</button>

        <p>Already have a account? <span className='text-[19px] text-[red] cursor-pointer' onClick={() => navigate("/login")}>Login</span></p>
      </form>
    </div>
  )
}


export default Signup
