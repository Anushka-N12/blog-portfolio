import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Anushka",
  lastName: "Narsima",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI Engineer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Dubai", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Reach out to me for collaboration or help!</>,
  description: (
    <>
      I often participate w groups in hackathons, CTFs & other tech contests.
      I'm also always enthusiastic to learn more, so share thoughts on my projects, or just chat!
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Anushka-N12",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/anushka-narsima-a-00729124b/",
  },
  // {
  //   name: "X",
  //   icon: "x",
  //   link: "",
  // },
  {
    name: "Email",
    icon: "email",
    link: "mailto:anushka.narsima@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>AI Engineer</>,
  subline: (
    <>
      I'm Anushka, a final year computer systems engineering student at <InlineCode>Middlesex University</InlineCode>,
      <br /> building AI-based projects that serve a purpose.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Anushka is an engineering student aspiring to be an AI engineer with a passion for transforming complex challenges
        into simple, innovative solutions. Her work spans models dealing with tables, image & audio data, and implementations
        into various use-cases, learning the convergence of math and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Headstarter AI",
        timeframe: "July 2024 - Sept 2024",
        role: "Software Engineering Fellow",
        achievements: [
          "Developed full-stack web applications with NextJS, MongoDB, Firebase, & OpenAI APIs."
        ],
        images: [],
      },
      {
        company: "Apps AiT",
        timeframe: "June 2024 - Sept 2024",
        role: "ML Engineer Intern",
        achievements: [
          "Developed Computer Vision models using TensorFlow and implemented chatbots with LLMs & RAG.",
          "Configured and managed a Linux server hosting AI models."
        ],
        images: [],
      },
      {
        company: "Smallcap.ai",
        timeframe: "June 2024 - August 2024",
        role: "AI Lead",
        achievements: [
          "Led the development of Web3 token analysis models, integrating quantitative and qualitative methods.",
          "Scraped crypto data using BeautifulSoup & Selenium."
        ],
        images: [],
      },
      {
        company: "Infosys Springboard",
        timeframe: "June 2024 - July 2024",
        role: "AI Intern",
        achievements: [
          "Integrated Deepface recognition with PostgreSQL and automated report creation & scheduling."
        ],
        images: [],
      },
      {
        company: "Google Developers Student Club MDX",
        timeframe: "2022 - 2023",
        role: "AI Lead",
        achievements: [
          "Organized talks and demonstrations to introduce students to AI & other tech domains."
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Middlesex University",
        description: <>Computer Systems Engineering</>,
      }//,
      // {
      //   name: "Build the Future",
      //   description: <>Studied online marketing and personal branding.</>,
      // },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "TensorFlow",
        description: <>Developed highly accurate CV modelswith TF, now learning intermediate topics like customisation.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Python",
        description: <>Building advanced projects in python for 4+ years, using various libraries & APIs.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Web/App Interfaces",
        description: <>Built basic web & android apps that connect to backend ie. data/models. </>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Cloud Computing",
        description: <>Used mainly GCP services for APIs, storage & deployment.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      }
    ],
  },
};

const blog = {
  label: "Project Blog",
  title: "Weekly updates of the final project",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `AI projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "Final Project Gallery",
  description: `Developed by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    }
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
