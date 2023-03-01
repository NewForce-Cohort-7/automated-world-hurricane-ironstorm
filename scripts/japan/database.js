const japan /*(jamaica, japan, mexico, newZealand, Brazil)*/ = {

    countryImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png',
    city: [
        {
            name: 'Tokyo',
            population: "13.96 million",
            cityImage: 'https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTk0OTU3Mjc5NTE3MjIyMDUw/gettyimages-1390815938.jpg',
            landmark: 'Sensō-ji',
            landmarkImage: 'https://i.imgur.com/V48u43x.jpg'
        },
        {
    
            name: 'Fujinomiya',
            population: '130,770',
            cityImage: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/7/2019/08/MainMt.Fuji--630x421.jpg',
            landmark: 'Mt. Fuji',
            landmarkImage: 'https://i.imgur.com/OYWIKWj.png'
        },
        {
            name: 'Kumamoto',
            population: '740,822',
            cityImage: 'https://cdn.britannica.com/32/143232-050-EE8269B0/Kumamoto-city-Japan.jpg',
            landmark: 'Kumamoto Castle',
            landmarkImage: 'https://i.imgur.com/Izi8CUS.jpg'
    
        },
    ],
    
    celebrity: [
        {
            name: ' Naomi Osaka',
            famous: "Naomi Osaka is a four-time grand slam singles tennis champion. She has been ranked #1 in the world by the Women's tennis association and is the first Asian nplayed to ever hold this title.",
            birth:'October 16, 1997',
            death:'still active',
            celebrityImage: 'https://i.imgur.com/w42FK1A.jpg,'
        },
        {
            name: 'Ichika Nito',
            famous: "Ichika Nito is a New-Age guitarist and record producer. He has ammased an audience of millions over several social media platforms and is best known for his complex fingerstyle songs.",
            birth:'July 7, 1994',
            death:'still active',
            celebrityImage: 'https://i.imgur.com/3kQuU2Y.jpg'
        },
        {
            name: 'Hayao Miyazaki',
            famous: "Hayao Miyazki is a director, animator, screenwriter, author, producer, and popular manga writer. He has recived many awards over his career inclding an Academy award for best animated feature film, Silver Scream award, Golden Bear, and many others. ",
            birth: 'January 5, 1941',
            death:'still active',
            celebrityImage: 'https://i.imgur.com/7VxjCPj.jpg'
        },
    
    
    ]
}

export const cityList = () => {
    return database.city.map(copyOfSingleCityObject => ({...copyOfSingleCityObject}))
}

export const celberityList = () => {
    return database.celebrity.map(copyOfSingleCelberityObject => ({...copyOfSingleCelberityObject}))
}