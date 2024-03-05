import './style.css'
import { bigCard, getforcast, slidercard } from './weather.js'
const input = document.querySelector('[data-city-input]')
const submitBtn = document.querySelector('[data-submit-location]')
const sliderCard = document.querySelector('[data-forecast')
const cardHolder = document.querySelector('[data-cards')

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const cityName = input.value

  if (cityName === '') return
  const data = getforcast(cityName)
  data.then(response => {
    console.log(1)
    cardHolder.innerHTML = bigCard(response)

    console.log(2)

    sliderCard.appendChild(slidercard(response, response.forecast.forecastday))
    rain()
    console.log(3)
  })
    .catch(err => {
      console.log(err)
    })
})
function rain () {
  const drops = document.querySelectorAll('[data-drops]')

  const random = () => {
    const num = Math.floor(Math.random() * 3.5)
    return num
  }

  for (let i = 0; i < drops.length; i++) {
    drops[i].style.animationDuration = `${random()}s`
  }
}
