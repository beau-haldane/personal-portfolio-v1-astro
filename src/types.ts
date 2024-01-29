export interface JobDetails {
  jobTitle: string;
  jobTitleSecondary?: string;
  employer: string;
  employerWebsite?: string;
  employmentType: string;
  tenure: string;
  achievements: string[];
};

export interface ProjectDetails {
  projectTitle: string;
  projectLink?: string;
  projectImagePath: string;
  repositoryLinks?: {
    linkTitle: string;
    linkHref:string;
  }[]
  details: string[];
};