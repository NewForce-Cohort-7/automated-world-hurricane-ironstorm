// like main.js in fishies
import { getBrazilCity } from './database.js'
import { getBrazilCeleb } from './database.js'

const allCities = getBrazilCity()

const allCelebs = getBrazilCeleb()

import { cityList } from './lists.js'

const parentHTMLElementNZCities = document.querySelector(".flex-container1")

parentHTMLElementNZCities.innerHTML = cityList()

import { celebList } from './lists.js'

const parentHTMLElementNZCelebs = document.querySelector(".flex-container2")

parentHTMLElementNZCelebs.innerHTML = celebList()