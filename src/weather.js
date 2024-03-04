// get wetaher data

  
  async function getforcast(city){

        const forcast=  await fetch(`http://api.weatherapi.com/v1/forecast.json?key=436674fa18c0444fba4113519240203&q=${city}&days=3`,{mode:"cors"})
       if(forcast.status === 400){
        throw new Error ("can't fetch the data")
       }
        const data = await forcast.json();
        return data
    
   
   
  }

async function component(city){
    const request = getforcast(city)
    
    const currentWeather = await request.then(data=>{

        console.log(data.current)}
        );
        
    const forcastDays = await request.then(data=>{
            console.log(current)}
            );

    const location = await request.then(current=>{
                console.log(current)}
                );
        
        
}
 
const obj = getforcast('addis')
.then(data=>{console.log(data)})
.catch(err=>{console.log(err.message)})
  console.log(obj)

  // console.log(data.then(lo=>{
  //   console.log(lo.location)
  // }))
  //console.log(getforcast('3')
  
  export {getforcast}