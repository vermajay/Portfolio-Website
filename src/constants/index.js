import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  coderscave,
  kuk,
  threejs,
  firebase,
  expressjs,
  mysql,
  instagram,
  studynotion,
  expensetracker,
  githubspy,
  weather,
  snakegame,
  tictactoe,
  randomgif,
  passwordgenerator,
  razorpayclone,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Structures & Algorithms",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5", 
    icon: html,
    progress: 90,
  },
  {
    name: "CSS 3",
    icon: css,
    progress: 80,
  },
  {
    name: "JavaScript",
    icon: javascript,
    progress: 75,
  },
    {
    name: "Tailwind CSS",
    icon: tailwind,
    progress: 90,
  },
  {
    name: "React JS",
    icon: reactjs,
    progress: 90,
  },
  {
    name: "Node JS",
    icon: nodejs,
    progress: 90,
  },
  {
    name: "Three JS",
    icon: threejs,
    progress: 10,
  },
  {
    name: "Express JS", 
    icon: expressjs,
    progress: 70,
  },
  {
    name: "MongoDB",
    icon: mongodb,
    progress: 80,
  },
  {
    name: "Firebase", 
    icon: firebase,
    progress: 60,
  },
  {
    name: "MySQL", 
    icon: mysql,
    progress: 65,
  },
  {
    name: "Git", 
    icon: git,
    progress: 60,
  },
];

