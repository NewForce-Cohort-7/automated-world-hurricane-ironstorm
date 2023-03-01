// like main.js in fishies
import {getBrazilCity} from './scripts/brazil/lists.js'
import {getBrazilCeleb} from './scripts/brazil/lists.js'

const parentHTMLElement = document.querySelector(".brazilMain")


parentHTMLElement.innerHTML = getBrazilCity()