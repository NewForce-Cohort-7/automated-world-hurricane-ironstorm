//list of cities

import {getMexCity} from './database.js'

export const cityList = () => {
const aMexicoCity = getMexCity () 

let htmlStringcities = '<article class="mexicoCitylist">'


for (const city of aMexicoCity) {

htmlStringcities += `<section class="Citycard">
<div class="city">${city.name} </div> 
<div class="city">${city.population} </div> 
<div class="city">${city.landmark}  </div> 
<div class="city">${city.landmarkimage}</div> 
    
</section>`

}


 htmlStringcities += `</article>`

 return htmlStringcities
 }



 

 import {getMexceleb} from './database.js'

 export const celebList = () =>

    const mexCelebrities = getMexceleb()

    let htmlstringCeleb ='<article class ="mexicoCeleblist">" 

   for (const celeb of mexCelebrities) {
        
    htmlstringCeleb += (section class = "mexCeleb card">'

    <div class ="celeb_name">${celeb.name} </div>
    <div class ="celeb_famous">${celeb.famous} </div>
    <div class ="celeb_birth">${celeb.birth} </div>
    <div class ="celeb_death">${celeb.death} </div>
   }

   htmlstringCeleb =+ <article>

   Return htmlstringCeleb