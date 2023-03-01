//List for my cities
import {getJamCity} from './database.js'

export const cityList = () => {

    
    const importCity = getJamCity()

    let htmlStringCities = '<article class="jamaicaMain">'

    for (const singleCityObject of importCity) {

         htmlStringCities += `<section class="JamCityCard"> city 1 </section>
        <div class="population"> 
<section class="jamaicaCity"> city 2 </section>
<section class="jamaicaCity"> city 3 </section>`
    }
    htmlStringCities += `</article>`

    return htmlStringCities
}

//List for my celebrities
import {getJamCelebrity} from './database.js'

export const celebrityList = () => {

    
    const importCelebrity = getJamCelebrity()

    let htmlStringCelebrities = '<article class="jamaicaCelebrities">'

    for (const singleCelebrityObject of importCelebrity) {

//         htmlString += `
//         <section class="jamaicaCelebrity"><img src ="" alt=""> First Celeb</section>
//         <section class="jamaicaCelebrity"><img src ="" alt=""> Second Celeb</section>
//         <section class="jamaicaCelebrity"><img src ="" alt=""> Third Celeb</section>
// `
`<section class="jamaicaCelebrity"> celebrity 1 </section>
<section class="jamaicaCelebrity"> celebrity 2 </section>
<section class="jamaicaCelebrity"> celebrity 3 </section>`
    }
    htmlStringCelebrities += `</article>`

    return htmlStringCelebrities
}