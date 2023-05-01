import React from 'react'
import { Link } from 'react-router-dom'
import { Mainbar } from './Mainbar'
import { BestSeller } from './BestSeller'
export const Home = () => {
  return (
    <>
    
    <div className=" relative gradient mt-8  bg-gradient-to-r from-red-210  to-bluegrad min-h-[37rem] max-h-[37rem]  ">
      <div className="container">
        <div className=" container h-[700px]  border-2 overflow-hidden justify-center mx-auto gap-32 home-content flex  border-blue-500 ">
        <div className='min-w-[20rem] max-w-[27rem] mt-36  '>
<h2 className='text-white text-4xl font-semibold mb-8'> IPhone X</h2>
<p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, taknse labore non. Vero non autem ducimus facilis  maiori.</p>
<div className="btn mt-16 font-semibold text-white underline underline-offset-8  decoration-2 ">MORE</div>
    </div>
    <div>
    <img  className='mt-20 relative left-0' src="/public/imgs/iphonex_spacegray .png " alt="" />
    </div>
    </div>
    </div>
    <div  className="popup-cards  w-[80rem] grid z-10 grid-cols-3 absolute bottom-[-265px] right-1/2 translate-x-1/2 ">
      <div className="popup-card-1 pt-12 pl-7  col-span-1 bg-red-110 min-h-[17rem] ">
        <span className='card-title text-white font-bold text-2xl mb-5 inline-block '>IPhone 6 </span>
        <p className='description text-white w-[30ch]'> Lorem ipsum dolor  elit. Ab vero facere aliquam eum inventore </p>
        <span className="price text-gray-200 opacity-70   text-3xl inline-block mt-5 ">$399</span>
      </div>
      <div className="popup-card-2 p-8 bg-gray-100">
<img className='mx-auto mt-2 mb-12' src="/public/imgs/vr.png" alt="" />
<div className='flex text-3xl   text-gray-800 justify-between'>
<span className="title font-bold text-2xl  ">Oculus Rift</span>
<span className="price  text-3xl ">$349</span>
</div>
      </div>
      <div className="popup-card-3 bg-gray-400 pt-12 pl-7 text-gray-800 col-span-1 min-h-[17rem] ">
        <span className='card-title  mb-5 inline-block  font-bold text-2xl'>GoPro Hero 6</span>
        <p className='description  w-[20ch]'> Lorem ipsum dolor  elit. Ab vero facere aliquam eum inventore </p>
        <span className="price text-gray-800 bg-opacity-95 opacity-[.55]  text-3xl inline-block mt-5 ">$299</span>
      </div>
    </div>
    </div>
    <BestSeller/>
    </>
  )
}
