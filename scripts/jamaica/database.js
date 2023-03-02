const jamaica /*(jamaica, japan, mexico, newZealand)*/ = {

    countryImage:'https://www.beaches.com/blog/content/images/2019/11/Dunns-River-Falls-beach-Jamaica.jpg',
    city: [
        {
            cityImage:'https://eatingwitherica.com/wp-content/uploads/2019/12/Jamaica.jpg',
            name:"Kingston",
            population:"1,243,000",
            landmark:"Bob Marley Museum",
            landmarkImage:'https://i.imgur.com/btl4xAk.jpg',
        },
        {
            cityImage:'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/jamaica/iStock_64971819_LARGE_417edc5d-6866-4656-af21-701f3daaaa44.jpg',
            name:"Montego Bay",
            population:"427,891",
            landmark:"Sam Sharpe Square",
            landmarkImage:'https://i.imgur.com/1ekQhTI.jpg',
        },
        {
            cityImage:'https://www.my-island-jamaica.com/images/spanish_town_jamaica.jpg',
            name:"Spanish Town",
            population:"145,018",
            landmark:"St. Jago De La Vega Cathedral",
            landmarkImage:'https://i.imgur.com/fHtRSD7.jpg',
    
        },
    ],
    
    celebrity: [
        {
            name:"Bob Marley",
            famous: "Reggae Music",
            birth:"February 6th, 1945",
            death:"May 11th, 1981",
            celebrityImage:'https://i.imgur.com/rucoqiW.png',
        },
        {
            name:"Usain Bolt",
            famous: "the world's fastest man",
            birth:"August 21st, 1986",
            death:"Present",
            celebrityImage:'https://i.imgur.com/eJunEVa.png',
        },
        {
            name:"Jimmy Cliff",
            famous: "Reggae Music",
            birth:"July 30th, 1944",
            death:"Present",
            celebrityImage:'https://i.imgur.com/tchW9Mm.jpg',
        },
    
    
    ]
}

export const getJamCity = () => {
    return jamaica.city.map(copyOfCityObject => ({...copyOfCityObject}));
}

export const getJamCelebrity  = () => {
    return jamaica.celebrity.map(copyOfCelebrityObject => ({...copyOfCelebrityObject}));
}



