import { Project, SoftwareProject } from "./models";

export const projects: Project[] = [
  {
    name: "Nike Never Done campaign",
    descriptionBrief: "A campaign for Nike's Never Done campaign",
    descriptionLong: [
      "A tool to store YouTube videos",
      "A tool to store YouTube videos",
      "A tool to store YouTube videos",
    ],
    client: "Nike",
    slug: "nike-never-done",
    image: "nike-never-done.png",
    skills: ["React Native", "Mobile", "Design"],
  },
  {
    name: "Lunar Rover experience",
    descriptionBrief: "An interactive experience for the Lunar Rover",
    descriptionLong: [
      "An interactive experience for the Lunar Rover",
      "An interactive experience for the Lunar Rover",
      "An interactive experience for the Lunar Rover",
    ],
    client: "Lockheed Martin",
    slug: "lunar-rover",
    image: "lunar-rover.png",
    skills: ["React Native", "Mobile", "Livestreaming"],
  },
  {
    name: "AT&T Scavenger Hunt",
    descriptionBrief: "A scavenger hunt for AT&T",
    descriptionLong: [
      "A scavenger hunt for AT&T",
      "A scavenger hunt for AT&T",
      "A scavenger hunt for AT&T",
    ],
    client: "AT&T",
    slug: "att-scavenger-hunt",
    image: "find-qr-code.png",
    skills: ["Gaming", "AR", "Animation"],
  },
  {
    name: "AT&T Window Display",
    descriptionBrief: "A window display for AT&T",
    descriptionLong: [
      "A window display for AT&T",
      "A window display for AT&T",
      "A window display for AT&T",
    ],
    client: "AT&T",
    slug: "att-window-display",
    image: "att-window-display.jpg",
    skills: ["Gaming", "AR", "Animation"],
  },
  {
    name: "AT&T Cezanna",
    descriptionBrief: "A Cezanna for AT&T",
    descriptionLong: [
      "A Cezanna for AT&T",
      "A Cezanna for AT&T",
      "A Cezanna for AT&T",
    ],
    client: "AT&T",
    slug: "att-cezanna",
    image: "cezanna.jpg",
    skills: ["Gaming", "AR", "Animation"],
  },
  {
    name: "Small Threads",
    descriptionBrief: "A window display for AT&T",
    descriptionLong: [
      "A window display for AT&T",
      "A window display for AT&T",
      "A window display for AT&T",
    ],
    client: "Small Threads",
    slug: "att-window-display",
    image: "willows-small.png",
    skills: ["Gaming", "AR", "Animation"],
  },
];

const SoftwareProjects: SoftwareProject[] = [
  {
    name: "ICloud Deduper",
    descriptionBrief: "A tool to dedupe your iCloud photos",
    descriptionLong: [
      "A tool to dedupe your iCloud photos",
      "A tool to dedupe your iCloud photos",
      "A tool to dedupe your iCloud photos",
    ],
    slug: "icloud-deduper",
    image: "icloud-deduper.jpg",
    githubLink: "",
    skills: ["React Native", "Mobile", "Animation"],
  },
  {
    name: "YoutTube Tape Storage",
    descriptionBrief: "A tool to store YouTube videos",
    descriptionLong: [
      "A tool to store YouTube videos",
      "A tool to store YouTube videos",
      "A tool to store YouTube videos",
    ],
    slug: "youtube-tape-storage",
    image: "youtube-tape-storage.jpg",
    githubLink: "",
    skills: ["React Native", "Mobile", "Animation"],
  },
  {
    name: "YouTube Text Search",
    descriptionBrief: "A tool to search YouTube videos by text",
    descriptionLong: [
      "A tool to store YouTube videos",
      "A tool to store YouTube videos",
      "A tool to store YouTube videos",
    ],
    slug: "youtube-text-search",
    image: "youtube-text-search.jpg",
    githubLink: "",
    skills: ["React Native", "Mobile", "Animation"],
  },
  {
    name: "Telecaster.io",
    descriptionBrief: "A tool to search YouTube videos by text",
    descriptionLong: [
      "A tool to store YouTube videos",
      "A tool to store YouTube videos",
      "A tool to store YouTube videos",
    ],
    slug: "youtube-text-search",
    image: "youtube-text-search.jpg",
    githubLink: "",
    skills: ["React Native", "Mobile", "Animation"],
  },
  {
    name: "News Skewer",
    descriptionBrief: "A tool to search YouTube videos by text",
    descriptionLong: [
      "A tool to store YouTube videos",
      "A tool to store YouTube videos",
      "A tool to store YouTube videos",
    ],
    slug: "youtube-text-search",
    image: "youtube-text-search.jpg",
    githubLink: "",
    skills: ["React Native", "Mobile", "Animation"],
  },
  {
    name: "Wordsmith",
    descriptionBrief: "A tool to search YouTube videos by text",
    descriptionLong: [
      "A tool to store YouTube videos",
      "A tool to store YouTube videos",
      "A tool to store YouTube videos",
    ],
    slug: "youtube-text-search",
    image: "youtube-text-search.jpg",
    githubLink: "",
    skills: ["React Native", "Mobile", "Animation"],
  },
];

export function getProjectFromSlug(slug?: string) {
  return projects.find((project) => project.slug === slug);
}
