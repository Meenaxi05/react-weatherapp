import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";
import DateTime from "./DateTime";

function TemperatureDetails() {
  const { data } = useContext(WeatherContext);
  return (
    <>
      <div className=" w-full p-1 rounded-md text-white font-medium flex items-center justify-around bg-section-overlay">
        <div className="icon flex flex-col justify-center items-center ">
          <h3>{data.location.name + " , " + data.location.country}</h3>
          <img src={data.current.condition.icon} alt="weathericon" />
          <h3 className="text-[15px] font-extralight capitalize">
            {data.current.condition.text}
          </h3>
        </div>

        <h1 className="text-6xl">{data.current.temp_c.toFixed()}°C</h1>
      </div>
      <DateTime />
    </>
  );
}

export default TemperatureDetails;
