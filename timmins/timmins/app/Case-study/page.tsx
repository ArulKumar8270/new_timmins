import React from "react";
import Script from "next/script";
import CaseStudyPageClient from "./CaseStudyPageClient";

export const metadata = {
  title: "Case Studies – Engineering, Telecom, Semiconductor & Banking Capability Programs",
  description: "Explore real case studies of how Timmins builds engineering capability across semiconductor, telecom, manufacturing, and banking organizations. Practitioner-led programs in embedded systems, 5G, AI/ML, cloud, and engineering onboarding delivered across ASEAN and North America.",
  keywords: "AI Consulting, AI Consultants, AI Consultation, Artificial Intelligence Transformation, 5G Training Certification, 5g Training Courses Online, 5G Technician Training, Embedded Systems Training, Embedded Linux Consulting, Corporate Training Malaysia, Corporate Training Provider, HRDC Claimable Training, Technical Upskilling, Onboarding Academy",
  openGraph: {
    title: "Case Studies – Engineering, Telecom, Semiconductor & Banking Capability Programs",
    description: "Explore real case studies of how Timmins builds engineering capability across semiconductor, telecom, manufacturing, and banking organizations. Practitioner-led programs in embedded systems, 5G, AI/ML, cloud, and engineering onboarding delivered across ASEAN and North America.",
    url: "https://timmins-consulting.com/case-studies",
    siteName: "Timmins Training Consulting",
    type: "website",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Case Studies – Engineering, Telecom, Semiconductor & Banking Capability Programs",
  "url": "https://timmins-consulting.com/case-studies",
  "description": "Real case studies of how Timmins builds engineering capability across semiconductor, telecom, manufacturing, and banking organizations through practitioner-led programs in embedded systems, 5G, AI/ML, cloud, and onboarding.",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      { "@type": "CaseStudy", "name": "Semiconductor Engineering Capability Program", "description": "Capability building in embedded systems, firmware, SoC bring-up, and Android OS development for a semiconductor engineering organization." },
      { "@type": "CaseStudy", "name": "Telecom & 5G Engineering Development", "description": "5G protocol engineering, RAN fundamentals, and telecom capability development for a regional telecom operator." },
      { "@type": "CaseStudy", "name": "Banking AI/ML Transformation Program", "description": "AI/ML capability building for a banking enterprise, including data pipelines, model governance, and analytics workflow design." },
      { "@type": "CaseStudy", "name": "Engineering Graduate Onboarding Program", "description": "End-to-end pipeline for onboarding fresh engineering graduates into production-ready contributors across embedded systems and software roles." },
    ],
  },
  "publisher": {
    "@type": "Organization",
    "name": "Timmins Training Consulting",
    "url": "https://timmins-consulting.com",
    "logo": "https://timmins-consulting.com/assets/logo.png",
  },
};

export default function page() {
  return (
    <>
      <Script
        id="case-studies-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <CaseStudyPageClient />
    </>
  );
}
