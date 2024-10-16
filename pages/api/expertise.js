const expertise = [
    {
        id: 0,
        title: 'Experienced in various aspects of Full-Stack Development.',
        desc: 'I am skilled in various programming languages, including JavaScript, TypeScript, Java, C#, and Python. I have proficiency in both frontend and backend frameworks, such as React, Vue, Next.js, Express, Spring Boot, ASP.NET Core, Django, Flask, and FastAPI. Additionally, I possess a deep understanding of SQL and NoSQL databases.',
    },
    {
        id: 1,
        title: 'Experienced in working with Agile methodologies.',
        desc: 'I enjoy working with Agile methodologies, particularly Scrum and Kanban, which I have consistently applied throughout my career. My experience includes facilitating daily stand-ups, sprint planning, and retrospectives to foster team collaboration and improve project delivery. This approach has allowed me to adapt to changing requirements and ensure a high level of customer satisfaction.',
    },
    {
        id: 2,
        title: 'Familier in cloud services.',
        desc: 'Fortunately, I have experience with various cloud service platforms, including AWS, Azure, Netlify, and Heroku. I am also an expert in using services such as AWS Lambda, Redis, message brokers, and D3.',
    },
    {
        id: 3,
        title: 'Implemented CI/CD pipelines.',
        desc: "I have extensive experience in composing CI/CD pipelines using tools such as GitHub, Docker, Kubernetes, and Jenkins. I have designed and implemented automated workflows that streamline the integration and deployment processes, ensuring consistent and reliable delivery of applications. Additionally, I have successfully launched several projects on cloud services, optimizing them for scalability and performance while adhering to best practices in DevOps.",
    },
    {
        id: 4,
        title: 'Strong problem-solving skills, able to tackle complex challenges effectively.',
        desc: "I have strong debugging skills, allowing me to identify and resolve both functional and non-functional issues effectively. I have successfully tackled several significant challenges in my projects, employing a systematic approach to troubleshooting and optimizing code performance, ensuring high-quality software delivery.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
