const mexico /*(jamaica, japan, mexico, newZealand)*/ = {

    // countryImage: ,  
    city: [
        {
            name: "Mexico City",
            population: "25,414,624", 
            landmark: "Mexico City Metropolitan Cathedral",
            landmarkImage:"https://i.imgur.com/Jz7GY3z.jpg",
        },
        {
    
            name: "Cancún",
            population: "1,206,780", 
            landmark: "El Rey Ruins",
            landmarkImage:"https://i.imgur.com/2fKkfWL.jpg",
        },
        {
            name: "Mérida",
            population: "1,221,000", 
            landmark: "Archaeological Site of Mayapan",
            landmarkImage:- "https://i.imgur.com/EP8xs40.jpg"
    
        },
    ],
    
    celebrity: [
        {
            name: "Diego Rivera", 
            famous: "Mexian Painter",
            birth: "1886", 
            death: "1957", 
            celebrityImage:"https://i.imgur.com/AKJHChe.jpg", 
        },
        {
            name: ": Frida Kahlo",
            famous: "Mexican Painter",
            birth: "1907",
            death: "1954", 
            celebrityImage:"https://i.imgur.com/FsLgdkq.jpg",
        },
        {
            name: "Guillermo del Toro", 
            famous: "Mexican filmmaker and author", 
            birth:"1964", 
            death:- "~", 
            celebrityImage:-"https://i.imgur.com/jHr6UDD.jpg", 
        },
    
    
    ]
}

export const getMexCity = () =>{
    return mexico.city.map(copyOfCityObject => ({...copyOfCityObject}))
}
export const getCelebrity  = () =>{
    return mexico.celebrity.map(copyOfCityObject => ({...copyOfCityObject}))
}



//  export const getMexceleb = () =>{
//         return mexCity.celebrity.
// }


