/**
 * Public Classes Data
 *
 * HOW TO ADD NEW COURSES (backdoor / data management):
 *
 * 1. Add the course to COURSES array:
 *    { title: "Course Name", domain: "Domain Name", slug: "url-friendly-slug" }
 *    - slug: lowercase, hyphens (e.g. "advanced-android-kotlin")
 *
 * 2. Add schedule to MONTHLY_SCHEDULE:
 *    { title: "Course Name", location: "City/Country", slug: "same-slug-as-course" }
 *
 * 3. Create the class landing page at: app/training-calendar/public-classes/[slug]/page.tsx
 *    (Copy from embedded-linux-system-internals as template)
 *
 * This file can later be replaced with a CMS, API, or database.
 */

export const DOMAINS = [
    "5G, SDN, NFV & IoT",
    "Android Mobile App Development",
    "AI, Machine Learning, Deep Learning",
    "Automotive / Electric Vehicle Technology",
    "Blockchain",
    "Business Intelligence",
    "CAD & Product Design Engineering",
    "Cloud Computing",
    "Cybersecurity",
    "DevOps",
    "Embedded Android Development",
    "Embedded Linux Development",
    "Fullstack",
    "Generative AI",
    "Hardware Test & Measurement",
    "Linux",
    "Microservices",
    "Programming Languages",
    "SAFe Courses and Certifications",
    "Software Testing",
    "Soft Skills",
] as const;

export const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
] as const;

export type Domain = (typeof DOMAINS)[number];
export type Month = (typeof MONTHS)[number];

export interface PublicCourse {
    title: string;
    domain: string;
    slug: string;
}

export interface ScheduledClass {
    title: string;
    location: string;
    slug: string;
}

/** All public courses - add new courses here */
export const COURSES: PublicCourse[] = [
    // AI, Machine Learning, Deep Learning
    { title: "Artificial Intelligence & Machine Learning with Python", domain: "AI, Machine Learning, Deep Learning", slug: "artificial-intelligence-machine-learning-python" },
    { title: "Deep Learning - TensorFlow, Keras", domain: "AI, Machine Learning, Deep Learning", slug: "deep-learning-tensorflow-keras" },
    { title: "Generative AI using OpenAI and LangChain", domain: "AI, Machine Learning, Deep Learning", slug: "generative-ai-openai-langchain" },
    { title: "Generative AI and Prompt Engineering", domain: "AI, Machine Learning, Deep Learning", slug: "generative-ai-prompt-engineering" },
    { title: "GEN AI for IT and Non-IT Teams", domain: "AI, Machine Learning, Deep Learning", slug: "gen-ai-it-non-it-teams" },
    { title: "Develop iOS Apps with AI and ML", domain: "AI, Machine Learning, Deep Learning", slug: "develop-ios-apps-ai-ml" },
    // Business Intelligence
    { title: "Advanced Excel for Business Intelligence", domain: "Business Intelligence", slug: "advanced-excel-business-intelligence" },
    { title: "Analyzing Data with Microsoft Power BI", domain: "Business Intelligence", slug: "analyzing-data-microsoft-power-bi" },
    // DevOps
    { title: "DevOps (Best Practices) Hands-on Training", domain: "DevOps", slug: "devops-best-practices-hands-on" },
    { title: "Continuous Integration and Continuous Deployment (CI/CD)", domain: "DevOps", slug: "ci-cd" },
    { title: "Docker with Kubernetes", domain: "DevOps", slug: "docker-kubernetes" },
    { title: "Advanced Monitoring and Performance Testing with ELK, Prometheus, Grafana", domain: "DevOps", slug: "elk-prometheus-grafana" },
    // Embedded Linux Development
    { title: "Embedded Linux System Internals", domain: "Embedded Linux Development", slug: "embedded-linux-system-internals" },
    { title: "Embedded Linux Porting Hacks", domain: "Embedded Linux Development", slug: "embedded-linux-porting-hacks" },
    { title: "Embedded Linux Security", domain: "Embedded Linux Development", slug: "embedded-linux-security" },
    { title: "Linux Driver Development", domain: "Embedded Linux Development", slug: "linux-driver-development" },
    { title: "Linux Kernel Debugging", domain: "Embedded Linux Development", slug: "linux-kernel-debugging" },
    // Android Mobile App Development
    { title: "Advanced Android using Kotlin", domain: "Android Mobile App Development", slug: "advanced-android-kotlin" },
    { title: "Android Application Performance Analysis and Tuning", domain: "Android Mobile App Development", slug: "android-performance-analysis-tuning" },
    { title: "Kotlin Fundamentals", domain: "Android Mobile App Development", slug: "kotlin-fundamentals" },
    // Fullstack
    { title: "Flutter Application Development", domain: "Fullstack", slug: "flutter-application-development" },
    { title: "React Native", domain: "Fullstack", slug: "react-native" },
    // Programming Languages
    { title: "Comprehensive Python Hands-on Workshop", domain: "Programming Languages", slug: "comprehensive-python-hands-on" },
    { title: "Introduction to Python & Basic Statistics", domain: "Programming Languages", slug: "introduction-python-basic-statistics" },
];

