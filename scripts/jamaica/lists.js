//List for my cities
import {getJamCity} from './database.js'

export const cityList = () => {

    
    const importCity = getJamCity()

    let htmlStringCities = '<article class="JamFlex-container1">'

    for (const city of importCity) {

         htmlStringCities += `<section class="JamCity-card">
         <img src="${city.cityImage}" alt="">
         <div class="city__name">${city.name}</div>
         <div class="city__population">Population:${city.population}</div>
         <img src="${city.landmarkImage}" alt="${city.landmark}">
         <div class="city__landmark">${city.landmark}</div>
     </section>   
`
    }
    htmlStringCities += `</article>`

    return htmlStringCities
}

//List for my celebrities
import {getJamCelebrity} from './database.js'

export const celebrityList = () => {

    
    const importCelebrity = getJamCelebrity()

    let htmlStringCelebrities = '<article class="JamFlex-container2">'

    for (const celebrity of importCelebrity) {

         htmlStringCelebrities += `<section class="JamCeleb card">
            <img src="${celebrity.celebrityImage}" alt="">
            <div class="celeb__name">${celebrity.name}</div>
            <div class="celeb__famous">${celebrity.famous}</div>
            <div class="celeb__birth">${celebrity.birth}</div>
            <div class="celeb__death">${celebrity.death}</div>
            </section>
`
    }
    htmlStringCelebrities += `</article>`

    return htmlStringCelebrities
}