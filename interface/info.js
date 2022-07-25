// import profile from "/public/images/iam.jpg"
import profile from "/public/images/iam-removebg.png"
// import profile from "/public/images/perfil.png"

// port
import port1 from "/public/images/portfolio/port1.png"
import port2 from "/public/images/portfolio/port2.png"
import port3 from "/public/images/portfolio/port3.png"
import port4 from "/public/images/portfolio/port4.png"

// certigicate
import xample from "/public/images/Elegant-certificate.jpg"

import {
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons"

export const info = {
  profileLogo: profile,
  firstName: "Attapat",
  lastName: "Kayasa",
  initials: "Ak", // the example uses first and last, but feel free to use three or more if you like.
  position: "web developer",
  miniBio: [
    {
      emoji: "📚",
      text: "Learning",
    },
    {
      emoji: "🚀",
      text: "Active",
    },
    {
      emoji: "💼",
      text: "Frontend Developer at INET",
    },
    {
      emoji: "📧",
      text: "attapat.kayasa@gmail.com",
    },
    {
      emoji: "📞",
      text: "(+66)88-187-7188",
    },
  ],
  socials: [
    {
      link: "#",
      icon: <FacebookOutlined />,
      alt: "facebook",
    },
    {
      link: "#",
      icon: <GithubOutlined />,
      alt: "github",
    },
    {
      link: "#",
      icon: <LinkedinOutlined />,
      alt: "linkin",
    },
  ],
  bio: "Hello! 👋🏻 I'm Attapat. I'm a web developer for INET. I studied IT at Prince of Songkhla University and Bussiness Computer at Hatyai commercial technological college , I enjoy to work. I am studying go , react.js etc. I always want to learn something new,and I believe that my knowledge will definitely help develop your company. You should hire me!",
  skills: {
    Intermediate_FE: [
      "Javascript",
      "React/Next",
      "Vue/Nuxt",
      "Angular",
      "Git",
      "Html",
      "Css",
      "WordPress",
    ],
    Intermediate_FE_Basic: [],
    Intermediate_BE: ["Go", "PHP", "Docker", "Nginx", "Linux"],
    Intermediate_BE_Basic: [
      "Nest.js",
      "Database",
      "Database-design",
      "Kubernetest",
    ],
  },
  certificate: [
    {
      title: "xample",
      img: xample,
    },
    {
      title: "xample",
      img: xample,
    },
    
  ],
  hobbies: [
    {
      label: "learning",
      emoji: "📖",
    },
    {
      label: "theater",
      emoji: "🎭",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "music",
      emoji: "🎹",
    },
    {
      label: "play_games",
      emoji: "🎮",
    },
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Project onechat food. (Nuxt.js)",
      //   live: "https://example.com",
      source: "https://example.com",
      image: port1,
      description: "Food delivery platform in onechat application",
      details: [
        "Optimize the old system to be more efficient.",
        "Get requirements",
        "Add new feature according to requirements.",
        "Connect API to back-ends and other services.",
        "Assign tasks to team members and follow up on the results of work.",
        "System testing and follow-up.",
      ],
    },
    {
      title: "Project Survey Platform. (Angular 9)",
      //   live: "https://example.com",
      source: "https://example.com",
      image: port2,
      description: "Customer satisfaction survey for inet",
      details: [
        "Create a dynamic satisfaction survey.",
        "Show satisfaction score",
        "Liaise and get requirements",
        "System analysis and design",
        "Create projects and design UX/UI",
        "Connect API to Back-end",
        "Add new feature according to requirement",
        "Test the system, track it, and deploy to production.",
      ],
    },
    {
      title: "Workshop Coffee shop (Wordpress)",
      //   live: "https://example.com",
      source: "https://example.com",
      image: port3,
      description: "",
      details: ["Learn wordpress", "Learn php html css", "Design UX/UI"],
    },
    {
      title: "Portfolio (Next.js)",
      //   live: "https://example.com",
      source: "https://example.com",
      image: port4,
      description: "",
      details: ["Learn Next.js", "Learn Jsx Html Css", "Design UX/UI"],
    },
  ],
}
