
import React from 'react'
import Card from '../component/card';
import Card2 from '../component/card2';
import { TiWeatherWindy } from "react-icons/ti";
import { GiDrop } from "react-icons/gi";
import { FaMoon } from "react-icons/fa";

const Home = () => {
   
  return (
    <>
    <div className='p-12 flex' style={{backgroundImage: `url(${require("../assets/sunset.jpg")})`,backgroundRepeat:"no-repeat", backgroundSize:"cover", width:"100%",height:"100vh"}}>
    <div className='rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 border-solid border-4 border-slate-600 w-9/12 h-full p-4 ml-2'>
   <div className='flex p-6 justify-between '>
    <h2>City Name</h2>
    <p>Date</p>
    <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="w-6/15" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
  </svg>
</label>
<FaMoon/>
   </div>
   <div className='border-amber-500 border-solid  p-2 flex flex-row justify-center items-center m-4'>
   <div>
   <span className='text-9xl'>20</span>
   <h2 className="text-3xl">Cloudy</h2>
   </div>
    <div className="p-6">
    <p className="mb-4"><TiWeatherWindy size={40}/> 6.1mp</p>
    <p><GiDrop size={40}/>90%</p>
    </div>
   </div>
      <div className="flex mt-8">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
    {/* small div */}
    <div className='rounded-xl  bg-gradient-to-r from-sky-500 to-indigo-500 w-3/12 h-full p-6'>
    <h2 className='m-6 text-4xl'>Good Morning</h2>
    <h4 className='m-6 text-2xl'>Time</h4>
    <div className='flex flex-row justify-center items-center m-6Q'>
    <div className='mr-4'>
    <span className="text-5xl">20</span>
    <h2 className="text-2xl">Cloudy</h2>
    </div>
    <div>
    <p><TiWeatherWindy/> 6.1mp</p>
    <p><GiDrop/>90%</p>
    </div>
   </div>

   <div className='flex '>
   <Card2/>
   <Card2/>
   <Card2/>
   <Card2/>
   </div>
</div>

    </div>
    </>
  )
}

export default Home
