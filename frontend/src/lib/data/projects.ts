export type Project = {
  id: number;
  title: string;
  description: string;
  media?: {
    type: 'video' | 'image' | 'image_tall' | 'image_wide';
    src: string;
    description?: string;
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
        type: "image_tall",
        src: "/images/live/poster45.jpg",
        description: "AR iOS App Demo",
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
        type: "image",
        src: "/images/live/gtech1.png",
        description: "Interactive Training Demo",
        alt: "Interactive Training Demo"
      },
      {
        type: "image",
        src: "/images/live/gtech2.png",
        description: "Interactive Training Demo",
        alt: "Interactive Training Demo"
      }
    ]
  },
  {
    id: 3,
    title: "Digital Twin - University of Wisconsin, Milwaukee",
    description:
      "Digital HMI simulation platform for tracking KPIs and OEE, demonstrated at Rockwell Automation Fair 2023/2024.",
    media: [
      {
        type: "image_wide",
        src: "/images/live/e3d1.png",
        description: "Digital Twin Demo",
        alt: "Digital Twin Demo"
      },
      {
        type: "image_wide",
        src: "/images/live/e3d_api.png",
        description: "Digital Twin API Integration",
        alt: "Digital Twin Demo"
      }
    ]
  },
  {
    id: 4,
    title: "Online Advertising Campaigns / Websites",
    description:
      "Developed websites, interactive modules, and IAB-compliant advertising for OEM auto manufacturers and consumer brands, including Mercedes-Benz, Altria.",
    media: [
      { type: "image", 
        src: "/images/live/bannas.png", 
        description: "IAB Banner Ad",
        alt: "IAB Banner Ad" 
      },
      { type: "image", 
        src: "/images/live/dilawri.png", 
        description: "Dilawri Website", 
        alt: "Dilawri Website" 
      },
      { type: "image", 
        src: "/images/live/rallye.png", 
        description: "Rallye Website",
        alt: "Mercedes-Benz Website" 
      },
      { type: "image", 
        src: "/images/live/altria.png", 
        description: "Altria Website",
        alt: "Altria Website" 
      }
    ]
  }
];