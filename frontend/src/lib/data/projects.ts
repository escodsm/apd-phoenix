export type Project = {
  id: number;
  title: string;
  description: string;
  media?: {
    type: 'video' | 'image';
    src: string;
    poster?: string;
    alt?: string;
  }[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Augmented Reality iOS App - International Game Technology",
    description:
      "Developed an AR training app for iOS using SOLIDWORKS, Creo Illustrate, Vuforia Engine, and Angular/Ionic framework.",
    media: [
      {
        type: "video",
        src: "/videos/AR Demo2 - iOS.mp4",
        poster: "/images/poster45.png",
        alt: " AR iOS App Demo"
      }
    ]
  },
  {
    id: 2,
    title: "Learning Wizard - International Game Technology",
    description:
      "UI/UX development for web-based training, converting Flash/Flex to HTML5/AngularJS.",
    media: [
      {
        type: "video",
        src: "/videos/interactive2.mp4",
        poster: "/images/poster1.png",
        alt: "Interactive Training Demo"
      },
      {
        type: "video",
        src: "/videos/exGUI1.mp4",
        poster: "/images/poster2.png",
        alt: "GUI Training Demo"
      }
    ]
  },
  {
    id: 3,
    title: "Digital Twin - University of Wisconsin, Milwaukee",
    description:
      "Digital HMI simulation platform for tracking KPIs and OEE. Included AR demo at Automation Fair 2024.",
    media: [
      {
        type: "video",
        src: "/videos/dryFill_success.mp4",
        poster: "/images/poster4.png",
        alt: "Digital Twin Demo"
      },
      {
        type: "video",
        src: "/videos/twinsRunning.mp4",
        poster: "/images/poster3.png",
        alt: "Digital Twin Running Demo"
      }
    ]
  },
  {
    id: 4,
    title: "Online Advertising Campaigns / Websites",
    description:
      "Designed IAB-compliant banner ads and developed dozens of websites for OEM, retail, small business and academia.",
    media: [
      { type: "image", src: "/images/bannas.jpg", alt: "IAB Banner Ad" },
      { type: "image", src: "/images/dilawri.jpg", alt: "Dilawri Website" },
      { type: "image", src: "/images/fruzzetti.jpg", alt: "Fruzzetti Website" },
      { type: "image", src: "/images/altria.jpg", alt: "Altria Website" }
    ]
  },
  {
    id: 5,
    title: "Technical Documentation",
    description:
      "Authored 100+ administrator manuals and global user guides. STC member 2015–2023.",
    media: [
      { type: "image", src: "/images/hardwareManuals.jpg", alt: "Hardware Manuals" }
    ]
  }
];