
function WeatherSearch() {
  return (
    <> <div className="w-full p-4 rounded-md text-white font-medium flex items-center justify-around bg-section-overlay ">
    <input type="text" name="city" placeholder='Enter city' className='bg-transparent p-2 text-xl font-extralight w-[70%] rounded-md border-white border-0.8px border-0'/>
    <button className='py-[10px] px-5 rounded-[0.4rem] text-xl font-medium text-black bg-white cursor-pointer hover:bg-gray-300 outline-none'>Search</button>
  </div>
  </>
  )
}

export default WeatherSearch
