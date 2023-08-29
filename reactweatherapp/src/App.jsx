// import hotbg from './assets/hot.jpg'
import './index.css'
import Description from './components/Description'
import { useEffect, useState } from 'react'
import axios from 'axios'
import TemperatureDetails from './components/TemperatureDetails'

import { WeatherContext } from './components/WeatherContext'
import WeatherSearch from './components/WeatherSearch'
// import WeatherSearch from './components/WeatherSearch'

function App() {
  const [city, setCity] = useState('Belgaum')
  const [data, setData] = useState([]);
  const [loading, setLoading]= useState(true);
  const key = `1d35dcc8063b4122ad764306233001`;
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=7`

  useEffect(()=>{
      try{
        axios.get(url).then((res) => {
          setData(res.data)
          setLoading(false)
          console.log(res.data);
        });
       }
        catch(error){console.log(error);}
    },[url]);


  return (
    <>
<div className='bg-cover bg-center w-full h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900' >
  {loading ?(
    <h1></h1>
  ):(
    <div className=" h-screen w-full rounded-md text-white  bg-background-overlay font-medium flex items-center justify-evenly ">
    <div className="w-4/5 m-0 h-full flex item-center justify-evenly flex-col p-4">
    {/* <div className="w-full p-4 rounded-md text-white font-medium flex items-center justify-around bg-section-overlay ">
    <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder='Enter city' className='bg-transparent p-2 text-xl font-extralight w-[70%] rounded-md border-white border-0.8px border-0'/>
    <button className='py-[10px] px-5 rounded-[0.4rem] text-xl font-medium text-black bg-white cursor-pointer hover:bg-gray-300 outline-none'>Search</button>
  </div> */}
      <WeatherSearch setCity={setCity}/>
      <WeatherContext.Provider value={{data}}>
      <TemperatureDetails/>
      <div className="description"> 
      </div>
      <Description />
      </WeatherContext.Provider>
    </div>
  </div>
  )}
  </div>
</>
  )
} 


export default App