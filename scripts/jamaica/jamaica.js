import {getJamCity} from './database.js'

import { getJamCelebrity } from './database.js'

const allCities = getJamCity()

const allCelebs = getJamCelebrity()


import { cityList } from './lists.js'

const parentHTMLElementJamCities = document.querySelector(".JamFlex-container1")

parentHTMLElementJamCities.innerHTML = cityList()



import { celebrityList } from './lists.js'

const parentHTMLElementJamCelebrities = document.querySelector(".JamFlex-container2")

parentHTMLElementJamCelebrities.innerHTML = celebrityList()
