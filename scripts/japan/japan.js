import { cityList } from './lists.js'

const parentHTML1Element = document.querySelector(".japanMain")

parentHTML1Element.innerHTML = cityList()

import { celberityList } from './lists.js'

const parentHTML2Element = document.querySelector(".japanCelebrities")

parentHTML2Element.innerHTML = celberityList()

