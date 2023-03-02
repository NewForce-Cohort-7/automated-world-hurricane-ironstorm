const brazil = {

    countryImage: "https://i.imgur.com/XQ55F8q.jpg",
    city: [
        {
            cityImage: "",
            name: "Paraná, Brazil",
            population: "1.157 million",
            landmark: "Iguazú Falls",
            landmarkImage: "https://i.imgur.com/rUcvdj5.jpg",
        },
        {
            cityImage: "",
            name: "Rio de Janeiro",
            population: "6.748 million",
            landmark: "Escadaria Selarón",
            landmarkImage: "https://i.imgur.com/C6p9hbU.jpg",
        },
        {
            cityImage: "",
            name: "Baía de São José",
            population: "7,075,181",
            landmark: "Parque Nacional dos Lençóis Maranhenses",
            landmarkImage: "https://i.imgur.com/gcAx8zY.jpg",
    
        },
    ],
    
    //NAME(BIRTH - DEATH) is from COUNTRY. They are known for FAMOUS.

    celebrity: [
        {
            name: "Bertha Lutz",
            famous: "being a suffragette and founding the Brazilian Federation for the Advancement of Women.",
            birth: "1894",
            death: "1976",
            celebrityImage: "https://i.imgur.com/rf4gCYZ.jpg",
        },
        {
            name: "Maria Firmina dos Reis",
            famous: "writing <i>Ursula</i>, a novel about a young African girl stolen from her home. Written in the 1850s, it is considered to be the first novel written by a Brazilian woman.",
            birth: "1822",
            death: "1917",
            celebrityImage: "https://i.imgur.com/rWvaU1r.jpg",
        },
        {
            name: "Madalena Caramuru",
            famous: "advocating against the malicious treatment of Indigenous children in residental schools. She also promotod access to education for women.",
            birth: "c. 1500s",
            death: "unknown",
            celebrityImage: "https://i.imgur.com/mPAZqqy.jpg",
        },
    
    
    ]
}

export const getBrazilCity = () =>{
    return brazil.city.map(copyOfCityObject => ({...copyOfCityObject}))
}

export const getBrazilCeleb = () =>{
    return brazil.celebrity.map(copyOfCelebrityObject => ({...copyOfCelebrityObject}))
}
