export type Project = {
  id: number;
  title: string;
  description: string;
  media?: {
    type: 'video' | 'image' | 'youtube';
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
        type: "youtube",
        src: "https://youtube.com/embed/TbhHoQpjQ90?feature=share",
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
        type: "image",
        src: "/images/poster1.png",
        poster: "/images/poster1.png",
        alt: "Interactive Training Demo"
      },
      {
        type: "image",
        src: "/images/poster2.png",
        poster: "/images/poster2.png",
        alt: "GUI Training Demo"
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
        type: "image",
        src: "/images/poster4.png",
        poster: "/images/poster4.png",
        alt: "Digital Twin Demo"
      },
      {
        type: "image",
        src: "/images/poster3.png",
        poster: "/images/poster3.png",
        alt: "Digital Twin Running Demo"
      }
    ]
  },
  {
    id: 4,
    title: "Online Advertising Campaigns / Websites",
    description:
      "Developed websites and IAB-compliant banner ads for OEM, retail, small business and academia.",
    media: [
      { type: "image", src: "/images/bannas.jpg", alt: "IAB Banner Ad" },
      { type: "image", src: "/images/dilawri.jpg", alt: "Dilawri Website" },
      { type: "image", src: "/images/fruzzetti.jpg", alt: "Fruzzetti Website" },
      { type: "image", src: "/images/altria.jpg", alt: "Altria Website" }
    ]
  }
];