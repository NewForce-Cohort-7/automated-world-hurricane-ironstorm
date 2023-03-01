const jamaica /*(jamaica, japan, mexico, newZealand)*/ = {

    countryImage:'https://www.beaches.com/blog/content/images/2019/11/Dunns-River-Falls-beach-Jamaica.jpg',
    city: [
        {
            name:"Kingston",
            population:"1,243,000",
            landmark:"Bob Marley Museum",
            landmarkImage:'https://i.imgur.com/btl4xAk.jpg',
        },
        {
    
            name:"Montego Bay",
            population:"427,891",
            landmark:"Sam Sharpe Square",
            landmarkImage:'https://i.imgur.com/1ekQhTI.jpg',
        },
        {
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



