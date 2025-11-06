import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Abigail Ervin - Softball Catcher and Utility Player",
  author: "Abigail Ervin ",
  description:
    "I am a catcher, corners and utility player with many years of experience starting at 10U and now playing for Pea Ridge High School Lady Blackhawks in Pea Ridge Arkansas.  ",
  lang: "en",
  siteLogo: "/abby_catching.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Coaches", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Abigail Ervin",
    specialty: "Softball Catcher and Utility Player",
    summary:
    "I am a catcher, corners and utility player with many years of experience starting at 10U and now playing for Pea Ridge High School Lady Blackhawks in Pea Ridge Arkansas.  ",
    email: "samuel.ervin@gmail.com",
  },
  experience: [
    {
      company: "14U Vipers",
      position: "Catcher / Utility Player",
      startDate: "2025",
      endDate: "Spring/Summer",
      summary: [
        ".325 batting average with 40 at bats",".450 slugging percentage", 
        "14 RBIs and 3 stolen bases.",
        "112 total chances, 9 assists, and 96 put outs with a .938 fielding percentage.",
        
      ],
    },
    {
      company: "14U Athletics",
      position: "Catcher / Utility Player",
      startDate: "Fall",
      endDate: "2024",
      summary: [
        ".250 batting average with 8 at bats",".625 slugging percentage,",
        "4 RBIs, 3 stolen bases and 2 home runs.",
        "14 total chances, 9 assists, and 12 put outs with a .857 fielding percentage.",
      ],
    },
    {
      company: "14U Lethal",
      position: "Catcher / Utility Player",
      startDate: "Spring/Summer",
      endDate: "2024",
      summary: [
        ".381 batting average with 56 at bats",".983 slugging percentage", 
        "19 RBIs, 5 stolen bases and 1 home run.",
        "18 total chances, 11 assists, and 15 put outs with a .952 fielding percentage.",
      ],
    },
    {
      company: "14U Prime",
      position: "Catcher / Utility Player",
      startDate: "Fall",
      endDate: "2023",
      summary:
        [
        ".399 batting average with 18 at bats",".695 slugging percentage", 
        "6 RBIs and 4 stolen bases.",
      ],
    },
    {
      company: "12U Freedom",
      position: "Catcher / Utility Player",
      startDate: "Spring/Summer",
      endDate: "2023",
      summary:
        [
        ".390 batting average with 54 at bats",".683 slugging percentage", 
        "13 RBIs and 18 stolen bases.",
      ],
    },
    {
      company: "12U Rogers Rebels",
      position: "Catcher / Utility Player",
      startDate: "Fall/Spring/Summer",
      endDate: "2021-2022",
    summary:
      "",
  },
  {
      company: "12U Athletics",
      position: "Utility Player",
      startDate: "Spring/Summer",
      endDate: "2021",
      summary:
        "Stats missing.",
    },],
  projects: [
    {
      name: "Kailey Wyckoff",
      summary: "Catching and Hitting Coach.",
      linkPreview: "/",
      linkSource: "https://arkansasrazorbacks.com/roster/kailey-wyckoff/",
      image: "https://arkansasrazorbacks.com/wp-content/uploads/2025/08/46-Kailey-Wyckoff-1x1-1.jpg",
    },
    {
      name: "Linne Malkin",
      summary: "Hitting Coach.",
      linkPreview: "/",
      linkSource: "https://thenewyorkrise.com/roster-2025/#:~:text=Assistant%20Coach,Linnie%20Malkin",
      image: "https://thenewyorkrise.com/wp-content/uploads/2024/08/linnie-malkin-ny-rise-bio-img-rev1-1024x1024.jpg",
    },
    {
      name: "Brie Ellis",
      summary: "Temporary Hitting Coach.",
      linkPreview: "/",
      linkSource: "https://arkansasrazorbacks.com/roster/bri-ellis/",
      image: "https://arkansasrazorbacks.com/wp-content/uploads/2023/10/77-Bri-Ellis-2024-SB-Headshot.png",
    },
    {
      name: "Kylie Brockman",
      summary: "Catching Coach.",
      linkPreview: "/",
      linkSource: "https://auburntigers.com/sports/softball/roster/player/kylie-brockman",
      image: "https://auburntigers.com/imgproxy/ttVlc27CjWapTGAsEWVbbTJxF0HLm2UwEZlXp03_BQY/rs:fit:480:0:0:0/q:85/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2F1YnVybi1wcm9kLzIwMjUvMDIvMDMvSDlWZzZENXpGek5zM2JvNTBFb3l0eldUNGxMUjZQN0lKcnRhZG4ySy5qcGc.jpg",
    },
  ],
  about: {
    description: `
      Hi, I am Abby Ervin, I love to play softball. I am a primarily a Catcher and Corners player, but I enjoy playing all positions where I am needed. My favorite place overall is behind the plate making plays.  I have been playing softball since I was 11 years old and have played on several travel teams including the 12U Rogers Rebels, 12U Prime, 12U Freedom, 14U Lethal and currently the 14U Vipers/Tide. I started High School this year and after making the team I now also play for the Pea Ridge High School Lady Blackhawks in Pea Ridge Arkansas. After high school I plan to play college softball and major in marine biology. I hope to one day work with all species of sharks and other marine life to help protect and preserve our oceans. When I am not playing softball I enjoy spending time with my family and friends, going out on the lake, and reading different genres of books.
    `,
    image: "/FB_IMG_1762272966420.jpg",
  },
};

// #5755ff
