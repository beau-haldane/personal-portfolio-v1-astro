import type { ProjectDetails } from '../types';

export const softwareProjects: ProjectDetails[] = [
  {
    projectTitle: 'Bite Board',
    projectImagePath: '/img/project-image.png',
    repositoryLinks: [
      { linkTitle: 'Front-end repository', linkHref: 'https://github.com/ptp-admin/bite-board-client' },
      { linkTitle: 'Back-end repository', linkHref: 'https://github.com/ptp-admin/bite-board-server' }
    ],
    details: [
      'Dual microservice architecture - SvelteKit and Tailwind front-end, with Express and Supabase on the back-end, utilising TypeScript throughout.',
      'Enables users to quickly choose recipes for the week, scale them to their required servings, and generate a comprehensive list of ingredients - like a manual version of Hello Fresh',
    ],
  },
  {
    projectTitle: 'Menajerie Website',
    projectLink: 'https://www.menajerie.com.au/',
    projectImagePath: '/img/project-image.png',
    repositoryLinks: [
      { linkTitle: 'Front-end repository', linkHref: 'https://github.com/beau-haldane/menajerie-svelte' }
    ],
    details: [
      'My band had a Wix website which was costing us around $200 per year. It was lacking a little in the looks department, and Wix had poor support for updating the site with our live gigs. I designed and built this static site using Svelte and Tailwind. It deploys to GitHub Pages, queries a table in Supabase to display our upcoming gigs (if there are any), and we save $200.',
    ],
  },
  {
    projectTitle: 'King Velvet Website',
    projectImagePath: '/img/project-image.png',
    repositoryLinks: [
      { linkTitle: 'Front-end repository', linkHref: 'https://github.com/beau-haldane/king-velvet-website' }
    ],
    details: [
      'Local musician King Velvet was releasing his debut album and was in need of a website to aid with promotion. Not only did he want the website to look and feel great, but he wanted a music player embedded into the site so that he could easily share his music with friends and family without them needing to sign up for a streaming service.'
    ],
  },
];

export const otherProjects: ProjectDetails[] = [
  {
    projectTitle: 'Haldane Drums',
    projectLink: 'https://www.instagram.com/haldanedrums/',
    projectImagePath: '/img/project-image.png',
    details: [
      'Between 2017 and 2021 I ran a small, boutique manufacturing business crafting and selling steam-bent drums.',
      `The processes I developed to create my drums were hard-earned - there isn’t a lot of information out there on how to steam-bend a drum shell. Through trial, error, and perseverance, I managed to figure out my own methodology for crafting these beautiful drum shells. I adorned them with hardware which I designed myself and sold them to customers across the globe.`
    ],
  },
  {
    projectTitle: '3D Printed Snare Drum',
    projectLink: 'https://www.youtube.com/watch?v=Vht4_o5HiZo',
    projectImagePath: '/img/project-image.png',
    details: [
      `In 2023 I was gifted my first 3D printer. It wasn’t long before my mind turned toward printing a snare drum.`,
      'Building from an existing design, and using the lessons I had learned from running my business, I designed a novel method for printing drum shells which is modular, easy to assemble, and requires minimal post-processing of parts.',
    ],
  },
  {
    projectTitle: 'King Velvet Album',
    projectLink: 'https://open.spotify.com/album/4IBv4kBjc9c9P6FgNkaaUp',
    projectImagePath: '/img/project-image.png',
    details: [
      `Not only did I design and build the website for King Velvet’s debut album, I also recorded, produced, and mixed the album.`,
      'I assisted King Velvet with songwriting, played a number of instruments on each song, and captured the results so that he could share the music that he had been wanting to share for so long.'
    ],
  },
];