const experiences = [
  {
    title: "WebDev Team Lead",
    company_name: "Hail Jarvis, UIET, Kurukshetra University",
    icon: kuk,
    iconBg: "#DEDEDE",
    date: "Dec 2023 - Present",
    points: [
      "Taking monthly sessions on the newest in the world of website development",
      "Guiding peers and resolving their doubts in this field"
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "CodersCave",
    icon: coderscave,
    iconBg: "#DEDEDE",
    date: "Aug 2023 - Sep 2023",
    points: [
      "Made a landing page for a dummy EdTech platform using ReactJS and TailwindCss for frontend and ExpressJS for backend, user data is stored in MongoDB",
      "Learnt about full stack website deployment",
    ],
  },
];

const projects = [
  {
    name: "Instagram Clone",
    description:
      "Created an Instagram clone with photo sharing, user profiles, comments, likes, followers, following, profile exploration, and mobile-friendly design.",
    tags: [
      {
        name: "reactjs",
        color: "#FF2D00", //red
      },
      {
        name: "vite",
        color: "#78AA00", //lime green   
      },
      {
        name: "chakra-ui",
        color: "#00A2AF", //blue
      },
      {
        name: "firebase",
        color: "#FAA700", //yellow
      },
    ],
    image: instagram,
    source_code_link: "https://github.com/vermajay/Instagram-Clone",
    live_link: "https://instagrambyjay.vercel.app/"
  },
  {
    name: "StudyNotion",
    description:
      "It is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack",
    tags: [
      {
        name: "reactjs",
        color: "#FF2D00", //red
      },
      {
        name: "nodejs",
        color: "#7800FF", //purple
      },
      {
        name: "expressjs",
        color: "#FF00F0", //pink
      },
      {
        name: "mongodb",
        color: "#11923C", //dark green
      },
      {
        name: "cloudinary",
        color: "#56A7A0", //light blue
      },
      {
        name: "razorpay",
        color: "#7F7579", //grey
      },
    ],
    image: studynotion,
    source_code_link: "https://github.com/vermajay/StudyNotion",
    live_link: "#"
  },
  {
    name: "Expense Tracker",
    description:
      "Explore my intuitive expense tracker—log income, expenses securely, and it comes with secure login and signup. Effortlessly track spending for informed financial decisions.",
    tags: [
      {
        name: "reactjs",
        color: "#FF2D00", //red
      },
      {
        name: "tailwindcss",
        color: "#0017FF", //dark blue
      },
      {
        name: "firebase",
        color: "#FAA700", //yellow
      },
    ],
    image: expensetracker,
    source_code_link: "https://github.com/vermajay/expense-tracker",
    live_link: "https://trackmyexpenses.web.app/"
  },
  {
    name: "Github Spy",
    description:
      "Input a username, uncover complete GitHub profiles instantly. Explore repositories, contributions, followers, and more in one click—a streamlined way to delve into GitHub users' details.",
    tags: [
      {
        name: "html",
        color: "#8089E8", //grey blue
      },
      {
        name: "css",
        color: "#C280D9", //light purple
      },
      {
        name: "javascript",
        color: "#67B87B", //grey green
      },
      {
        name: "api",
        color: "#5D2168", //dark purple
      },
    ],
    image: githubspy,
    source_code_link: "https://github.com/vermajay/Dev-Detective",
    live_link: "https://githubspy.netlify.app/"
  },
  {
    name: "Weather App",
    description:
      "Discover my versatile weather app! Detailed updates on temperature, humidity, wind speed, and clouds—be ready for any location, any time.",
    tags: [
      {
        name: "html",
        color: "#8089E8", //grey blue
      },
      {
        name: "css",
        color: "#C280D9", //light purple
      },
      {
        name: "javascript",
        color: "#67B87B", //grey green
      },
      {
        name: "api",
        color: "#5D2168", //dark purple
      },
    ],
    image: weather,
    source_code_link: "https://github.com/vermajay/Weather-App",
    live_link: "https://jayverma-weather.netlify.app/"
  },
  {
    name: "Snake & Apples",
    description:
      "Classic Snake game in pure JavaScript: eat apples, grow longer, avoid collisions. Simple, addictive, and no frameworks used.",
    tags: [
      {
        name: "html",
        color: "#8089E8", //grey blue
      },
      {
        name: "css",
        color: "#C280D9", //light purple
      },
      {
        name: "javascript",
        color: "#67B87B", //grey green
      },
    ],
    image: snakegame,
    source_code_link: "https://github.com/vermajay/Snake-game",
    live_link: "https://snakeandapples.netlify.app/"
  },
  {
    name: "Tic-Tac-Toe",
    description:
      "Have fun playing!!",
    tags: [
      {
        name: "html",
        color: "#8089E8", //grey blue
      },
      {
        name: "css",
        color: "#C280D9", //light purple
      },
      {
        name: "javascript",
        color: "#67B87B", //grey green
      },
    ],
    image: tictactoe,
    source_code_link: "https://github.com/vermajay/TicTacToe",
    live_link: "https://jayverma-tictactoe.netlify.app/"
  },
  {
    name: "Random Gif",
    description:
      "Enter your keywords and watch as the site generates tailored GIFs. Instant fun for every search!",
    tags: [
      {
        name: "reactjs",
        color: "#FF2D00", //red
      },
      {
        name: "tailwindcss",
        color: "#0017FF", //dark blue
      },
      {
        name: "api",
        color: "#5D2168", //dark purple
      },
    ],
    image: randomgif,
    source_code_link: "https://github.com/vermajay/Random-Gif",
    live_link: "https://getrandomgif.netlify.app/"
  },
  {
    name: "Password Generator",
    description:
      "Generate strong, custom passwords easily! Set length, symbols, and check their strength instantly on my website.",
    tags: [
      {
        name: "html",
        color: "#8089E8", //grey blue
      },
      {
        name: "css",
        color: "#C280D9", //light purple
      },
      {
        name: "javascript",
        color: "#67B87B", //grey green
      },
    ],
    image: passwordgenerator,
    source_code_link: "https://github.com/vermajay/Password-Generator",
    live_link: "https://givemepassword.netlify.app/"
  },
  {
    name: "RazorPay Clone",
    description:
      "Check out my frontend clone of Razorpay's website, crafted with Tailwind CSS for a polished, responsive design.",
    tags: [
      {
        name: "vite",
        color: "#78AA00", //lime green
      },
      {
        name: "html",
        color: "#8089E8", //grey blue
      },
      {
        name: "tailwindcss",
        color: "#0017FF", //dark blue
      },
    ],
    image: razorpayclone,
    source_code_link: "https://github.com/vermajay/Razorpay-Clone",
    live_link: "https://razorpayfrontend.netlify.app/"
  },
];

export { services, technologies, experiences, projects };