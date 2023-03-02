import { getBrazilCity } from "./database.js"

import { getBrazilCeleb } from "./database.js"

export const cityList = () => {
    const brazilCities = getBrazilCity()

    let htmlStringCities = '<article class="flex-contaner1">'

    for (const city of brazilCities) {
        
        htmlStringCities += `<section class="Brazil Cities">
        <div><img  class="landmark__image image--card" src="${city.landmarkImage}"></div>
            <div class="city_description">Visit lovely ${city.name} within Brazil. With a population of ${city.population}, this city also offers famous landmarks for tourists to visit. Make sure to visit ${city.landmark} during your trip!</div>
        </section>
`
    }
    htmlStringCities += `</article>`

    return htmlStringCities
}

export const celebList = () => {

    const brazilCelebrities = getBrazilCeleb()

    let htmlStringCelebs = '<article class="flex-container2">'

    for (const celeb of brazilCelebrities) {

        htmlStringCelebs += `<section class="Brazil Celebrities">
            <div class="celeb__image image--card" /><img src="${celeb.celebrityImage}" alt=""></div>
            <div class="celeb__name">${celeb.name}, ${celeb.birth} - ${celeb.death}, is from Brazil. She is known for ${celeb.famous}.</div>
            </section>
`
    }
    htmlStringCelebs += `</article>`

    return htmlStringCelebs
}