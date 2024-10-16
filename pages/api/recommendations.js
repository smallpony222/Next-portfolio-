// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: '– John Miller, Engineering Manager, PMAT, Inc.',
    image: "images/shahmir.jfif",
    // designation: 'React JS | NEXT JS | Node | GraphQL',
    view: "Alfredo was instrumental in the success of our Mission platform. His expertise in microservices architecture and full-stack development was evident from day one. He not only developed critical components but also took the initiative to mentor other engineers, elevating the entire team’s performance. His leadership and attention to detail were key in delivering a high-quality, scalable product.",
    linkednURL: "https://www.linkedin.com/in/shahmir-minhas/"
  },
  {
    id: 1,
    name: '– Emily Chen, Senior Engineer, Netlify',
    image: "images/sikandar.jpeg",
    // designation: 'Data Scientist | Machine Learning Engineer | Python Developer',
    view: "Alfredo is one of the best engineers I’ve worked with. His contributions to the Netlify Own Dashboard were invaluable, particularly his ability to optimize API performance and lead a smooth database migration from SQL to NoSQL. His dedication to delivering performant, scalable solutions greatly benefited our team and the product.",
    linkednURL: "https://www.linkedin.com/in/sikandar-hayat-381407179/"
  },
  {
    id: 2,
    name: '– Sarah Johnson, Product Manager, Life On Air, Inc',
    image: "images/nasir.jpg",
    // designation: 'MERN | JavaScript | Tailwind | Sass | Bootstrap',
    view: "Alfredo’s work on the HouseParty platform was truly exceptional. He brought pixel-perfect frontend designs to life while integrating cutting-edge technologies like WebRTC for real-time video communication. His ability to collaborate effectively across teams ensured that we consistently delivered a top-tier user experience.",
    linkednURL: "https://www.linkedin.com/in/nasirkhan22/"
  },
  {
    id: 3,
    name: '– Michael Carter, Lead Architect, PMAT, Inc',
    image: "images/muhammad.jpeg",
    view: "Alfredo was a key player in building the Mission platform from scratch. His deep understanding of both frontend and backend technologies, combined with his proficiency in CI/CD automation, allowed us to reduce deployment times significantly. He led by example, fostering a collaborative environment and ensuring the team followed best practices in software development. His technical leadership and mentorship were invaluable to the team’s growth.",
    linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
