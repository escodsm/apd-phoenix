export type Project = {
  id: number;
  title: string;
  media?: {
    type: 'video' | 'image' | 'image_tall' | 'image_wide';
    src: string;
    description: string;
    solution: string;
    impact: string;
    techStack: string;
    poster?: string;
    alt?: string;
  }[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "WrenchIQ - Guided Diagnostics and Repair iOS App",
    media: [
      {
        type: "image_tall",
        src: "/images/live/wrenchiq-app.jpg",
        description: "(2026) Guided diagnostics and repair iOS app for vehicle owners and technicians.",
        solution: "Built a mobile workflow with VIN scanning, personalized diagnostics, parts lookup, and step-by-step repair guidance.",
        impact: "Shortens troubleshooting time and gives users a clearer, more consistent repair path from diagnosis to parts ordering.",
        techStack: "React Native, Expo, Supabase, Resend",
        alt: "WrenchIQ iOS App"
      }
    ]
  },
  {
    id: 2,
    title: "Augmented Reality iOS App - International Game Technology",
    media: [
      {
        type: "image_tall",
        src: "/images/live/poster45.jpg",
        description: "(2019 - 2023) AR training iOS app for field installation and maintenance workflows.",
        solution: "Delivered interactive 3D procedures and guided task instructions powered by CAD-derived content and AR overlays.",
        impact: "Deployed across multiple US state lotteries and enabled remote training continuity during COVID-19.",
        techStack: "SOLIDWORKS, Creo Illustrate, Vuforia Engine, Angular, Ionic",
        alt: " AR iOS App Demo"
      }
    ]
  },
  {
    id: 3,
    title: "Learning Wizard - International Game Technology",
    media: [
      {
        type: "image",
        src: "/images/live/gtech1.png",
        description: "(2011 - 2023) Web-based training platform focused on UI/UX quality and instructional clarity.",
        solution: "Designed and implemented interactive training modules with streamlined navigation and role-friendly learning flows.",
        impact: "Improved user comprehension and platform usability for training programs across lottery and gaming teams.",
        techStack: "Flex/AS3, C#, SQL, HTML5, AngularJS",
        alt: "Interactive Training Demo"
      },
      {
        type: "image",
        src: "/images/live/gtech2.png",
        description: "Course catalog expanded with simulation-driven lessons for both hardware and software topics.",
        solution: "Built responsive training modules that combine interactive simulations with guided learning checkpoints.",
        impact: "Boosted engagement and knowledge retention while keeping delivery accessible across device types.",
        techStack: "HTML5, AngularJS, JavaScript, CSS",
        alt: "Interactive Training Demo"
      }
    ]
  },
  {
    id: 4,
    title: "Digital Twin - University of Wisconsin, Milwaukee",
    media: [
      {
        type: "image_wide",
        src: "/images/live/e3d1.png",
        description: "(2023) Digital twin initiative for manufacturing machinery simulation and validation.",
        solution: "Created a virtual commissioning flow using physics-based emulation to test controls and process behavior before deployment.",
        impact: "Reduced prototyping and commissioning risk by validating machine behavior earlier in the lifecycle.",
        techStack: "Emulate3D, Rockwell Automation suite, HMI simulation tooling",
        alt: "Digital Twin Demo"
      },
      {
        type: "image_wide",
        src: "/images/live/e3d_api.png",
        description: "(2024) Digital HMI simulation platform representing real production processes and performance signals.",
        solution: "Integrated process data and visualization layers to monitor operations and expose KPI/OEE trends in near real time.",
        impact: "Improved operational visibility and enabled faster decisions through centralized simulation analytics.",
        techStack: "Emulate3D, Rockwell Automation suite, API integrations",
        alt: "Digital Twin Demo"
      }
    ]
  },
  {
    id: 5,
    title: "Online Advertising Campaigns / Websites",
    media: [
      { type: "image", 
        src: "/images/live/bannas.png", 
        description: "(2009 - 2011) Digital campaigns, interactive modules, and IAB-compliant advertising for major brands.",
        solution: "Designed and built responsive sites, banner campaigns, and integrated web services to support brand initiatives.",
        impact: "Expanded digital reach and improved brand visibility across OEM and consumer-focused campaigns.",
        techStack: "HTML, CSS, JavaScript, APIs, ad serving platforms",
        alt: "IAB Banner Ad" 
      },
      { type: "image", 
        src: "/images/live/dilawri.png", 
        description: "(2010) Vehicle configuration experience for Dilawri Group dealership shoppers.", 
        solution: "Built an interactive configurator for colors, trims, and options with dynamic pricing and inventory matching.",
        impact: "Improved shopping engagement and helped connect users to nearby in-stock vehicles faster.",
        techStack: "JavaScript, pricing logic, inventory APIs, custom UI modules",
        alt: "Dilawri Website" 
      },
      { type: "image", 
        src: "/images/live/rallye.png", 
        description: "(2010) Store locator experience for Rallye Group automotive dealerships.",
        solution: "Implemented a location-aware dealer finder with Google Maps directions and mobile handoff support.",
        impact: "Simplified dealership discovery and improved conversion from browsing to in-person visits.",
        techStack: "Google Maps API, JavaScript, web services",
        alt: "Rallye Website" 
      },
      { type: "image", 
        src: "/images/live/altria.png", 
        description: "(2009) Online onboarding and training website for Altria's Marlboro employee programs.",
        solution: "Developed interactive training modules and embedded assessments to validate onboarding comprehension.",
        impact: "Standardized training delivery and improved consistency of internal messaging across teams.",
        techStack: "HTML, JavaScript, interactive learning modules, assessment logic",
        alt: "Altria Website" 
      }
    ]
  }
];