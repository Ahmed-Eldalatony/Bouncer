import React from 'react'
import '../style/index.css'
import { Link,Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import {faMagnifyingGlass,faBasketShopping} from '@fortawesome/free-solid-svg-icons'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export const Mainbar = () => {
  return (
    <>
    <nav className='nav-tools flex justify-around h-10  items-center '>
        <div className="nav-right">
    <select name="languages" id="languages">
        <option value="English">EN</option>
        <option value="Arabic">AR</option>
</select>
    <select name="Currency" id="Currency">
        <option value="English">USD</option>
        <option value="Arabic">EGP</option>
</select>
</div>
<div className="search p-1 mr-8"><FontAwesomeIcon icon={faMagnifyingGlass} />
<input type="search" /></div> 
<div className="nav-left flex">

    <div  className='p-1 mr-8 hover:opacity-60 transition duration-300  '><Link to="/sign-in">
        <FontAwesomeIcon icon={faUser} /> Sign in  </Link> 
        </div> 
    {/* <div className="my-profile">
         <Link > <FontAwesomeIcon icon={faUser} />My profile</Link>

        </div> */}
        <div className='nav-btn-cart p-1 mr-8'><Link to={"cart"} > 
        <FontAwesomeIcon icon={faBasketShopping} />
        <span className='ml-2'>0</span> Items
         <span className='text-gray-400 opacity-80 ml-2  '>$0.00</span> </Link> </div>
     
        
</div>


    </nav>
    <hr />
    <h1 className='text-red-210 letter-space tracking-wider  my-8 mx-auto w-fit font-bold text-4xl'>
       <Link to={'/'}> BOUNCER </Link>
        </h1>
        <nav className='flex justify-center w-full'>
            <ul className='flex w-[50rem]  justify-between '>
                <li><Link>HOME</Link></li>
                <li><Link>STORE</Link></li>
                <li><Link>IPHONE</Link></li>
                <li><Link>IPAD</Link></li>
                <li><Link>MACBOOK</Link></li>
                <li><Link>ACCESORI</Link></li>
            </ul> 
        </nav>
<Outlet/>
    </>
  )
}
