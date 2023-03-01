import {cityList} from './database.js'

export const cityList = () => {
    // Invoke the function that you imported from the database module
    const importCity = country()

    // Start building a string filled with HTML syntax
    let htmlString = '<section class="japan.js">'

    // Create HTNL representations of each fish here
    for (const singleCityObject of importCity) {

        htmlString += `<section class= >
            <section class = "japanCity"> city 1 </section>
            <section class = "japanCity"> city 2 </section>
            <section class = "japanCity"> city 3 </section>   
`
    }
    htmlString += `</article>`

    return htmlString
}

import {celberityList} from `database.js`

export const celberityList = () => {
    const importCelebrity = country()

    let htmlString = `<article class = "japanCelebrities">`

    for (const singleCelebrityObject of importCelebrity)

    `<section class = "japanCelberity"> celebrity 1 </section>
    <section class = "japanCelebrity"> celebrity 2 </section>
    <section class = "japanCelebtiry"> celebrity 3 </section>`

    htmlString += `<article>`

}