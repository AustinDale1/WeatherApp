import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState("test");
  const [isClicked, setIsClicked] = useState(false);
  const [search, setSearch] = useState("Statesboro")
  const [cityName, setCityName] = useState("Statesboro")
  const [is404, setIs404] = useState(false)
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Statesboro&units=imperial&APPID=5d3ec6e3e5ab7fcc6ad1fb6e70664f61"

  const apiKey = "52a8289975620455d5d7cb1ba6bcf616";

  function handleClick(e){
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&APPID=5d3ec6e3e5ab7fcc6ad1fb6e70664f61`).then((response) => {
      setData(response.data)
      console.log(response.data)
      setIsClicked(true);
      console.log(search)
      console.log(data)
      setCityName(search)
    })
  }

  if(!isClicked) {
    handleClick();
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(search === ""){
        return
    }
    handleClick()
  }

  const handleChange = (value) => {
      let tempSearch = search
      tempSearch = value
      setSearch(tempSearch)
  }

  return (
    <div className="App">
      {!is404? 
        <div>
           {isClicked?(
        <div className='maina'>
          <header>
            <div className='searchBox'>
              <form onSubmit={handleSubmit} className='loginForm'>
                <label className='passwordBox'>
                  <input 
                    type="text" 
                    name="city" 
                    placeholder="search city here"
                    onChange={(e) => {handleChange(e.target.value)}}
                  />
                 </label>
                <input type="submit" />
              </form>
            </div>
            <p>Weather by Austin Dale</p>
          </header>
          <aside className='left'>
            <p>Hourly</p>
          </aside>  
          <body className='maindub'>
            <div className="">
              {data.main?(
                <>
                  <h1>{cityName} Current temp {data.main.temp}</h1>
                  {data.weather?(<h2>Current weather {data.weather[0].main}</h2>) : <p>weather messed up</p>}             
                  <h2>Current speed {data.wind.speed}</h2>
                  <h2>Feels like {data.main.feels_like}</h2>
                  <h2>Current humidity {data.main.humidity}</h2>
                </>
              ) : (
                <></>
              )}
            </div>
          </body>
          <aside className='right'>
            <p>10 Day</p>
          </aside>  
          <footer>
          <a href="https://github.com/AustinSoar">GitHub</a>
          </footer>
       </div>
      ) : (
            <></>
          )}
        </div>
      : <div>Please check spelling of city</div>}
     
    </div>
  );
}

export default App;
