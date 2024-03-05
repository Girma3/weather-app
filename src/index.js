import './style.css'
import { bigCard, getforcast } from './weather.js'
const input = document.querySelector('[data-city-input]')
const submitBtn = document.querySelector('[data-submit-location]')
const drops = document.querySelectorAll('[data-drops]')
const cardHolder = document.querySelector('[data-cards')
submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const cityName = input.value

  if (cityName === '') return
  const data = getforcast(cityName)
  data.then(response => {
    cardHolder.innerHTML = bigCard(response)
  })
    .catch(err => {
      console.log(err)
    })
})
function random () {
  const num = Math.floor(Math.random() * 3.5)
  return num
}
console.log(drops)
for (let i = 0; i < drops.length; i++) {
  drops[i].style.animationDuration = `${random()}s`
}
