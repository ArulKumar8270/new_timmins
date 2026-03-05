/** Course content schema - all sections editable from admin */
export type CourseContent = {
  capability_outcomes?: string[];
  course_description?: string;
  benefits?: string[];
  price?: string;
  trusted_by_title?: string;
  trusted_by_logos?: { url: string; alt: string }[];
  why_matters_title?: string;
  why_matters?: { title: string; description: string; icon?: string }[];
  who_should_attend_title?: string;
  who_should_attend?: string[];
  training_format_title?: string;
  training_format_subtitle?: string;
  training_format_cards?: { title: string; description: string; icon?: string }[];
  learning_objectives_title?: string;
  learning_objectives?: string[];
  prerequisites_title?: string;
  prerequisites?: { title: string; description: string; icon?: string }[];
  course_outline_title?: string;
  course_outline?: { day: string; title: string; topics?: string }[];
  expert_title?: string;
  expert_description?: string;
  expert_bullets?: string[];
  testimonials_title?: string;
  testimonials?: { name: string; quote: string; rating?: string; source?: string }[];
  certificate_title?: string;
  certificate_description?: string;
  certificate_image?: string;
  cta_title?: string;
  cta_subtitle?: string;
  cta_limit_text?: string;
  google_reviews_url?: string;
  /** Registration form options (one per line in admin) */
  registration_job_roles?: string[];
  registration_hear_about?: string[];
  registration_experience_levels?: string[];
  registration_who_pays?: string[];
  registration_invoice_options?: string[];
  registration_dietary?: string[];
  registration_experience_label?: string;
  registration_success_message?: string;
  registration_terms_text?: string;
};

export const DEFAULT_COURSE_CONTENT: CourseContent = {
  capability_outcomes: [
    "Implement advanced Linux concepts",
    "Solve complex system issues",
    "Develop robust embedded solutions",
  ],
  course_description: "A practitioner-led training program designed to build real-world embedded Linux capability.",
  benefits: [
    "Improve your performance",
    "Boost your career",
    "Maximize your potential",
    "Gain real-time experience",
  ],
  price: "Price: RM 7,500 (100% HRDC Claimable)",
  trusted_by_title: "Trusted by Teams Across Industries & Regions",
  why_matters_title: "Training Matters",
  why_matters: [
    { title: "Build your career roadmap with solid foundation.", description: "", icon: "☀️" },
    { title: "Make your update knowledge true and valuable.", description: "", icon: "🔥" },
    { title: "Gain real-time experience by industry professionals.", description: "", icon: "👤" },
  ],
  who_should_attend_title: "Who Should Attend?",
  who_should_attend: [
    "Working software engineers",
    "Senior developer engineers",
    "IT administrators & consultants",
  ],
  training_format_title: "5-Day Intensive Training",
  training_format_subtitle: "",
  training_format_cards: [
    { title: "Complete practical hands-on experience", description: "", icon: "⚙️" },
    { title: "Real-world case studies & projects", description: "", icon: "🌐" },
    { title: "Boost your career with advanced skills", description: "", icon: "📈" },
    { title: "Expert instructors with industry knowledge", description: "", icon: "💡" },
  ],
  learning_objectives_title: "Learning Objectives",
  learning_objectives: [
    "Understand the core Linux internals",
    "Work with Linux kernel modules",
    "Implement device drivers for various hardware",
  ],
  prerequisites_title: "Prerequisites",
  prerequisites: [
    { title: "C/C++ Programming", description: "Basic proficiency", icon: "📄" },
    { title: "Linux OS Basics", description: "Command line and file system", icon: "🖥️" },
  ],
  course_outline_title: "Course Outline",
  course_outline: [
    { day: "Day 1", title: "Introduction to Embedded Linux", topics: "" },
    { day: "Day 2", title: "Linux Kernel Modules", topics: "" },
    { day: "Day 3", title: "Linux Device Drivers", topics: "" },
  ],
  expert_title: "Learn From The Expert",
  expert_description: "Our instructors bring extensive industry experience and proven track record in embedded systems.",
  expert_bullets: [
    "Extensive industry experience",
    "Proven track record in embedded systems",
  ],
  testimonials_title: "What Participants Say",
  testimonials: [
    { name: "Great", quote: "Excellent training with practical focus.", rating: "⭐⭐⭐⭐⭐", source: "Google Review" },
    { name: "Good Scope", quote: "Comprehensive coverage of key topics.", rating: "⭐⭐⭐⭐⭐", source: "Google Review" },
    { name: "Clear & Elegant", quote: "Well-structured and easy to follow.", rating: "⭐⭐⭐⭐⭐", source: "Google Review" },
  ],
  certificate_title: "Earn A Certificate of Completion",
  certificate_description: "Participants receive a Timmins certificate upon successful completion.",
  certificate_image: "/assets/New_images/coc.png",
  cta_title: "Let's Get Started Today!",
  cta_subtitle: "Let's innovate your business!",
  cta_limit_text: "Limited to 15 participants!",
  google_reviews_url: "https://g.page/r/ncn3sf8LcQuoBbhaB",
  registration_job_roles: ["Engineer", "Lead", "Manager", "L & D", "HR", "Other"],
  registration_hear_about: ["Website", "Social Media", "Referral", "HR", "Email", "Sales call", "Other"],
  registration_experience_levels: [
    "Beginner (No prior experience)",
    "Intermediate (Some experience, have worked with it before)",
    "Advanced (Extensive experience, want technical insight)",
  ],
  registration_who_pays: ["Myself", "Company sponsored", "HRDC Claim"],
  registration_invoice_options: ["Yes", "No"],
  registration_dietary: ["Vegetarian", "Halal", "Not applicable"],
  registration_experience_label: "Pre-requisites: Embedded programming in C or C++, basic linux knowledge. What is your experience level?",
  registration_success_message: "Thank you! We will contact you shortly to complete your registration.",
  registration_terms_text: "I confirm that the information provided is accurate and agree to be contacted by Timmins Training Consulting regarding this training.",
};
