export interface Project {
  name: string;
  descriptionBrief: string;
  descriptionLong: string[];
  client?: string;
  role?: string;
  date?: string;
  slug: string;
  image?: string;
  imageBackground?: string;
  skills: string[];
  technologies?: string[];
  link?: string;
  linkText?: string;
  githubLink?: string;
  logos?: string[];
}
