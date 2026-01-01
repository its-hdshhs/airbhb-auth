
import { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import {useNavigate} from "react-router-dom"
import { useContext } from 'react';
import {authDataContext} from "../context/AuthContext"
import axios from "axios"
import { userDataContext } from '../context/UserContext';


const Login = () => {
     
   const [show, setshow] = useState(false)
   const navigate = useNavigate()


   const {userData, setuserData}= useContext(userDataContext)
  
     const {serverUrl} = useContext(authDataContext)
  
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
  



     const handleLogin = async(e)=>{
        e.preventDefault()
        try {
         
         const res = await axios.post(`${serverUrl}/api/auth/login`,{
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
    <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
        <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[10%] left-[20px] rounded-[50%] flex items-center justify-center' onClick={() => navigate("/")
            }><FaArrowLeft className='w-[25px] h-[25px] text-white ' /></div>
       <form action="" className='max-w-[900px] w-[90%] h-[600px] flex items-center
        justify-center  flex-col md:items-start gap-[10px] 'onSubmit={handleLogin}>
          <h1 className='text-[30px] text-black font-bold'>Welcome to Airbnb</h1>
         <div className=' w-[90%] flex items-start justify-start flex-col gap-[10px]  '>
        <label htmlFor='email' className='text-[20px]'>Email</label>
        <input required onChange={(e)=>setEmail(e.target.value)} type='text' id='email' className='w-[90%] h-[40px] border-[2px] border-s-black rounded-lg text-[18px] px-[20px]'/>
        </div>

        <div className=' w-[90%] flex items-start justify-start flex-col gap-[10px] relative'>
        <label htmlFor='password'  className='text-[20px]' >Password</label>
        <input required onChange={(e)=>setPassword(e.target.value)} type={show?"text":"password"} id='password' className='w-[90%] h-[40px] border-[2px] border-s-black rounded-lg text-[18px] px-[20px] '/>
        {!show && <FaEye className='w-[22px] h-[22px] absolute right-[12%] bottom-[10px]' onClick={()=>setshow(prev=>!prev)}/>}
        {show && <FaEyeSlash className='w-[22px] h-[22px] absolute right-[12%] bottom-[10px]' onClick={()=>setshow(prev=>!prev)} />}

        </div>
       <button className='px-[50px] py-[10px] bg-[red] text-white text-[18px] md:px-[100px] rounded-lg'>Login</button>
        <p>Create New Account? <span className='text-[19px] text-[red] cursor-pointer'onClick={()=>navigate("/signup")}>Signup</span></p>
       </form>
    </div>
  )
}

export default Login
