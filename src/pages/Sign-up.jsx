import {useEffect,createContext,useState,React} from "react";
import{Routes,Route, Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Home } from "./Components/Home";
import { Mainbar } from "../Components/Mainbar";

function Signup (){
  return (
    <>
    <div>
    <div className='p-10 w-128 border-2 mx-auto absolute top-1/2 right-1/2 translate-x-1/2 translate-y-[-50%]'>
        <h1 className="text-4xl font-semibold text-gray-800 mb-10">Create your account</h1>
     
        <form action="">
          <div  className=" input-container group relative  mb-12">
          <label className=" absolute  pointer-events-none text-gray-500 group-focus-within:text-black bottom-3 group-focus-within:bottom-8 font-light transition-all duration-300 " htmlFor="name">Name</label>
          <input id="name" className="p-2 font-light  border-gray-400  border-b outline-transparent w-full " type="text"  />
          </div>

          <div  className=" input-container group relative mb-12 ">
          <label className=" absolute  pointer-events-none text-gray-500 group-focus-within:text-black bottom-3 group-focus-within:bottom-8 font-light transition-all duration-300 " htmlFor="email">Email</label>
          <input id="email" className="p-2 font-light  border-gray-400  border-b outline-transparent w-full " type="email"  />
          </div>
          <div  className=" input-container group relative mb-12 ">
          <label className=" absolute  pointer-events-none text-gray-500 group-focus-within:text-black  bottom-3 group-focus-within:bottom-8 font-light transition-all duration-300 " htmlFor="password"> Password</label>
          <input id="password" className="p-2 font-light  border-gray-400  border-b outline-transparent w-full " type="password"  />
          </div>
          <div  className=" input-container group relative mb-12 ">
          <label className=" absolute  pointer-events-none text-gray-500 group-focus-within:text-black  bottom-3 group-focus-within:bottom-8 font-light transition-all duration-300 " htmlFor="confirm-password"> Confirm password</label>
          <input id="confirm-password" className="p-2 font-light  border-gray-400  border-b outline-transparent w-full " type="password"  />
          </div>
        

          <button className="btn bg-red-110 border border-red-110 hover:bg-white hover:text-red-110 py-2 pt-3 px-8 text-white transition duration-300 " type="submit" > SIGN UP </button>
    
        </form>
    </div>
    </div>
    </>
  )
}

export default Signup;