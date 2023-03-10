import { getNZCity } from "./database.js";

import { getNZCeleb } from "./database.js";


export const cityList = () => {

    const nZCities = getNZCity()

    let htmlStringCities = '<article class="city-container1">'

    for (const city of nZCities) {

        htmlStringCities += `<section class="nZCity card">
            <div class="city__image image--card" /><img src="${city.cityImage}" alt=""></div>
            <div class="city__name">${city.name}</div>
            <div class="city__population">Has a population of ${city.population}</div>
            <div class="city__landmark">A wonderful place to visit near ${city.name} would be ${city.landmark}</div>
            <div class="city__landmarkImage image--card" /><img src="${city.landmarkImage}" alt=""></div>
        </section>   
`
    }
    htmlStringCities += `</article>`

    return htmlStringCities
}

export const celebList = () => {

    const nzCelebrities = getNZCeleb()

    let htmlStringCelebs = '<article class="celeb-container1">'

    for (const celeb of nzCelebrities) {

        htmlStringCelebs += `<section class="nzCeleb card">
            <div class="celeb__image image--card" /><img src="${celeb.celebrityImage}" alt=""></div>
            <div class="celeb__info celeb__name">${celeb.name}</div>
            <div class="celeb__info">${celeb.famous}</div>
            <div class="celeb__info"> b. ${celeb.birth}</div>
            <div class="celeb__info"> d. ${celeb.death}</div>
            </section>
`
    }
    htmlStringCelebs += `</article>`

    return htmlStringCelebs
}