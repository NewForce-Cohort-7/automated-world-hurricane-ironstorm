import { getCity } from './database.js';

export const cityList = () => {
    const importCity = getCity()

    let htmlString = '<article class="japanMain">'

    for (const City of importCity) {

        htmlString += `<section class= >
            <div><img class="city_image image--card" src="${City.cityImage}" /></div>
            <div class= "city_name">${City.name}</div>
            <div class="city__population">${City.population}</div>
            <div class="city__landmark">${City.landmark}</div>
            <div class="city__landmarkImage image--card" src="${City.landmarkImage}" /></div>
        </section>   
`
    }
    htmlString += `</article>`

    return htmlString
}

import {getCelberity} from './database.js'

export const celberityList = () => {
    const importCelebrity = getCelberity()

    let htmlStringCelebs = '<article class="japanCelebrities">'

    for (const Celebrity of importCelebrity) {

htmlStringCelebs += 
    ` <div class="celeb__image image--card" /><img src="${Celebrity.celebrityImage}" alt=""></div>
    <div class="celeb__name">${Celebrity.name}</div>
    <div class="celeb__famous>${Celebrity.famous}</div>
    <div class="celeb__birth>${Celebrity.birth}</div>
    <div class="celeb__death>${Celebrity.death}</div>
    </section>`
    }
    htmlStringCelebs += `</article>`

    return htmlStringCelebs
}
