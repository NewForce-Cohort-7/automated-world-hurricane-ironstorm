import { getNZCity } from './database.js'

import { getNZCeleb } from './database.js'

const allCities = getNZCity()

// for (const nZCity of allCities) {
//     console.log(nZCity)
// }

const allCelebs = getNZCeleb()

// for (const nZCeleb of allCelebs) {
//     console.log(nZCeleb)
// }



import { cityList } from './lists.js'

const parentHTMLElementNZCities = document.querySelector(".flex-container1")

parentHTMLElementNZCities.innerHTML = cityList()

import { celebList } from './lists.js'

const parentHTMLElementNZCelebs = document.querySelector(".flex-container2")

parentHTMLElementNZCelebs.innerHTML = celebList()