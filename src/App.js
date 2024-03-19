import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState("test");
  const [isClicked, setIsClicked] = useState(false);
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Statesboro&units=imperial&APPID=5d3ec6e3e5ab7fcc6ad1fb6e70664f61"

  const apiKey = "52a8289975620455d5d7cb1ba6bcf616";

  function handleClick(e){
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setIsClicked(true);
  }

  if(!isClicked) {
    handleClick();
  }

  return (
    <div className="App">
      {isClicked?(
        <div className='maina'>
          <header>
            <p>Weather by Austin Dale</p>
          </header>
          <aside className='left'>
            <p>Hourly</p>
          </aside>  
          <body className='maindub'>
            <div className="">
              {data.main?(
                <>
                  <h1>Current temp {data.main.temp}</h1>
                  {data.weather?(<p>Current weather {data.weather[0].main}</p>) : <p>weather messed up</p>}             
                  <p>Current speed {data.wind.speed}</p>
                  <p>Feels like {data.main.feels_like}</p>
                  <p>Current humidity {data.main.humidity}</p>
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
          <p>https://github.com/AustinSoar</p>
          </footer>
       </div>
      ) : (
            <></>
          )}
    </div>
  );
}

export default App;
