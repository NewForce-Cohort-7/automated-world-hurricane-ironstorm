//list of cities

import {getMexCity} from './database.js'
export const cityList = () => {
const aMexicoCity = getMexCity () 

let htmlStringCities = '<article class="flex-container1">'

for (const city of aMexicoCity) {

htmlStringCities += `<section class="Citycard">
<div class="city">${city.name} </div> 
<div class="city">${city.population} </div> 
<div class="city">${city.landmark}  </div> 
<div class="city">${city.landmarkImage} "img src="${city.landmarkImage}"
    
</section>`

}


 htmlStringCities += `</article>`

 return htmlStringCities
 }




 import {getCelebrity} from "./database.js"

// 
 export const celebList = () => {

    const mexCelebrities = getCelebrity()


    let htmlStringCelebs = '<article class="flex-container2">'

   for (const celeb of mexCelebrities) {
        
    htmlStringCelebs += `<section class = "mexCeleb card">

   
    <div class="celeb__image"><img src="${celeb.celebrityImage}" alt=""></div>
    <div class ="celeb_name">${celeb.name} </div>
    <div class ="celeb_famous">${celeb.famous} </div>
    <div class ="celeb_birth">${celeb.birth} </div>
    <div class ="celeb_death">${celeb.death} </div>
    </section>
   `
   console.log(htmlStringCelebs)
}

   htmlStringCelebs += `</article>`
console.log(htmlStringCelebs)
   return htmlStringCelebs
}