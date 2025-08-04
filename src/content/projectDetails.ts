import type { ProjectDetails } from '../types';

export const softwareProjects: ProjectDetails[] = [
  {
    projectTitle: 'Print-A-Drum',
    projectLink: 'https://beau-haldane.github.io/print-a-drum/',
    projectImagePath: '/img/projects/print-a-drum.JPG',
    details: [
      'Leverages the `replicad` package to take user input and generate 3D models which can be downloaded, 3D printed, and assembled into a usable instrument.',
      `In 2023 I designed my own version of a 3D printable snare drum using a static model I'd designed in Fusion 360. I wanted a way to enable users to define their own parameters for a drum (depth, diameter, thickness, etc) and generate 3D models which could be printed and assembled at home on an ordinary 3D printer. Through much trial end error I settled on a package called replicad, and I brough Print-A-Drum to life. It runs entirely within the browser and leverages the design system of my initial static 3D model while allowing users to dictate many custom parameters to enable them to generate models for their own drum`
    ],
    skillsUsed: ['TypeScript', 'React', 'Zustand (state management)', 'Mantime (components)']
  },
  {
    projectTitle: 'Personal Portfolio',
    projectImagePath: '/img/projects/portfolio.png',
    repositoryLinks: [
      { linkTitle: 'Git repository', linkHref: 'https://github.com/beau-haldane/personal-portfolio-v1-astro' },
    ],
    details: [
      `Personal Portfolio website built using Astro and good old fashioned CSS. I utilised Astro due to its suitability for content websites, as well as fast loading times. I wanted to brush up on my CSS skills, so I styled the website manually rather than using a framework`,
      `I designed the site in Figma and styled the site using a mobile-first approach. The site is fully responsive and the design is deliberately simple - no bells and whistles to obfuscate poor UI and UX decisions`,
    ],
    skillsUsed: ['TypeScript', 'Astro', 'CSS', 'Figma', 'Responsive Design'],
  },
  {
    projectTitle: 'Bite Board',
    projectImagePath: '/img/projects/bite-board.png',
    repositoryLinks: [
      { linkTitle: 'Front-end repository', linkHref: 'https://github.com/ptp-admin/bite-board-client' },
      { linkTitle: 'Back-end repository', linkHref: 'https://github.com/ptp-admin/bite-board-server' },
    ],
    details: [
      'Dual microservice architecture - SvelteKit and Tailwind front-end, with Express and Supabase on the back-end, utilising TypeScript throughout.',
      'Enables users to quickly choose recipes for the week, scale them to their required servings, and generate a comprehensive list of ingredients - like a manual version of Hello Fresh',
    ],
    skillsUsed: ['TypeScript', 'SvelteKit', 'Tailwind', 'Express', 'SQL', 'Supabase', 'Project Architecture'],
  },
];

export const otherProjects: ProjectDetails[] = [
  {
    projectTitle: 'Haldane Drums',
    projectLink: 'https://www.instagram.com/haldanedrums/',
    projectImagePath: '/img/projects/haldane-drums.png',
    details: [
      'Between 2017 and 2021 I ran a small, boutique manufacturing business crafting and selling steam-bent drums.',
      `The processes I developed to create my drums were hard-earned - there isn’t a lot of information out there on how to steam-bend a drum shell. Through trial, error, and perseverance, I managed to figure out my own methodology for crafting these beautiful drum shells. I adorned them with hardware which I designed myself and sold them to customers across the globe.`,
    ],
    skillsUsed: ['CAD/CAM', 'CNC Machining', 'Process Development', 'Business Management']
  },
  {
    projectTitle: '3D Printed Snare Drum',
    projectLink: 'https://www.youtube.com/watch?v=Vht4_o5HiZo',
    projectImagePath: '/img/projects/3dpsd.png',
    details: [
      `In 2023 I was gifted my first 3D printer. It wasn’t long before my mind turned toward printing a snare drum.`,
      'Building from an existing design, and using the lessons I had learned from running my business, I designed a novel method for printing drum shells which is modular, easy to assemble, and requires minimal post-processing of parts.',
    ],
    skillsUsed: ['CAD', '3D Printing', 'Solution Design', 'Video Production']
  },
  {
    projectTitle: 'King Velvet Album',
    projectLink: 'https://open.spotify.com/album/4IBv4kBjc9c9P6FgNkaaUp',
    projectImagePath: '/img/projects/king-velvet.png',
    details: [
      `Not only did I design and build the website for King Velvet’s debut album, I also recorded, produced, and mixed the album.`,
      'I assisted King Velvet with songwriting, played a number of instruments on each song, and captured the results so that he could share the music that he had been wanting to share for so long.',
    ],
    skillsUsed: ['Project Management', 'Project Completion', 'Songwriting', 'Music Production']
  },
];
