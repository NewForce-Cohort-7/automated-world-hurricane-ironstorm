import { getBrazilCity } from "./database.js"

export const getBrazilCity = () => {
    const importFish = getBrazilCity()

    let htmlString = '<article class="brazilCityList">'

    for (const singleCityObject of importBrazil) {
        htmlString += `<section class="Brazil Cities">
        <div><img  class="landmark__image image--card" src="${singleCityObject.landmarkImage}"/></div>
            <div class="city_description">Visit lovely ${singleCityObject.name} within Brazil. With a population of ${singleCityObject.population}, this city also offers famous landmarks for tourists to visit. Make sure to visit ${singleCityObject.landmark} during your trip!</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}