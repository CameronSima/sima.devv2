export interface Project {
  name: string;
  descriptionBrief: string;
  descriptionLong: string[];
  client: string;
  slug: string;
  image: string;
  skills: string[];
}

export interface SoftwareProject {
  name: string;
  descriptionBrief: string;
  descriptionLong: string[];
  slug: string;
  image: string;
  githubLink: string;
  skills: string[];
}
