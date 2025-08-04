import type { JobDetails } from '../types';

export const employmentHistory: JobDetails[] = [
  {
    jobTitle: 'Software Developer',
    employer: 'Flight Centre',
    employerWebsite: 'https://www.flightcentre.com.au/',
    employmentType: 'Full Time, Hybrid',
    tenure: 'Mar 2024 - Present',
    achievements: [
      `Working as part of a team charged with modernising Flight Centre’s online checkout infrastructure using event-store architecture accessed by a NestJS backend`,
      `Led the launch and transition of a new online checkout experience, ensuring a smooth go-live and ongoing improvements to both user and developer experience`,
      `Helped develop a centralised system for handling bookings and payments, enabling a more consistent and scalable experience across multiple digital products`,
      `Improved payment processing for legacy systems, reducing manual effort and streamlining the purchase process for customers`,
    ],
  },
  {
    jobTitle: 'Junior Software Developer',
    employer: 'Cadent',
    employerWebsite: 'https://cadent.au/',
    employmentType: 'Full Time, Hybrid',
    tenure: 'Sep 2023 - Feb 2024',
    achievements: [
      `Consultancy environment which necessitated balancing multiple projects, allocating time effectively, and tracking time for billing purposes`,
      `Full-stack software developer primarily working with TypeScript, NextJS, Postgres, Supabase, as well as Dynamics 365`,
      `Assisted with designing and developing a user management system for a medium sized online publication including a basic BI tool for the management team to gain insights into their users`,
      `Worked on a large government initiative designed to enable skilled workers from Pacific Island nations to gain employment with Australian businesses which struggle to find employees`,
    ],
  },
  {
    jobTitle: 'Junior Software Developer',
    jobTitleSecondary: '& Intern Software Developer (Until Jul 2023)',
    employer: 'Coviu Global',
    employerWebsite: 'https://www.coviu.com',
    employmentType: 'Full Time, Remote',
    tenure: 'Oct 2022 - Sep 2023',
    achievements: [
      `Full-stack developer working across the entire codebase from writing data models for the company’s ELT data warehouse, to developing new front-end features with React`,
      `Developed foundational skills working on large-scale software systems in a multi-team environment, including version control, CI/CD, and Agile methodologies`,
      `Undertook a large back-end project to refactor a number of business reports. Improved design patterns, database querying, type safety, as well as the reliability of the reports for the end user`
    ],
  },
];
