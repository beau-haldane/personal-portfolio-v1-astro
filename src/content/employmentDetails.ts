import type { JobDetails } from '../types';

export const employmentHistory: JobDetails[] = [
  {
    jobTitle: 'Junior Software Engineer',
    employer: 'Cadent',
    employerWebsite: 'https://cadent.au/',
    employmentType: 'Full Time, Hybrid',
    tenure: 'Sep 2023 - Jan 2024',
    achievements: [
      `Full-stack software engineer primarily working with TypeScript, NextJS, Postgres, Supabase, as well as some project work using Dynamics 365 & jQuery`,
      `Assisted with designing and developing a user management system for a medium sized online publication including a basic BI tool for the management team to gain insights into their users`,
      `Worked on a large government initiative designed to enable skilled workers from Pacific Island nations to gain employment with Australian businesses which struggle to find employees`,
    ],
  },
  {
    jobTitle: 'Junior Software Engineer',
    jobTitleSecondary:'& Intern Software Developer (Until Jul 2023)',
    employer: 'Coviu Global',
    employerWebsite: 'https://www.coviu.com',
    employmentType: 'Full Time, Remote',
    tenure: 'Oct 2022 - Sep 2023',
    achievements: [
      `Full-stack engineer working across the entire codebase from writing data models for the company’s ELT data warehouse, to developing new front-end features with React.`,
      `Developed foundational skills working on large-scale software systems in a multi-team environment, including version control, CI/CD, and Agile methodologies`,
      `Undertook a large back-end project to refactor a number of business reports. Improved design patterns, database querying, type safety, as well as the reliability of the reports for the end user.`
    ],
  },
  {
    jobTitle: 'Web Developer & Designer',
    employer: 'Freelance',
    employmentType: 'Part Time/Contract',
    tenure: '2015 - 2022',
    achievements: [
      `Developed complete project ownership by working on the full scope of each project from design ideation to development`,
      `Discovered and interpreted client needs in order to deliver projects on time and within scope`,
      `Designed mock-ups in Figma and converted them to functional websites`
    ],
  }
];
