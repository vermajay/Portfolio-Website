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
  nextjs,
  nodejs,
  mongodb,
  git,
  github_tech,
  coderscave,
  kuk,
  shynotech,
  netart,
  bloomtide,
  threejs,
  firebase,
  expressjs,
  _redux,
  mysql,
  internshala_automation,
  instagram,
  studynotion,
  expensetracker,
  authblogapp,
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
    title: "React & Next Developer",
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
    progress: 95,
  },
  {
    name: "CSS 3",
    icon: css,
    progress: 90,
  },
  {
    name: "JavaScript",
    icon: javascript,
    progress: 80,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    progress: 95,
  },
  {
    name: "Next JS",
    icon: nextjs,
    progress: 40,
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
    progress: 80,
  },
  {
    name: "Redux", 
    icon: _redux,
    progress: 80,
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
    progress: 80,
  },
  {
    name: "Github", 
    icon: github_tech,
    progress: 80,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: " Bloom Tide Consulting",
    company_link: "https://www.bloomtideconsulting.com/",
    icon: bloomtide,
    iconBg: "#35A0E6",
    date: "Aug 2024 - Present",
    points: [
      "Helping clients create their online presence through custom websites using MERN stack",
      "Building MVPs for the company"
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "NetArt",
    company_link: "https://netart.io/",
    icon: netart,
    iconBg: "#FAFAFA",
    date: "Apr 2024 - Jul 2024",
    points: [
      "Built website's backends through Strapi CMS, used RESTful, GraphQL apis and Amazon S3 cloud storage for faster data access",
      "Extended plugins available on Strapi marketplace according to client and project requirement",
      "Used Plasmic for building dynamic frontend"
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Shyno Technology",
    company_link: "https://shynotech.com/",
    icon: shynotech,
    iconBg: "#FAFAFA",
    date: "Mar 2024 - Apr 2024",
    points: [
      "Managing multiple client's websites built on PHP and MySQL",
      "Optimizing sites for SEO while increasing performance and reliability"
    ],
  },
  {
    title: "WebDev Team Lead",
    company_name: "Hail Jarvis, UIET, Kurukshetra University",
    company_link: "https://www.linkedin.com/in/hjarvisofficial/",
    icon: kuk,
    iconBg: "#DADADA",
    date: "Jan 2024 - Present",
    points: [
      "Taking monthly sessions on the newest in the world of website development",
      "Guiding peers and resolving their doubts in this field"
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "CodersCave",
    company_link: "https://www.linkedin.com/company/codersscave/",
    icon: coderscave,
    iconBg: "#FAFAFA",
    date: "Aug 2023 - Sep 2023",
    points: [
      "Made a landing page for a dummy EdTech platform using ReactJS and TailwindCss for frontend and ExpressJS for backend, user data is stored in MongoDB",
      "Learnt about full stack website deployment",
    ],
  },
];

const projects = [
  {
    name: "Internshala Automation",
    description:
      "Wrote a JS script that automatically applies to internships on Internshala using Google’s Puppeteer high level API for chrome, it also fills in cover letter and also answers dynamic assessment questions",
    tags: [
      {
        name: "puppeteer",
        color: "#11923C", //dark green
      },
      {
        name: "javascript",
        color: "#11223C", //gray
      },
      {
        name: "node",
        color: "#7F7579", //grey
      },
    ],
    image: internshala_automation,
    source_code_link: "https://github.com/vermajay/internshala-automation",
    live_link: "https://github.com/vermajay/internshala-automation"
  },
  {
    name: "Instagram Clone",
    description:
      "Created an Instagram clone with photo sharing, user profiles, comments, likes, followers, following, profile exploration, and mobile-friendly design",
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
    live_link: "https://courseharbor.vercel.app/"
  },
  {
    name: "Expense Tracker",
    description:
      "Explore my intuitive expense tracker—log income, expenses securely, and it comes with secure login and signup. Effortlessly track spending for informed financial decisions",
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
    name: "Auth and Autz Blog App",
    description:
      "Experience secure signup, login, and password recovery, posts are rendered in MongoDB and are fetched using paginated implementation of the api",
    tags: [
      {
        name: "reactjs",
        color: "#FF2D00", //red
      },
      {
        name: "framer-motion",
        color: "#F05F00", //orange
      },
      {
        name: "paginated-api",
        color: "#5D2168", //dark purple
      },
      {
        name: "nodemailer",
        color: "#11223C", //gray
      },
      {
        name: "mongodb",
        color: "#11923C", //dark green
      },
      {
        name: "expressjs",
        color: "#FF00F0", //pink
      },
    ],
    image: authblogapp,
    source_code_link: "https://github.com/vermajay/Advisoropedia-Internship-Project",
    live_link: "https://advisoropedia-jay-project.netlify.app/"
  },
  {
    name: "Github Spy",
    description:
      "Input a username, uncover complete GitHub profiles instantly. Explore repositories, contributions, followers, and more in one click—a streamlined way to delve into GitHub users' details",
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
    name: "Snake & Apples",
    description:
      "Classic Snake game in pure JavaScript: eat apples, grow longer, avoid collisions. Simple, addictive, and no frameworks used",
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
    name: "Weather App",
    description:
      "Discover my versatile weather app! Detailed updates on temperature, humidity, wind speed, and clouds—be ready for any location, any time",
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
      "Generate strong, custom passwords easily! Set length, symbols, and check their strength instantly on my website",
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
      "Check out my frontend clone of Razorpay's website, crafted with Tailwind CSS for a polished, responsive design",
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