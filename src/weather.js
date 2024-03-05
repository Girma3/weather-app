// get wetaher data

async function getforcast (city) {
  const forcast = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=436674fa18c0444fba4113519240203&q=${city}&days=3`, { mode: 'cors' })
  if (forcast.status === 400) {
    throw new Error("can't fetch the data")
  }
  const data = await forcast.json()
  return data
}

function bigCard (obj) {
  const card = `
  <div class="card">
      <div class="header">  
            <h1 class="skeleton t skeleton-text">${obj.location.name}, ${obj.location.country}</h1>
            <h2 class="skeleton temprature skeleton-text">${obj.current.feelslike_c}&#8451</h2>
           <div class="rainy-day">${chooseicon(obj)} </div>
        <div class="suggest-info">
          <h3 class="skeleton skeleton-text">${obj.current.condition.text}</h3>
        </div>
      </div>
    


<div class="wind">
            <div class="humidity skeleton skeleton-text" data-humidity>humidity ${obj.current.humidity}</div> 
            <div class="wind skeleton skeleton-text" data-wind-speed>wind speed ${obj.current.wind_kph}k/hr</div> 
            <div class="pressure skeleton skeleton-text" data-direction>wind-directio ${obj.current.wind_dir}</div> 
            <div class="pressure skeleton skeleton-text" data-pressure>pressure ${obj.current.pressure_mb}</div> 
        </div>
    </div>
  `
  return card
}
// console.log(data.then(lo=>{
//   console.log(lo.location)
// }))
// console.log(getforcast('3')

function chooseicon (obj) {
  console.log(obj.current.condition.code)
  const code = obj.current.condition.code
  let final
  // thunder and cloud rain
  if (code === 1273 || code === 1276 || code === 1279 || code === 1282) {
    console.log('whyyyyy')
    console.log(obj.current.condition.code)
    console.log((obj.current.condition.code) === 1273 || (obj.current.condition.code === 1276))
    final = `
       <div class="sky header__img skeleton">
       <svg xmlns="http://www.w3.org/2000/svg"
             viewBox=" 0 0 640 512" width = "100px" height="100px" class="sloud-svg" stroke="black" fill = "white">
             <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/>
       </svg>
       </div>
  <i class="fas fa-bolt bolt fa-2x"></i>
  <div class="rain skeleton"> 
  <span class="rain-drops"  data-drops></span>   
  <span class="rain-drops"  data-drops></span> 
  <span class="rain-drops"  data-drops></span>   
  <span class="rain-drops"  data-drops></span> 
  <span class="rain-drops"  data-drops></span> 
  <span class="rain-drops"  data-drops></span> 
  <span class="rain-drops"  data-drops></span> 
  <span class="rain-drops"  data-drops></span> 
  <span class="rain-drops"  data-drops></span> 
  <span class="rain-drops"  data-drops></span>
  <span class="rain-drops"  data-drops></span> 
  <span class="rain-drops"  data-drops></span> 
  <span class="rain-drops"  data-drops></span> 
  <span class="rain-drops"  data-drops></span> 
  <span class="rain-drops"  data-drops></span> 
  <span class="rain-drops"  data-drops></span> 
  <span class="rain-drops"  data-drops></span> 
  <span class="rain-drops"  data-drops></span> 
</div>  
`
  }
  // snow sleet/shower
  else if (code === 1264 || code === 1261 || code === 1258 || code === 1255 ||
      code === 1252 || code === 1249 || code === 1237 || code === 1225 ||
      code === 1222 || code === 1219 || code === 1216 || code === 1213 || code === 1210) {
    final = `
  <div class="sky header__img skeleton">
     <svg xmlns="http://www.w3.org/2000/svg"
        viewBox=" 0 0 640 512" width = "100px" height="100px" class="sloud-svg" stroke="black" fill = "white">
        <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/>
     </svg>
   </div>
  <div class="rain skeleton"> 
    <span class="snow"  data-drops><i class="fa-regular fa-snowflake"></i></span>   
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span>   
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span>
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops><i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
</div>  
`
  }
  // rain shower,rain ,rain drizzle
  else if (code === 1063 || code === 1246 || code === 1243 || code === 1240 || code === 1180 || code === 1171 ||
     code === 1168 || code === 1153 || code === 1150 || code === 1195 || code === 1192 ||
     code === 1189 || code === 1186 || code === 1183) {
    final = ` 
    <div class="sky header__img skeleton">
      <svg xmlns="http://www.w3.org/2000/svg"
          viewBox=" 0 0 640 512" width = "100px" height="100px" class="sloud-svg" stroke="black" fill = "white">
            <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/>
      </svg>
    </div>

  <div class="rain skeleton"> 
    <span class="rain-drops"  data-drops></span>   
    <span class="rain-drops"  data-drops></span> 
    <span class="rain-drops"  data-drops></span>   
    <span class="rain-drops"  data-drops></span> 
    <span class="rain-drops"  data-drops></span> 
    <span class="rain-drops"  data-drops></span> 
    <span class="rain-drops"  data-drops></span> 
    <span class="rain-drops"  data-drops></span> 
    <span class="rain-drops"  data-drops></span> 
    <span class="rain-drops"  data-drops></span>
    <span class="rain-drops"  data-drops></span> 
    <span class="rain-drops"  data-drops></span> 
    <span class="rain-drops"  data-drops></span> 
    <span class="rain-drops"  data-drops></span> 
    <span class="rain-drops"  data-drops></span> 
    <span class="rain-drops"  data-drops></span> 
    <span class="rain-drops"  data-drops></span> 
    <span class="rain-drops"  data-drops></span> 

  </div> 
`
  }
  // sunny
  else if (code === 1000) {
    final = `
      <div class="sky header__img skeleton">
      <svg xmlns="http://www.w3.org/2000/svg"
          viewBox=" 0 0 640 512" width = "100px" height="100px" class="sloud-svg" stroke="black" fill = "white">
          <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/>
        </svg>
      </div>
      <div class="rain skeleton"> 
        <div class="sun"></div> `
  }
  // partly cloudy
  else if (code === 1003) {
    console.log('heyyyy')
    final = ` 
  <div class="sky header__img skeleton">
      <svg xmlns="http://www.w3.org/2000/svg"
         viewBox=" 0 0 640 512" width = "100px" height="100px" class="loud-svg " stroke="black" fill = "white">
           <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/>
       </svg>
       <svg xmlns="http://www.w3.org/2000/svg"
          viewBox=" 0 0 640 512" width = "100px" height="100px" class="loud-svg second-cloud" stroke="black" fill = "whitesmoke">
          <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/>
        </svg>
    </div>
    <div class="rain skeleton"> 
    <div class="sun partly-cloud"></div>
    </div>`
  }
  // cloudy ,fog
  else if (code === 1006 || code === 1030 || code === 1009 || code === 1006 || code === 1147 || code === 1135) {
    final = ` 
   
       <div class="sky header__img skeleton">
        <svg xmlns="http://www.w3.org/2000/svg"
              viewBox=" 0 0 640 512" width = "70px" height="100px" class="loud-svg cloudy-first" stroke="black" fill = "white">
               <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/>
        </svg>
      
       <svg xmlns="http://www.w3.org/2000/svg"
               viewBox=" 0 0 640 512" width = "70px" height="100px" class="loud-svg cloudy-second" stroke="black" fill = "white">
              <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/>
        </svg>
    </div>`
  }
  // blizard
  else if (code === 1117 || code === 1114) {
    final = `
    <div class="sky header__img skeleton">
    <svg xmlns="http://www.w3.org/2000/svg"
        viewBox=" 0 0 640 512" width = "100px" height="100px" class="sloud-svg" stroke="black" fill = "white">
        <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/>
     </svg>
      </div>
    <div class="winds">
      <i class="fa-solid fa-wind"></i>
      <i class="fa-solid fa-wind"></i>
      <i class="fa-solid fa-wind"></i>
    </div>
 <div class="rain skeleton"> 
    <span class="snow"  data-drops><i class="fa-regular fa-snowflake"></i></span>   
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span>   
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span>
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops><i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
 </div> 
</div>`
  }
  // snow rain
  else if (code === 1087 || code === 1072 || code === 1069 || code === 1066) {
    final = ` 
   <div class="sky header__img skeleton">
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox=" 0 0 640 512" width = "100px" height="100px" class="sloud-svg" stroke="black" fill = "white">
         <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/>
      </svg>
    </div>
  <div class="rain skeleton"> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="rain-drops"  data-drops></span>   
    <span class="rain-drops"  data-drops></span> 
    <span class="rain-drops"  data-drops></span>   
    <span class="rain-drops"  data-drops></span> 
    <span class="rain-drops"  data-drops></span>
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span>  
    <span class="rain-drops"  data-drops></span> 
    <span class="rain-drops"  data-drops></span>
    <span class="rain-drops"  data-drops></span> 
    <span class="snow"  data-drops> <i class="fa-regular fa-snowflake"></i></span> 
    <span class="rain-drops"  data-drops></span> 
    <span class="rain-drops"  data-drops></span> 
    <span class="rain-drops"  data-drops></span> 
    <span class="rain-drops"  data-drops></span>   
    <span class="rain-drops"  data-drops></span> 
  </div>`
  }
  return final
}
export { getforcast, bigCard }
