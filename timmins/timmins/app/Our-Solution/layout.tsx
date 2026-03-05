import type { Metadata } from "next";
import Script from "next/script";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Advanced Tech Capability Solutions – Timmins",
  url: "https://timmins-consulting.com/our-solution",
  description:
    "Timmins provides advanced tech capability solutions for enterprise teams across ASEAN and North America, including Embedded Systems, AI/ML, 5G, Cloud, DevOps, and Agile delivery.",
  mainEntity: {
    "@type": "ItemList",
    name: "Timmins Advanced Tech Solutions",
    itemListElement: [
      { "@type": "Service", name: "Engineering Capability Building", description: "Practitioner-led technical enablement for engineering teams in embedded systems, AI/ML, telecom, and cloud." },
      { "@type": "Service", name: "Tech Stack Training", description: "Custom technical training programs for Embedded Linux, Firmware, RTOS, AI/ML, Cloud, and DevOps." },
      { "@type": "Service", name: "Capability Consulting", description: "End-to-end consulting for engineering workflow improvement, system architecture, and technology adoption." },
      { "@type": "Service", name: "Agile & SAFe Transformation", description: "Enterprise-wide Agile and SAFe® implementation led by certified practitioners." },
      { "@type": "Service", name: "Fresh Graduate & Workforce Development", description: "Industry-grade onboarding and technical bootcamps for new engineering talent." },
    ],
  },
  publisher: {
    "@type": "Organization",
    name: "Timmins Training Consulting",
    url: "https://timmins-consulting.com",
    logo: "https://timmins-consulting.com/assets/logo.png",
  },
};

export const metadata: Metadata = {
  title: "Advanced Tech Capability Solutions – Timmins Engineering & Consulting",
  description:
    "Explore Timmins' advanced tech capability solutions across Embedded Systems, AI/ML, 5G, Cloud, DevOps, and Agile transformation. Practitioner-led, engineering-grade programs designed for enterprise teams across ASEAN and North America.",
  keywords:
    "Scaled Agile Certification, Scaled Agile Framework Certification, SAFe Agile Certification, SAFe Scrum Master Certification, Scaled Agile Bronze Partner, SAFe 6.0 Training, Corporate Training Malaysia, Customized Training, HRDC Claimable Training, Embedded Linux Consulting, AI Consulting, Mobile Development Consulting, Skill Matrix, Professional Development Training",
  openGraph: {
    title: "Advanced Tech Capability Solutions – Timmins Engineering & Consulting",
    description:
      "Explore Timmins' advanced tech capability solutions across Embedded Systems, AI/ML, 5G, Cloud, DevOps, and Agile transformation. Practitioner-led, engineering-grade programs designed for enterprise teams across ASEAN and North America.",
    url: "https://timmins-consulting.com/our-solution",
    siteName: "Timmins Training Consulting",
    type: "website",
  },
};

export default function OurSolutionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="our-solution-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {children}
    </>
  );
}
