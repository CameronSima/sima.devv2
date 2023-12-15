import { Project } from "./models";

export const projects: Project[] = [
  {
    name: "Nike Never Done campaign",
    date: "2021",
    descriptionBrief: "A mobile app for Nike's Never Done ad campaign",
    descriptionLong: [
      "Partnered with BRDG Studios to create an in-store digital experience for Nike's Never Done campaign.",
      "Using a custom in-store web interface to fill out a survey on personal exercise goals, musical tastes, and fashion preferences, the user is presented with a QR code to scan with their phone. The QR code opens a mobile-first webpage that displays personalized graphics and design based on the user's survey answers and a personally curated playlist on Spotify.",
      "Built with React, TypeScript, TailwindCSS, and Express.js.",
    ],
    client: "Nike",
    slug: "nike-never-done",
    image: "nike-never-done.png",
    imageBackground: "#dcdbdb",
    skills: ["React Native", "Mobile", "Design"],
  },
  {
    name: "Lunar Rover Experience",
    descriptionBrief: "An interactive virtual lunar rover experience",
    descriptionLong: [
      "Contributed web and video streaming expertise to a team of engineers and designers to create an interactive virtual lunar rover experience for Lockheed Martin's Lunar Rover tradeshow booth.",
      "Using an immersive 3D environment, the user can explore the lunar rover, interact with various parts of the rover, and drive across the moon's surface, exploring the virtual landscape and moonbase. The user's point of view, as well as an overhead panorama of the scene are live streamed to a large screen above the tradeshow floor, allowing the user to share their experience with others.",
      "Built with NextJS, Express.js, ffmpeg, and Three.js.",
    ],
    client: "Lockheed Martin",
    slug: "lunar-rover",
    image: "lunar-rover.png",
    imageBackground: "#464c5e",
    skills: ["React Native", "Mobile", "Livestreaming"],
  },
  {
    name: "AT&T Scavenger Hunt",
    descriptionBrief: "An immersive AR gaming experience for AT&T stores",
    descriptionLong: [
      "An in-store augmented reality experience for select AT&T stores.",
      "Using a custom mobile app, users can scan QR codes placed throughout the store inside virtual 'gift boxes' to reveal a prize. The user can then redeem their prize at the store's checkout counter.",
      "React Native, WebAR, 8th Wall",
    ],
    client: "AT&T",
    slug: "att-scavenger-hunt",
    image: "find-qr-code.png",
    imageBackground: "#3b4c53",
    skills: ["Gaming", "AR", "Animation"],
  },
  {
    name: "AT&T Window Display",
    descriptionBrief: "An immersive AR window display for AT&T stores",
    descriptionLong: [
      "An in-store augmented reality holiday experience for select AT&T stores.",
      "Using a custom mobile app, users can point their phone cameras a window display to reveal a hidden wintry holiday scene.",
      "React Native, WebAR, 8th Wall",
    ],
    client: "AT&T",
    slug: "att-window-display",
    image: "att-scavenger-hunt.png",
    imageBackground: "#50aae1",
    skills: ["Gaming", "AR", "Animation"],
  },
  {
    name: "Cezanna",
    descriptionBrief:
      "Promotional web experience for Cezanne exhibit at Philadelphia Museum of Art",
    descriptionLong: [
      "Contributed web development and design for a a photobooth exibit at the Philadelphia Museum of Art.",
      "Users can take a photo of themselves and apply a Cezanne-inspired filter ans frame to their photo. The user can then share their photo on social media.",
      "Built with React, TypeScript, and TailwindCSS.",
    ],
    client: "Philadelphia Museum of Art",
    slug: "att-cezanna",
    image: "cezanna.png",
    imageBackground: "#beb5a6",
    skills: ["Web", "Mobile", "Design"],
  },
  {
    name: "Small Threads",
    descriptionBrief: "Photography website for Small Threads",
    descriptionLong: [
      "Photographer Small Threads' online portfolio",
      "Custom web design and development geared towards showcasing the photographer's work using simple, clean design.",
      "Minimalistic but thoughtful design, allowing the photography to take center stage. Responsive layout and performance optimized for quickly loading dozens of high-rez images.",
      "Built with NextJS, TypeScript, and TailwindCSS.",
    ],
    client: "Small Threads",
    slug: "small-threads",
    image: "willows-small.png",
    imageBackground: "#bcbfbe",
    skills: ["Design", "Web"],
  },
  {
    name: "ICloud Deduper",
    descriptionBrief: "A mobile app to dedupe your iCloud photos",
    descriptionLong: [
      "ICloud Deduper is a mobile app that helps you find and delete duplicate or very similar photos from your iCloud account.",
      "Have you ever taken many photos of the same scene to get the perfect shot? Or taken a burst of photos to capture a moment? ICloud Deduper helps you find and delete these duplicate photos while leaving the one best image, freeing up space in your iCloud account.",
      "Built with React Native, Python, FastAPI, Python Cryptography package, and TensorFlow.js.",
    ],
    slug: "icloud-deduper",
    githubLink: "",
    skills: ["FastAPI", "Python", "Mobile", "Tensor Flow"],
  },
  {
    name: "YoutTube Tape Storage",
    descriptionBrief:
      "A tool to encode arbitrary data to colored pixels in a video and upload to YouTube",
    descriptionLong: [
      "Encodes binary data into hex color values and stores the data in frames in a video file.",
      "Users can upload these video files to cloud video storage services like YouTube, and then download the video and decode the data back into its original form.",
      "Based on a similar project 'Infinite-Storage-Glitch' written in Rust, this is a Go implementation. Whereas the original encodes black and white only, this version encodes data into hex colors for increased compression.",
      "Built with Golang.",
    ],
    slug: "youtube-tape-storage",
    //image: "youtube-tape-storage.jpg",
    githubLink: "https://github.com/CameronSima/golang-tape-storage/tree/main",
    skills: ["Golang"],
  },
  {
    name: "Lingua Lighthouse",
    descriptionBrief: "A tool to search YouTube channels for spoken language'",
    descriptionLong: [
      "Allows users to select a youtube channel or video and search for spoken language in the video.",
      "Features an interface that lets user skip through a video to instances of the spoken language, and then save the video and timestamp to a list.",
      "Built with React, TailwindCSS, AWS Lambda, SQS, and DynamoDB.",
    ],
    slug: "lingua-lighthouse",
    image: "lingualighthouse2.png",

    link: "https://www.lingualighthouse.com/",
    skills: ["React Native", "Mobile", "Animation"],
  },
  {
    name: "Telecaster.io",
    descriptionBrief: "A tool to search YouTube videos by text",
    descriptionLong: [
      "A web-based video multistreaming tool.",
      "Allows users to import RTMP video streams from multiple sources, and then output a single stream to video platforms like YouTube or Twitch.",
      "Use cases include live music performances, live sports, and live gaming. Using a custom link, multiple users can stream an event from their mobile device. Then, a producer can use Telecaster to combine all the streams into a single stream or switch between streams in directore mode, and either edit further in OBS or output the combined stream directly to video platforms such as Twitch, Facebook Live, and YoutTube all at once.",
      "Streams can also be broadcast on the telecaster.io website, allowing users to watch the stream without needing to use a video platform.",
      "Built with Angular, TypeScript, ffmpeg, and NestJS.",
    ],
    slug: "telecaster",
    //image: "youtube-text-search.jpg",
    //githubLink: "",
    skills: ["NestJS", "Nginx", "Angular", "WebRTC"],
  },
  {
    name: "News Skewer",
    descriptionBrief: "A tool to search YouTube videos by text",
    descriptionLong: [
      "A news aggregator that lets you see how different news sources are covering the same story.",
      "News articles are grouped by story, and each story is graded using positivity/ negativity and objectivity scores. Articles are then compared against similar articles from other news sources.",
      "Features a custom-built web scraper and sentiment analysis engine.",
      "Built with Django, TailwindCSS, and AlpineJS.",
    ],
    slug: "newsskewer",
    image: "newsskewer.png",
    link: "https://web.archive.org/web/20221003020508/https://newsskewer.com/",
    skills: ["Django", "TailwindCSS", "AlpineJS", "Web"],
  },
  {
    name: "Wordsmith",
    descriptionBrief: "An Android mobile game",
    descriptionLong: [
      "A multiplayer word search game. Given a set of 6-10 letters, depending on the level, players must find as many words as possible within the time limit.",
      "Faturing multiple game modes and difficulty levels, Wordsmith is a fun and challenging game for all ages. Includes single player, multiplayer, practice modes, bonus rounds, and powerups, such as word hints and time extensions.",
      "Built with Unity, Django, and Python.",
    ],
    slug: "wordsmith",
    image: "wordsmith.png",
    githubLink: "",
    skills: ["Unity", "Django", "Python", "Gaming"],
  },
];

export function getProjectFromSlug(slug?: string) {
  return projects.find((project) => project.slug === slug);
}
