const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Texas Tech University',
                degree: 'BS, Computer System Engineering',
                detail: "Bachelor's Degree in Computer System Engineering from Texas Tech University.",
                year: '2009 - 2013'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'PMAT, Inc',
                role: 'Senior Software Engineer',
                // url: 'https://jmm.ltd/',
                desc: 'As a full-stack engineer, I built a MISSION project consisting of microservices architecture using React, Python, Java, and C#.',
                year: '05/2021 - 09/2024',
                image: "images/pmat.png",
                location: 'Norfolk, Virginia'
            },
            {
                id: 2,
                title: 'Netlify',
                role: 'Software Engineer',
                // url: 'no website',
                desc: 'As a full-stack engineer more focused on the backend, I was optimizing backend API using Restful API and Graphql. Also, I implemented database migration.',
                year: '06/2017 - 04/2021',
                image: "images/netlify.png",
                location: 'San Francisco, California'
            },
            {
                id: 3,
                title: 'Life On Air, Inc',
                role: 'San Francisco, California',
                // url: 'https://www.encoderbytes.com/',
                desc: "This is my first company. As a frontend developer, I built video chat platform using React and Webrtc and lunched in 2016.",
                year: '09/2020 - 02/2021',
                image: "images/lifeonair.png",
                location: 'San Francisco, California'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
