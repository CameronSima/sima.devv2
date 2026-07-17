export interface WarbirdsMode {
  name: string;
  codename: string;
  url: string;
  host: string;
  description: string;
  accent: "amber" | "sky" | "emerald" | "rose" | "violet";
  icon: "plane" | "anchor" | "tank" | "crosshair" | "ship";
}

export const warbirdsModes: WarbirdsMode[] = [
  {
    name: "Sky Ring",
    codename: "THE ORIGINAL",
    url: "https://warbirds.io",
    host: "warbirds.io",
    description:
      "Two squadrons battle for the Sky Ring above the Brick Sea. Dogfights, torpedo runs, AA guns, and Leviathan gunner seats — first team to 1500 points takes the day.",
    accent: "amber",
    icon: "plane",
  },
  {
    name: "Naval",
    codename: "FLEET ACTION",
    url: "https://naval.warbirds.io",
    host: "naval.warbirds.io",
    description:
      "The fight moves to open water. Man battleship turrets with a ballistic computer, hunt with torpedo bombers, and defend the fleet from the deck up.",
    accent: "sky",
    icon: "anchor",
  },
  {
    name: "Ground",
    codename: "SURFACE WAR",
    url: "https://ground.warbirds.io",
    host: "ground.warbirds.io",
    description:
      "Take the war to the dirt. Armor, emplacements, and close air support collide where the Brick Sea meets land.",
    accent: "emerald",
    icon: "tank",
  },
  {
    name: "Combined Arms",
    codename: "ALL THEATERS",
    url: "https://combined.warbirds.io",
    host: "combined.warbirds.io",
    description:
      "Air, sea, and land in a single battle. Every seat matters — pilot, turret gunner, tail gunner, or boots on the ground.",
    accent: "violet",
    icon: "crosshair",
  },
  {
    name: "USS New Jersey",
    codename: "BB-62 · 1:1 SCALE",
    url: "https://warbirds.io/battleship",
    host: "warbirds.io/battleship",
    description:
      "Walk every deck of a 270-meter voxel battleship at 1:1 scale — bridge to engine room, magazine to main-battery plot — then fight her in historical engagements.",
    accent: "rose",
    icon: "ship",
  },
];
