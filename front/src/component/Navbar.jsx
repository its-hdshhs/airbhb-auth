import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { SiAxios, SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { useContext } from 'react';
import  {authDataContext} from "../context/AuthContext"
import { userDataContext } from '../context/UserContext';



const Navbar = () => {


  const [showpopup, setshowPopup] = useState(false)

  const {userData, setuserData} = useContext(userDataContext)

 const navigate = useNavigate()

 const {serverUrl} = useContext(authDataContext)


 const logoutHandle= async()=>{
  try {
    const res = await axios.get(serverUrl + "/api/auth/logout",{withCredentials:true})
    
    setuserData(null)
    console.log(res)
    
  } catch (error) {
    console.log(error)
  }
 }

  return (
    <>

    <div className='w-[100vw] min-h-[80px] border-b-[1px] border-[#ffffff] px-[20px] flex items-center justify-between'>
      <div>
        <img src={logo} className='w-[130px] ' />
      </div>
       <div className='w-[35%] relative hidden md:block'>
        <input type='text' className='w-[100%] px-[30px] py-[10px] border-[2px] border-[#9c9090] outline-none overflow-auto rounded-[40px] text-[17px] ' placeholder='Any where | Any Location |Any city'/>
        <button className='absolute  p-[10px] rounded-[50px] bg-[red] right-[3%] top-[5px]'><IoSearch className='w-[20px] h-[20px] text-[white] ' /></button>
      </div>

      <div className='flex items-center justify-center gap-[10px] relative'>
        <span className='text-[18px] cursor-pointer rounded-[50px]  hover:bg-[#ded9d9] px-[8px] py-[5px] hidden md:block '>List your Home</span>
        <button className='px-[20px] py-[10px] flex items-center justify-center gap-[5px] border-[1px] border-[#8d8c8c] rounded-[50px] hover:shadow-lg' onClick={()=>setshowPopup(prev=>!prev)}>
          <span><GiHamburgerMenu className='w-[20px] h-[20px] ' /> </span>
       <span>   <CgProfile 
        className='w-[23px] h-[23px]'/> </span>
      { userData != null &&  <span className='w-[30px] h-[30px] bg-[#080808] text-[white] rounded-full flex items-center justify-center'>{userData?.name.slice(0,1)}</span> }
        </button>


      { showpopup && <div className='w-[220px] h-[250px] absolute bg-[white] top-[120%] right-[10%] border-[1px] border-[#aaa9a9] z-10 rounded-lg'>

          <ul className='w-[100%] h-[100%] text-[17px] flex items-start justify-around flex-col py-[10px]'>
            <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3]'
            onClick={()=>navigate("/login")}>Login</li>
            <li   className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer' onClick={logoutHandle}>Logout</li>

            <div className='w-[100%] h-[1px] bg-[#c1c0c0]'></div>
            <li  className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3]'>List your Home</li>
            <li  className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3]'>My Listing</li>
            <li  className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3]'>Check Booking</li>
          </ul>

        </div> }

      </div> 

    </div>
    
    <div className='w-[100%] flex items-center justify-center h-[60px]'>
     <div className='w-[80%] relative block md:hidden'>
        <input type='text' className='w-[100%] px-[30px] py-[10px] border-[2px] border-[#9c9090] outline-none overflow-auto rounded-[40px] text-[17px] ' placeholder='Any where | Any Location |Any city'/>
        <button className='absolute  p-[10px] rounded-[50px] bg-[red] right-[3%] top-[5px]'><IoSearch className='w-[20px] h-[20px] text-[white] ' /></button>
      </div>

      </div>


     <div className='w-[100vw] h-[85px] bg-[white] flex items-center justify-start cursor-pointer gap-[40px] overflow-auto px-[15px] md:justify-center'>

      <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
     <MdOutlineWhatshot className='w-[30px] h-[30px] text-black' />
     <h3>Trending</h3>
        </div>

         <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
     <GiFamilyHouse className='w-[30px] h-[30px] text-black' />
     <h3>Villas</h3>
        </div>

         <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] text-nowrap'>
          <FaTreeCity className='w-[30px] h-[30px] text-black ' />
     <h3>Farm House</h3>
        </div>


         <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] text-nowrap'>
     <MdOutlinePool className='w-[30px] h-[30px] text-black ' />
     <h3>Pool House</h3>
        </div>

         <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
     <MdBedroomParent className='w-[30px] h-[30px] text-black' />
     <h3>Rooms</h3>
        </div>

         <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
     <BiBuildingHouse className='w-[30px] h-[30px] text-black' />
     <h3>Flats</h3>
        </div>

         <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
     <IoBedOutline className='w-[30px] h-[30px] text-black' />
     <h3>PG</h3>
        </div>

         <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
     < GiWoodCabin className='w-[30px] h-[30px] text-black' />
     <h3>Cabins</h3>
        </div>

        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
     < SiHomeassistantcommunitystore className='w-[30px] h-[30px] text-black' />
     <h3>Stores</h3>
        </div>
        



        </div>

     </>
  )
}

export default Navbar
