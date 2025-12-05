import { ExperienceItem, Metric, EducationItem } from './types';

export const SOCIAL_LINKS = {
  email: "brianking@sky.com",
  phone: "+852 6799 2012",
  linkedin: "linkedin.com/in/briankinghk",
  location: "Hong Kong / APAC"
};

export const METRICS: Metric[] = [
  {
    label: "Online Sales Growth",
    value: "370%",
    context: "Revenue growth 2020-2023 at Cellarmaster via platform optimization."
  },
  {
    label: "ROI on Ad Spend",
    value: "7.8x",
    context: "Generated HK$35M revenue against HK$4.5M budget at Compass Offices."
  },
  {
    label: "Organic Leads",
    value: "+57%",
    context: "Increase in organic search leads over 3 years at Opsview Ltd."
  },
  {
    label: "Customer Growth",
    value: "100%+",
    context: "Increase in purchasing customers over 36 months via acquisition campaigns."
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "barkhams",
    role: "Founder / Digital Marketing Consultant",
    company: "Barkhams",
    location: "Hong Kong",
    period: "07/2025 - Present",
    description: "Providing high-level digital marketing and AI consultancy to entrepreneurs and SMEs, focusing on automation and scalability.",
    achievements: [
      "Delivering comprehensive digital marketing solutions for diverse clientele including restaurant chains and e-commerce.",
      "Built and launched WordPress-based crypto news portal and wine e-commerce website independently.",
      "Implementing AI-powered applications and automated workflows to drive efficiency in marketing."
    ],
    tags: ["AI Consultancy", "SME Growth", "Automation", "Entrepreneurship"]
  },
  {
    id: "cellarmaster",
    role: "Sales & Marketing Manager",
    company: "Cellarmaster Wines",
    location: "Hong Kong",
    period: "07/2021 - 06/2025",
    description: "Led digital marketing and e-commerce growth for Hong Kong's premier online wine & spirits retailer.",
    achievements: [
      "Achieved 370% online sales revenue growth (2020-2023) through strategic platform optimisation.",
      "100%+ increase in purchasing customers over 36 months via targeted acquisition.",
      "Maintained 20% sustained ROI on Google Shopping Ads with continuous testing.",
      "Developed omni-channel campaigns across EDM, social, SEO, and affiliates.",
      "Managed end-to-end Shopify platform and online/offline sales processes."
    ],
    tags: ["Shopify", "Revenue Growth", "Omni-channel", "Google Ads"]
  },
  {
    id: "sarment",
    role: "Digital Marketing Manager",
    company: "Sarment Ltd",
    location: "Hong Kong",
    period: "02/2019 - 05/2021",
    description: "Led e-commerce development and digital sales strategy for a luxury lifestyle brand across APAC markets.",
    achievements: [
      "Spearheaded mobile and e-commerce platform development for HK, China, Singapore & Japan.",
      "Managed P&L responsibility for app development and e-commerce operations.",
      "Generated over HK$1 million in combined B2B/B2C sales during 2020 via digital initiatives.",
      "Transitioned to lead online sales activities for wine division across multiple platforms."
    ],
    tags: ["Luxury Retail", "APAC Strategy", "P&L Management", "App Dev"]
  },
  {
    id: "compass",
    role: "Marketing Director",
    company: "Compass Offices Ltd (APAC)",
    location: "APAC (8 Cities)",
    period: "07/2015 - 01/2019",
    description: "Directed digital marketing strategy and operations across 8 APAC cities for a leading serviced office provider.",
    achievements: [
      "Generated over HK$35M in revenue from marketing leads against HK$4.5M budget (7.8x ROI).",
      "Increased website leads by 30% in 6 months through SEO and conversion optimisation.",
      "Promoted from Digital Marketing Manager to Marketing Director in 2017.",
      "Managed 6 direct reports in HK and Japan, building a high-performing team."
    ],
    tags: ["B2B", "Team Leadership", "High ROI", "Regional Strategy"]
  },
  {
    id: "opsview",
    role: "Digital Marketing Manager",
    company: "Opsview Ltd",
    location: "USA & Europe",
    period: "07/2011 - 04/2015",
    description: "Led digital marketing initiatives for a global IT software company across UK, Europe & North America.",
    achievements: [
      "Delivered 57% increase in organic search leads over 3 years via comprehensive SEO.",
      "Integrated Salesforce with digital marketing initiatives for improved tracking.",
      "Managed PPC campaigns and B2B lead generation across Google Ads."
    ],
    tags: ["SaaS", "Global Marketing", "Salesforce", "Technical SEO"]
  }
];

export const OLDER_EXPERIENCE: ExperienceItem[] = [
  {
    id: "ait",
    role: "Marketing Manager",
    company: "AIT Partnership Group Ltd (UK)",
    location: "UK",
    period: "06/2003 - 07/2011",
    description: "",
    achievements: [],
    tags: []
  },
  {
    id: "blackbox",
    role: "Marketing Executive - Web Dev",
    company: "Black Box (UK) Ltd",
    location: "UK",
    period: "12/2000 - 06/2003",
    description: "",
    achievements: [],
    tags: []
  },
  {
    id: "tech-indexes",
    role: "Web Project Manager",
    company: "Technical Indexes Ltd (UK)",
    location: "UK",
    period: "04/1997 - 12/2000",
    description: "",
    achievements: [],
    tags: []
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "BA Hons: Communication & Media Studies",
    institution: "Nottingham Trent University / University of South Florida"
  },
  {
    degree: "Certificate in Digital Marketing (CertDigM)",
    institution: "Institute of Direct Marketing"
  },
  {
    degree: "Google Advertising Professional",
    institution: "Google Academy"
  },
  {
    degree: "Digital Marketing in China",
    institution: "The Egg Consultancy"
  },
  {
    degree: "Advanced SEO Marketing",
    institution: "eConsultancy"
  }
];

// Data for the Chart
export const GROWTH_DATA = [
  { year: '2020', sales: 100 },
  { year: '2021', sales: 180 },
  { year: '2022', sales: 320 },
  { year: '2023', sales: 470 },
];