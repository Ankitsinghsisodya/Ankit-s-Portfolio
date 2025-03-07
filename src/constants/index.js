import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import LA from "../assets/LA.jpeg";
import Hfs from "../assets/Hfs.jpeg";
import bitmesra from "../assets/BIT.png";
import  './index.css';



export const HERO_CONTENT = `
I am a Computer Science Engineering student at BIT Mesra, currently holding an <span className='italic text-xl text-gradient'>Expert rank on Codeforces (Max Rating: 1698)</span> and <span className='italic text-xl text-gradient'>Knight rank on LeetCode (Max Rating: 2139)</span>. 
My competitive programming journey includes solving 1000+ problems on Codeforces and achieving notable ranks like <span className='italic text-xl text-gradient'> <a href='https://www.facebook.com/codingcompetitions/hacker-cup/2024/certificate/1029241675873927'>All India Rank 505 in Meta Hacker Cup </a> </span> and <span className='italic text-xl text-gradient'><a href='https://codeforces.com/contest/1996/standings/participant/187434533#p187434533'>Global rank 179 in codeforces Div 3 Round 962</a></span>.<br><br>

In addition to competitive programming, I excel in full-stack web development, specializing in  <span className='italic text-bold text-gradient'> Next.js, React.js,  and databases like MongoDB and MySQL</span>. 
I have developed scalable solutions, improving user experiences and system performance. 
<br><br>
Showcasing my management and leadership skills, I have organized many events for clubs like <span className='text-gradient text-xl'>ACM</span> and <span className='text-gradient text-xl'>IEEE</span>, showcasing strong interpersonal and management skills. 
`;

export const EXPERIENCES = [
  {
    year: "2023 - 2027",
    image: bitmesra,
    role: "BTech - Computer Science & Engineering",
    company: "Birla Institute of Technology, Mesra",
    description: `Pursuing a Bachelor of Technology (BTech) in Computer Science Engineering at Birla Institute of Technology, Mesra, with a current GPA of 8.5 . Currently in the second year, I am honing my skills in software development, an active member of finance club, GDSC, Ehsaas, ACM and IEEE.`,
    technologies: [
      "Data Structures & Algorithms",
      "DBMS",
      "OOPS",
      "Operating Systems",
    ],
  },
  {
    year: "2022 - 2023",
    image: LA,
    role: "Intermediate (Class XII)",
    company: "LA Garden High School, Ranchi",
    description: `Achieved an impressive 85.8 overall, studied Physics, Chemistry, and Mathematics, showcasing a robust academic foundation and a strong commitment to academic excellence.`,
    technologies: [],
  },
  {
    year: "2019 - 2021",
    image: Hfs,
    role: "Matriculate (Class X)",
    company: "Holy Family School, Chapra",
    description: `With a strong focus on both Science and Mathematics, I earned an impressive 97.60% in my board exams, showcasing a deep understanding of key subjects and reflecting exceptional academic dedication and achievement.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Blog",
    image: project1,
    description:
      "Developed a full-stack blogging platform with Appwrite backend, featuring rich text editing via TinyMCE, real-time comments, and robust authentication. Implemented category-based post organization, social sharing, and advanced search functionality. Optimized for performance with responsive design and efficient data handling.",
    technologies: [
      "React",
      "Appwrite",
      "TinyMCE",
      "Tailwind",
      "HTML",
      "Javascript",
      "Node.js",
    ],
    demoLink: "https://blog-omega-ten-79.vercel.app/",
    githubLink: "https://github.com/Ankitsinghsisodya/Blog",
  },
  {
    title: "Sangeet",
    image: project2,
    description: 
      "Developed a streamlined web-based music player focused on Bhajans, featuring dynamic playlist management, responsive audio controls, and an intuitive user interface. Implemented custom audio controls, real-time progress tracking, and smooth transitions with gradient backgrounds. Built with modern web technologies for optimal performance.",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "Web Audio API",
      "LocalStorage",
      "JSON"
    ],
    demoLink: "https://sangeet-hazel.vercel.app/",
    githubLink: "https://github.com/Ankitsinghsisodya/Sangeet"
  },
];

export const CONTACT = {
  address: "Munger, Bihar, India ",
  phoneNo: "+91 7667144864 ",
  email: "ankitsingh24012005@gmail.com",
};
