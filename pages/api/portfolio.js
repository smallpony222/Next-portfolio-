const portfolio = [
    {
        id: 0,
        projectName: "MISSION",
        url: "https://jmmerp.com/",
        image: "projects/pmat.png",
        projectDetail: "Mission Platform: Developed a real-time information platform for pilots, featuring aircraft status, airport details, and weather conditions. Utilized microservices architecture and CI/CD automation with Docker and Kubernetes to enhance deployment efficiency and scalability.",
        technologiesUsed: [
            {
                tech: "Microservices"
            },
            {
                tech: "Docker"
            },
            {
                tech: "Kubernetes"
            },
            {
                tech: "Java (Spring Boot)"
            },
            {
                tech: "Node.js/Express"
            },
            {
                tech: "AWS"
            },
            {
                tech: "Azure"
            },
        ]
    },
    {
        id: 0,
        projectName: "NETLIFY's own dashboard",
        url: "https://absco.sa/",
        image: "projects/netlify.jpg",
        projectDetail: "Netlify Own Dashboard: Contributed to the development of a dashboard for managing deployed projects. Focused on optimizing API performance, leading a SQL to NoSQL database migration, and managing cloud service deployment to improve system flexibility and reliability.",
        technologiesUsed: [
            {
                tech: "RESTful APIs"
            },
            {
                tech: "GraphQL"
            },
            {
                tech: "MySQL"
            },
            {
                tech: "React.js/JavaScript"
            },
            {
                tech: "Netlify"
            },
        ]
    },
    {
        id: 0,
        projectName: "HoustParty(web)",
        url: "https://jmm.ltd/",
        image: "projects/houseparty1.png",
        projectDetail: "Web Application: Built a community and video chat platform using React, integrating real-time communication features with WebSocket and WebRTC, and ensuring a seamless user experience.",
        technologiesUsed: [
            {
                tech: "React.js"
            },
            {
                tech: "WebSocket"
            },
            {
                tech: "WebRTC"
            },
            {
                tech: "Heroku"
            }
        ]
    },
    {
        id: 0,
        projectName: "HouseParty(app)",
        url: "https://alsn.app/",
        image: "projects/houseparty2.png",
        projectDetail: "Mobile Application: Developed the mobile version, optimizing UI for mobile devices and maintaining real-time communication functionalities.",
        technologiesUsed: [
            {
                tech: "React Native"
            },
            {
                tech: "WebSocket"
            },
            {
                tech: "WebRTC"
            },
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
