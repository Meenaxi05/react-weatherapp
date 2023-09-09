// import hotbg from './assets/hot.jpg'
import "./index.css";
import Description from "./components/Description";
import { useEffect, useState } from "react";
import axios from "axios";
import TemperatureDetails from "./components/TemperatureDetails";

import { WeatherContext } from "./components/WeatherContext";
import WeatherSearch from "./components/WeatherSearch";

function App() {
  const [city, setCity] = useState("Belgaum");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const key = `1d35dcc8063b4122ad764306233001`;
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=7`;

  useEffect(() => {
    try {
      axios.get(url).then((res) => {
        setData(res.data);
        setLoading(false);
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  return (
    <>
      <div className="bg-cover bg-center w-full h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900">
        {loading ? (
          <h1></h1>
        ) : (
          <div className=" h-screen w-full rounded-md text-white  bg-background-overlay font-medium flex items-center justify-evenly ">
            <div className="w-4/5 m-0 h-full flex item-center justify-evenly flex-col p-4">
              <WeatherSearch setCity={setCity} />
              <WeatherContext.Provider value={{ data }}>
                <TemperatureDetails />
                <div className="description"></div>
                <Description />
              </WeatherContext.Provider>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
