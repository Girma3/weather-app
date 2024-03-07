import './style.css'
import { bigCard, focusStyle, getforcast, slidercard, validate, changeTemprature } from './weather.js'
const input = document.querySelector('[data-city-input]')
const submitBtn = document.querySelector('[data-submit-location]')
const sliderCard = document.querySelector('[data-forecast')
const cardHolder = document.querySelector('[data-cards')
const errMsg = document.querySelector('[data-err-msg]')
let shallow

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  let cityName = input.value

  if (validate(cityName, input, errMsg) === false) {
    console.log('noppp')
  } else if (validate(cityName, input, errMsg)) {
    const data = getforcast(cityName)

    data.then(response => {
      cardHolder.innerHTML = bigCard(response)
      sliderCard.textContent = ''
      sliderCard.appendChild(slidercard(response, response.forecast.forecastday))
      rain()
      shallow = data

      cityName = ''
      input.value = ''
      errMsg.textContent = ''
    })
      .catch(err => {
        errMsg.textContent = "can't find data,try another city"
        console.log(err)
      })
  }
})
input.addEventListener('focus', () => {
  focusStyle(input, errMsg)
  console.log(shallow)
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
const changeUnit = document.querySelector('[data-checkbox]')
changeUnit.addEventListener('click', () => {
  const tempratures = document.querySelectorAll('.temprature')
  const firstTemprature = document.querySelector('.first-temprature')
  const temprature = [...tempratures]

  if (changeUnit.checked === true) {
    shallow.then(response => {
      changeTemprature(temprature, firstTemprature, true, response)
    })
  } else if (changeUnit.checked === false) {
    shallow.then(response => {
      changeTemprature(temprature, firstTemprature, false, response)
    })
  }
})
