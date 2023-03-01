const newZealand = {

    countryImage: "https://i.imgur.com/doQIdma.jpeg",
    city: [
        {
            cityImage: "https://i.imgur.com/w5ljdzH.jpg",
            name: "Matamata",
            population: 8700,
            landmark: "Hobbiton Movie Set Tours",
            landmarkImage:"https://i.imgur.com/1zrG4V7.jpeg",
        },
        {
            cityImage: "https://i.imgur.com/s4sZzXZ.jpg",
            name: "Wellington",
            population: 646900,
            landmark: "Mount Victoria Lookout",
            landmarkImage:"https://i.imgur.com/XGeLHWv.jpeg",
        },
        {
            cityImage: "https://i.imgur.com/X6mSnCf.jpg",
            name: "Taupo Town",
            population: 26100,
            landmark: "Huka Falls",
            landmarkImage:"https://i.imgur.com/g8eRXCw.png",
    
        },
    ],
    
    celebrity: [
        {
            name: "Kate Sheppard",
            famous: "The leading light of the New Zealand women's suffrage movement",
            birth:"10 March 1848",
            death:"13 July 1934",
            celebrityImage:"https://i.imgur.com/enroZJk.jpeg",
        },
        {
            name: "Russel Crowe",
            famous: "Prominent Actor and Singer",
            birth: "7 April 1964",
            death:"~",
            celebrityImage:"https://i.imgur.com/6NXMWZn.jpeg",
        },
        {
            name: "Peter Jackson",
            famous: "Filmmaker",
            birth:"31 October 1961",
            death:"~",
            celebrityImage:"https://i.imgur.com/CIFuf0T.jpeg",
        },
    
    
    ]
}
    export const getNZCity = () =>{
        return newZealand.city.map(copyOfCityObject => ({...copyOfCityObject}))
    }
    export const getNZCeleb = () =>{
        return newZealand.celebrity.map(copyOfCelebrityObject => ({...copyOfCelebrityObject}))
    }