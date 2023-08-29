import { FaBook, FaCalendar,FaBuilding,FaHtml5,FaCode,FaMobile,FaPen,FaPalette,FaFile,FaHandshake } from "react-icons/fa";

const personalinfo = [
  {
    id: 1,
    title: "Name: ",
    description: "Muhammad Sajeel.",
  },
  {
    id: 2,
    title: "Birthdate: ",
    description: "August 4,2001.",
  },
  {
    id: 3,
    title: "Address: ",
    description: "Raza Town, Faisalabad.",
  },
  {
    id: 4,
    title: "Experience: ",
    description: "2+ Years",
  },
  {
    id: 5,
    title: "Freelance: ",
    description: "Available",
  },
];

const contactinfo = [
  {
    id: 1,
    title: "Phone: ",
    description: "(+92) 301 0194545",
  },
  {
    id: 2,
    title: "E-mail: ",
    description: "msajeel065@gmail.com",
  },
  {
    id: 3,
    title: "Skype: ",
    description: "Muhammad Sajeel",
  },
  {
    id: 4,
    title: "Languages: ",
    description: "Urdu,English,Hindi",
  },
  {
    id: 5,
    title: "Website: ",
    description: "www.example.com",
  },
];

const education = [
  {
    id: 1,
    icon1: <FaBook />,
    icon2: <FaCalendar />,
    institute: "National Textile Univesity",
    duration: "2020-2024",
    title: "Bachelors in Software Engineering",
    description:
      "I started my bachelors in Software Engineering. I started my programming learning in bachelors. I learnt of basics of web development and started advancement in it.",
  },
  {
    id: 2,
    icon1: <FaBook />,
    icon2: <FaCalendar />,
    institute: "Punjab College of Science",
    duration: "2018-2020",
    title: "Fsc. Pre-Engineering",
    description:
      "I completed my college studies in science subjects. I studied Mathematics, Physics, Chemistry. I developed my skill of technical calculations and fomulations in my college life.",
  },
  {
    id: 3,
    icon1: <FaBook />,
    icon2: <FaCalendar />,
    institute: "City Grammar School",
    duration: "2006-2018",
    title: "Computer Science",
    description:
      "I completed my school in computer sciences. I passed my matriculaion with 90% marks. I learnt basics of programming including intro, algortithms, flowcharts etc.",
  },
];

const experience = [
  {
    id: 1,
    icon1: <FaBuilding />,
    icon2: <FaCalendar />,
    title: "Full Stack Developer",
    institute: "Opus Tech",
    duration: "2022-2023",
    description:
      "I started as a full stack developer. I started work in html,css for frontend and PHP as backend. I developed some crud applications as a Full Stack Developer",
  },
  {
    id:2,
    icon1: <FaBuilding />,
    icon2: <FaCalendar />,
    title:"React Js Developer",
    institute:"Opus Tech",
    duration:"2023-Currently Working",
    description:"I advanced myself by learning React JS. I experienced myself as a Front End Developer in React JS. Now, I am experienced as React JS developer. I have developed projects as well."
  },
  {
    id:3,
    icon1: <FaBuilding />,
    icon2: <FaCalendar />,
    title:"Next Js Developer",
    institute:"Opus Tech",
    duration:"2023-Currently Working",
    description:"I further enhanced myself by learning NEXT JS. I learned backend in this framework. I worked with different API's. Now I am Full Stack Developer providing Dynamic solutions to my clients."
  }
];

const skills = [
    {
        id:1,
        skill:"HTML",
        percentage:"95%"
    },
    {
        id:2,
        skill:"CSS",
        percentage:"90%"
    },
    {
        id:3,
        skill:"JavaScript",
        percentage:"75%"
    },
    {
        id:4,
        skill:"Bootstrap",
        percentage:"85%"
    },
    {
        id:5,
        skill:"React",
        percentage:"80%"
    },
    {
        id:6,
        skill:"Web Design",
        percentage:"85%"
    },
    {
        id:7,
        skill:"Next Js",
        percentage:"85%"
    },
    {
        id:8,
        skill:"Web Development",
        percentage:"80%"
    },
];

const services = [
    {
        id:1,
        title:"Web Design",
        icon:<FaHtml5 color="#64BD00" size="40px"/>,
        description:"Proficient in web design, I craft captivating digital experiences by skillfully blending aesthetics and user-friendly layouts. It encompasses the art of arranging elements and content. "
    },
    {
        id:2,
        title:"Web Development",
        icon:<FaCode color="#64BD00" size="40px"/>,
        description:"Mastery in web development empowers me to breathe life into digital ideas, using a toolkit of coding languages and frameworks to construct dynamic and responsive websites."
    },
    {
        id:3,
        title:"Responsive Design",
        icon:<FaMobile color="#64BD00" size="40px"/>,
        description:"Proficient in responsive web design, I adeptly create websites that dynamically adapt to any screen size or device, ensuring optimal user experience across desktops, tablets, and smartphones."
    },
    {
        id:4,
        title:"Easy to Customize",
        icon:<FaPen color="#64BD00" size="40px"/>,
        description:"I craft software and designs that empower users to effortlessly tailor and modify elements according to their unique preferences. I enable seamless personalization to align perfectly."
    },
    {
        id:5,
        title:"Unlimited Color",
        icon:<FaPalette color="#64BD00" size="40px"/>,
        description:"My skill lies in incorporating unlimited color possibilities into designs, allowing for vibrant and personalized visual experiences. By harnessing a spectrum of hues, shades, and tones."
    },
    {
        id:6,
        title:"Unique Design",
        icon:<FaFile color="#64BD00" size="40px"/>,
        description:"I possess the ability to transform visions into distinctive visual realities. Through a blend of creativity and strategic thinking, I craft one-of-a-kind concepts that capture attention and leave a lasting impression."

    }
    ,{
        id:7,
        title:"Life Time Support",
        icon:<FaHandshake color="#64BD00" size="40px"/>,
        description:"Offering lifetime support as a skill, I provide unwavering assistance and guidance throughout the entire journey. From initial implementation to ongoing maintenance, my commitment ensures that projects and solutions continue to thrive."
    }

]

export { personalinfo, contactinfo, education, experience, skills,services };
