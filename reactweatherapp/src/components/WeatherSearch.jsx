// import { useContext } from 'react';
// import { WeatherContext } from "./WeatherContext";

import PropTypes from 'prop-types';

import { useState } from "react"


function WeatherSearch({setCity}) {
  const [cityInput, setCityInput] = useState("")

  const handleSearch = () =>{
    setCity(cityInput)
  }
    // const {setCity} = props

    // const enterKeyPressed = (e) =>{
    //     if(e.keyCode === 13 ){
    //       setCity(e.currentTarget.value)
    //       e.currentTarget.blur() 
    //     }
    //   } 

  return (
    <> <div className="w-full p-4 rounded-md text-white font-medium flex items-center justify-around bg-section-overlay ">
    <input onChange={(e) => setCityInput(e.target.value)} value={cityInput} type="text" name="city" placeholder='Enter city' className='bg-transparent p-2 text-xl font-extralight w-[70%] rounded-md border-white border-0.8px border-0'/>
    <button onClick={handleSearch} className='py-[10px] px-5 rounded-[0.4rem] text-xl font-medium text-black bg-white cursor-pointer hover:bg-gray-300 outline-none'>Search</button>
  </div>
  </>
  )
}

WeatherSearch.propTypes ={
  setCity:PropTypes.string
}

export default WeatherSearch
