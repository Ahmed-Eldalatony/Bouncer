import {useEffect,createContext,useState,React} from "react";
import{Routes,Route, Link} from "react-router-dom"
export const BestSeller = () => {

  const [isActive, setIsActive] = useState(false);
  
  const handleClick = event => {
    
    setIsActive(current => !current);
  }
  return (
    <>
    <div className='mt-96'>
        <h1 className='text-4xl w-fit text-gray-800  mx-auto uppercase'> Best Seller</h1>
    
    
        <nav className='flex justify-center w-full mt-12'>
            <ul className='flex w-[50rem]  justify-between '>   {/* Set The width of the element to 100% */ }
                <li className="relative" ><Link className={`sudo-el  ${ isActive ? ' before:!w-full' : ''}` } onClick={handleClick}>All</Link></li>
                <li className="relative" ><Link className={`sudo-el  ${ isActive ? ' before:!w-full' : ''}` } onClick={handleClick}>Mac</Link></li>
                <li className="relative" ><Link className={`sudo-el  ${ isActive ? ' before:!w-full' : ''}` } onClick={handleClick}>iPhone</Link></li>
                <li className="relative" ><Link className={`sudo-el  ${ isActive ? ' before:!w-full' : ''}` } onClick={handleClick}>iPAD</Link></li>
                <li className="relative" ><Link className={`sudo-el  ${ isActive ? ' before:!w-full' : ''}` } onClick={handleClick}>iPod</Link></li>
                <li className="relative" ><Link className={`sudo-el  ${ isActive ? ' before:!w-full' : ''}` } onClick={handleClick}>Accessorie</Link></li>
            </ul> 
        </nav>
    
    </div>
    </>
  )
}
