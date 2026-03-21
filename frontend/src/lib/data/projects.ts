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
    title: "WrenchIQ - Guided Diagnostics and Repair iOS App",
    description:
      "Developing an app for iOS which enables users to perform guided diagnostics and repair of their vehicles",
    media: [
      {
        type: "image_tall",
        src: "/images/live/wrenchiq-app.jpg",
        description: "(2026) Developing an app for iOS which enables users to perform guided diagnostics and repair of their vehicles. Features VIN scanning for personalized diagnostics, parts ordering, and repair guidance.  Technologies used include React Native, Expo, Supabase, and Resend.",
        alt: "WrenchIQ iOS App"
      }
    ]
  },
  {
    id: 2,
    title: "Augmented Reality iOS App - International Game Technology",
    description:
      "Developed an AR training app for iOS using SOLIDWORKS, Creo Illustrate, Vuforia Engine, and Angular/Ionic framework.",
    media: [
      {
        type: "image_tall",
        src: "/images/live/poster45.jpg",
        description: "(2019 - 2023) Developed an AR training app for iOS using SOLIDWORKS, Creo Illustrate, Vuforia Engine, and an Angular/Ionic framework. The app provides interactive 3D visualizations and step-by-step instructions for maintenance tasks, enhancing user engagement and learning outcomes. It rolled out to several US state lotteries and one of the highlights of the app was its effectiveness during the COVID-19 pandemic, as it allowed trainers and installers to continue their work remotely, reducing the need for in-person interactions and ensuring continued support for lottery operations.",
        alt: " AR iOS App Demo"
      }
    ]
  },
  {
    id: 3,
    title: "Learning Wizard - International Game Technology",
    description:
      "UI/UX development for web-based training.",
    media: [
      {
        type: "image",
        src: "/images/live/gtech1.png",
        description: "(2011 - 2023) UI/UX development for web-based training, using technologies like Flex/AS3, C#/SQL and HTML5/AngularJS. The Learning Wizard platform offers interactive training modules with a focus on user-friendly design and seamless navigation, enhancing the learning experience for users across the lottery and gaming industry.",
        alt: "Interactive Training Demo"
      },
      {
        type: "image",
        src: "/images/live/gtech2.png",
        description: "Courses include interactive elements such as hardware and software simulations to engage learners and improve knowledge retention. The platform is designed to be responsive and accessible across various devices, ensuring a wide reach for training initiatives.",
        alt: "Interactive Training Demo"
      }
    ]
  },
  {
    id: 4,
    title: "Digital Twin - University of Wisconsin, Milwaukee",
    description:
      "Digital HMI simulation platform for tracking KPIs and OEE, demonstrated at Rockwell Automation Fair 2023/2024.",
    media: [
      {
        type: "image_wide",
        src: "/images/live/e3d1.png",
        description: "(2023) The digital twin project utilizes advanced simulation/emulation technologies to create a virtual representation of manufacturing machinery, allowing for faster prototyping, testing and commissioning. The platform uses Emulate3D physics and the Rockwell Automation suite for comprehensive simulation capabilities.",
        alt: "Digital Twin Demo"
      },
      {
        type: "image_wide",
        src: "/images/live/e3d_api.png",
        description: "(2024) This digital HMI (Human-Machine Interface) simulation platform is a virtual representation of production manufacturing processes, allowing for real-time monitoring and optimization of operations. The platform integrates with various data sources to provide insights into performance metrics and facilitate informed decision-making.",
        alt: "Digital Twin Demo"
      }
    ]
  },
  {
    id: 5,
    title: "Online Advertising Campaigns / Websites",
    description:
      "Developed websites, interactive modules, and IAB-compliant advertising for OEM auto manufacturers and consumer brands, including Mercedes-Benz, Altria.",
    media: [
      { type: "image", 
        src: "/images/live/bannas.png", 
        description: "(2009 - 2011) Developed websites, interactive modules, and IAB-compliant advertising for OEM auto manufacturers and consumer brands, including Mercedes-Benz, Altria. This includes the design and development of engaging banner ads, services and APIs, and responsive websites that effectively promote products and enhance brand visibility across digital platforms.",
        alt: "IAB Banner Ad" 
      },
      { type: "image", 
        src: "/images/live/dilawri.png", 
        description: "(2010) The Dilawri Group is based in Winnipeg, Manitoba, Canada. I developed a module which allowed shoppers to customize vehicles by choosing color, trim packages and options, which then provided an updated price point as well as located nearby inventory matches among partner dealerships.", 
        alt: "Dilawri Website" 
      },
      { type: "image", 
        src: "/images/live/rallye.png", 
        description: "(2010) The Rallye Group is a multi-brand automotive retailer based in New York. I utilized the Google Maps API to create a store locator module which allowed users to get directions to Rallye dealerships sent to their phones.",
        alt: "Rallye Website" 
      },
      { type: "image", 
        src: "/images/live/altria.png", 
        description: "(2009) Altria, a leader in the tobacco industry, partnered with us to create an employee training website for their Marlboro brand. I developed an interactive module that allowed onboarding to take place online, which included a quiz to test knowledge retention. This project helped Altria streamline their training process and ensure consistent messaging across their workforce.",
        alt: "Altria Website" 
      }
    ]
  }
];