import PropTypes from 'prop-types';
import { useContext } from 'react';

import{FaArrowDown , FaArrowUp, FaWind} from 'react-icons/fa'
import {MdOutlineWaterDrop} from 'react-icons/md'
import { WeatherContext } from './WeatherContext';

function Description() {
    const {data} = useContext(WeatherContext)

  return (
    <div className='section_description grid grid-cols-2 gap-10'>
        <div className="flex flex-col item-center justify-between bg-section-overlay p-4 rounded-md">
            <div className="w-full flex flex-row items-center justify-center gap-[5px] mb-3">
                <FaArrowDown/>
                <small className='capitalize'>min</small>
            </div>
            <h2 className='text-center'>{data.forecast.forecastday[0].day.mintemp_c.toFixed()}°C</h2>
        </div>
        <div className="flex flex-col item-center justify-between bg-section-overlay p-4 rounded-md">
        <div className="w-full flex flex-row items-center justify-center gap-[5px] mb-3">
                <FaArrowUp/>
                <small className='capitalize'>max</small>
            </div>
            <h2 className='text-center'>{data.forecast.forecastday  [0].day.maxtemp_c.toFixed()}°C</h2>
        </div>
        <div className="flex flex-col item-center justify-between bg-section-overlay p-4 rounded-md">
        <div className="w-full flex flex-row items-center justify-center gap-[5px] mb-3">
                <FaWind/>
                <small className='capitalize'>wind</small>
            </div>
            <h2 className='text-center'>{data.current.wind_mph.toFixed()}m/s </h2>
        </div>
        <div className="flex flex-col item-center justify-between bg-section-overlay p-4 rounded-md">
        <div className="w-full flex flex-row items-center justify-center gap-[5px] mb-3">
                <MdOutlineWaterDrop/>
                <small className='capitalize'>humidity</small>
            </div>
            <h2 className='text-center'>{data.current.humidity}%</h2>
        </div>
    </div>
  )
}

Description.propTypes ={
data:PropTypes.shape({
    forecast:PropTypes.shape({
        forecastday :PropTypes.arrayOf(
            PropTypes.shape({
                day:PropTypes.shape({
                        mintemp_c:PropTypes.number,
                        maxtemp_c:PropTypes.number,               
                }),
            })
        ),
    }),
    current:PropTypes.shape({
        wind_mph:PropTypes.number,
        humidity:PropTypes.number,
    }),
}),
}

export default Description