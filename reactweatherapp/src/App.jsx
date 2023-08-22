import hotbg from './assets/hot.jpg'
import coldbg from './assets/cold.jpg'
import './index.css'
import Description from './components/Description'
function App() {

  return (
<div className='app' style={{backgroundImage:`url(${hotbg})` }}>
  <div className="overlay">
    <div className="container">
      <div className="section section_input">
        <input type="text" name="city" placeholder='Enter city' />
        <button>°C</button>
      </div>
      <div className="section section_temperature">
        <div className="icon">
          <h3>Bangalore, IN</h3>
          <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="weathericon" />
          <h3>Cloudy</h3>
        </div>

        <div className="temperature">
          <h1>34°C</h1>
        </div>
      </div>

      {/* <div className="description"> </div> */}
      <Description/>
    </div>
  </div>
</div>
  )
}

export default App
