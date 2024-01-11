import Planet_1 from "../public/planet-01.png";
import Planet_2 from "../public/planet-02.png";
import Planet_3 from "../public/planet-03.png";
import Planet_4 from "../public/planet-04.png";
import VirtualWorld from "../public/cesium_omniverse.avif";
import Planet_5 from "../public/planet-05.png";
import Planet_6 from "../public/planet-06.png";
import Planet_7 from "../public/planet-07.png";
import Planet_8 from "../public/planet-08.png";
import Developer_1 from "../public/Developer_1.gif";
import vrpano from "../public/vrpano.svg";
import headset from "../public/headset.svg";
import twitter from "../public/twitter.svg";
import linkedin from "../public/linkedin.svg";
import instagram from "../public/instagram.svg";
import facebook from "../public/facebook.svg";

export const exploreWorlds = [
  {
    id: "virtual-world",
    imgUrl: VirtualWorld,
    title: "Developer_3",
    tags: "Developer_3_tags",
    category: "Developer",
  },
  {
    id: "world-3",
    imgUrl: Planet_3,
    title: "Developer_1",
    tags: "Developer_1_tags",
    category: "Developer",
  },
  {
    id: "world-4",
    imgUrl: Planet_4,
    title: "Developer_2",
    tags: "Developer_2_tags",
    category: "Developer",
  },
  {
    id: "world-1",
    imgUrl: Planet_1,
    title: "Research_1",
    tags: "Research_1_tags",
    category: "Research",
  },
  {
    id: "world-2",
    imgUrl: Planet_2,
    title: "Research_2",
    tags: "Research_2_tags",
    category: "Research",
  },
];

export const startingFeatures = [
  "Find a world that suits you and you want to enter",
  "Enter the world by reading Har Har Mahadev to be safe",
  "No need to beat around the bush, just stay on the gas and have fun",
];

export const newFeatures = [
  {
    imgUrl: vrpano,
    title: "A new world",
    subtitle:
      "we have the latest update with new world for you to try never mind",
  },
  {
    imgUrl: headset,
    title: "More realistic",
    subtitle:
      "In the latest update, your eyes are narrow, making the world more realistic than ever",
  },
];

export const socials = [
  {
    name: "twitter",
    url: twitter,
  },
  {
    name: "linkedin",
    url: linkedin,
  },
  {
    name: "instagram",
    url: instagram,
  },
  {
    name: "facebook",
    url: facebook,
  },
];
