import { useContext } from "react"
import { WeatherContext } from "./WeatherContext"

function DateTime() {
    const {data} = useContext(WeatherContext)
  return (
  <>
  <div className="text-center items-center justify-center text-3xl font-semibold ">
    {
        new Date (data.location.localtime).toLocaleString("en-us", {
            weekday:"long",
            month: "short",
            day:"numeric",
            year: "numeric",
            hour: "numeric",
            hour12:"true",
            minute:"numeric",
        })
    }
  </div>
  </>
  )
}

export default DateTime
