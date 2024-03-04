
import './style.css'
import { getforcast} from "./weather.js";
const input = document.querySelector("[data-city-input]")
const submitBtn = document.querySelector('[data-submit-location]');
const  drops = document.querySelectorAll('[data-drops]')
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const cityName = input.value;
    console.log(cityName)
    if(cityName == "")return
   console.log(getforcast('addis').currn)
  

})
function random(){
    let num = Math.floor(Math.random() * 3.5)
    return num
}
console.log(random())
for(let i = 0;i < drops.length;i++){
drops[i].style.animationDuration = `${random()}s`
}