/** Monthly schedule - which classes run when. Add new schedule entries here. */
export const MONTHLY_SCHEDULE: Record<Month, ScheduledClass[]> = {
    January: [],
    February: [],
    March: [],
    April: [],
    May: [
        { title: "Embedded Linux System Internals", location: "Penang", slug: "embedded-linux-system-internals" },
        { title: "Embedded Linux System Internals", location: "KL", slug: "embedded-linux-system-internals" },
    ],
    June: [
        { title: "Analyzing Data with Microsoft Power BI", location: "Malaysia", slug: "analyzing-data-microsoft-power-bi" },
        { title: "Generative AI using OpenAI and LangChain", location: "Malaysia", slug: "generative-ai-openai-langchain" },
        { title: "Develop iOS Apps with AI and ML", location: "Malaysia", slug: "develop-ios-apps-ai-ml" },
    ],
    July: [
        { title: "Linux Driver Development", location: "Malaysia", slug: "linux-driver-development" },
        { title: "Advanced Android using Kotlin", location: "Malaysia", slug: "advanced-android-kotlin" },
        { title: "Continuous Integration and Continuous Deployment (CI/CD)", location: "Malaysia", slug: "ci-cd" },
    ],
    August: [
        { title: "Introduction to Python & Basic Statistics", location: "Malaysia", slug: "introduction-python-basic-statistics" },
        { title: "Deep Learning - TensorFlow, Keras", location: "Malaysia", slug: "deep-learning-tensorflow-keras" },
        { title: "Embedded Linux Porting Hacks", location: "Malaysia", slug: "embedded-linux-porting-hacks" },
    ],
    September: [
        { title: "Embedded Linux Security", location: "Malaysia", slug: "embedded-linux-security" },
        { title: "Android Application Performance Analysis and Tuning", location: "Malaysia", slug: "android-performance-analysis-tuning" },
        { title: "Advanced Monitoring and Performance Testing with ELK, Prometheus, Grafana", location: "Malaysia", slug: "elk-prometheus-grafana" },
    ],
    October: [
        { title: "Embedded Linux System Internals", location: "Malaysia", slug: "embedded-linux-system-internals" },
        { title: "Analyzing Data with Microsoft Power BI", location: "Malaysia", slug: "analyzing-data-microsoft-power-bi" },
        { title: "Generative AI using OpenAI and LangChain", location: "Malaysia", slug: "generative-ai-openai-langchain" },
    ],
    November: [
        { title: "Generative AI and Prompt Engineering", location: "Malaysia", slug: "generative-ai-prompt-engineering" },
        { title: "React Native", location: "Malaysia", slug: "react-native" },
        { title: "GEN AI for IT and Non-IT Teams", location: "Malaysia", slug: "gen-ai-it-non-it-teams" },
    ],
    December: [
        { title: "Linux Kernel Debugging", location: "Malaysia", slug: "linux-kernel-debugging" },
        { title: "Introduction to Python & Basic Statistics", location: "Malaysia", slug: "introduction-python-basic-statistics" },
        { title: "Advanced Excel for Business Intelligence", location: "Malaysia", slug: "advanced-excel-business-intelligence" },
    ],
};

const BASE_PATH = "/training-calendar/public-classes";

export function getCourseUrl(slug: string): string {
    return `${BASE_PATH}/${slug}`;
}
