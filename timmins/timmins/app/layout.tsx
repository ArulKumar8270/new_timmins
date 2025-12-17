import "./style.css";
import ScriptsLoader from "./ScriptsLoader";
import Script from "next/script";

export const metadata = {
  title: "Practitioner-Led Engineering Capability Partner | AI, Embedded, 5G & Corporate Training",
  description: "Timmins is a practitioner-led engineering capability partner delivering AI training, embedded systems courses, 5G training certification, customized training, and corporate training Malaysia programs. HRDC Claimable Training available for Malaysian employers. Explore public classes or enterprise solutions.",
  keywords: "HRDC claimable training, HRD Corp training provider, Corporate training Malaysia, Corporate training provider, AI training Malaysia, Embedded systems training, Embedded systems course, Embedded programming training, 5G training certification, 5G training courses online, 5G technician training, Customized training, Custom training",
  openGraph: {
    title: "Practitioner-Led Engineering Capability Partner | AI, Embedded, 5G & Corporate Training",
    description: "Timmins is a practitioner-led engineering capability partner delivering AI training, embedded systems courses, 5G training certification, customized training, and corporate training Malaysia programs.",
    url: "https://timmins-consulting.com",
    siteName: "Timmins Training Consulting",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Timmins Training Consulting",
        "url": "https://timmins-consulting.com/",
        "description": "Practitioner-led engineering capability partner delivering AI training, embedded systems courses, 5G training certification, customized training, and corporate training Malaysia programs. HRDC Claimable Training available for Malaysian employers. Explore enterprise solutions or public classes.",
        "isPartOf": {
          "@type": "Website",
          "name": "Timmins Training Consulting",
          "url": "https://timmins-consulting.com"
        }
      },
      {
        "@type": "Organization",
        "name": "Timmins Training Consulting",
        "url": "https://timmins-consulting.com",
        "logo": "https://timmins-consulting.com/assets/logo.png",
        "description": "A practitioner-led engineering capability partner specializing in AI consulting, embedded systems training, 5G capability, customized technical training, and corporate training Malaysia.",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+60 3-2785 0737",
            "contactType": "customer service",
            "areaServed": "MY",
            "availableLanguage": "en"
          },
          {
            "@type": "ContactPoint",
            "telephone": "+60 11-1667 4727",
            "contactType": "customer service",
            "areaServed": "MY",
            "availableLanguage": "en"
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/timmins-training-consulting"
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Timmins Training Consulting (Malaysia HQ)",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Suite 3A–05, Level 3A, Wisma Fiamma, No. 20, Jalan 7A/62A, Bandar Manjalara",
          "addressLocality": "Kuala Lumpur",
          "addressRegion": "WP Kuala Lumpur",
          "postalCode": "52200",
          "addressCountry": "MY"
        },
        "telephone": "+60 3-2785 0737",
        "openingHours": "Mo-Fr 09:00-17:30",
        "description": "Malaysia headquarters providing HRDC Claimable Training, corporate training Malaysia, technical upskilling, and engineering-focused programs including AI, embedded systems, and 5G certifications."
      },
      {
        "@type": "LocalBusiness",
        "name": "Timmins Training Consulting — Penang Training Center",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bayan Lepas Industrial Park",
          "addressLocality": "Bayan Lepas",
          "addressRegion": "Penang",
          "addressCountry": "MY"
        },
        "openingHours": "Mo-Fr 09:00-17:30",
        "description": "Penang training center offering embedded systems classes, embedded Linux consulting, and 5G technician training for engineers and technical teams."
      },
      {
        "@type": "Service",
        "name": "AI Consulting & Artificial Intelligence Transformation",
        "serviceType": "AI Consulting",
        "description": "AI consulting, AI consultation, and applied AI capability programs for banking, telecom, and engineering organizations.",
        "provider": { "@type": "Organization", "name": "Timmins Training Consulting" }
      },
      {
        "@type": "Service",
        "name": "Embedded Systems & Embedded Linux Training",
        "serviceType": "Embedded Systems Course",
        "description": "Practitioner-led embedded systems training including embedded Linux, kernel development, drivers, BSP, Yocto, and embedded programming training.",
        "provider": { "@type": "Organization", "name": "Timmins Training Consulting" }
      },
      {
        "@type": "Service",
        "name": "5G Training & Telecom Engineering Capability",
        "serviceType": "5G Training Certification",
        "description": "5G training certification, 5G training courses online, and 5G technician training for R&D and telecom engineering teams.",
        "provider": { "@type": "Organization", "name": "Timmins Training Consulting" }
      },
      {
        "@type": "Service",
        "name": "Customized Training for Engineering & Tech Teams",
        "serviceType": "Customized Training",
        "description": "Custom training programs for engineering, embedded, AI, 5G, mobile development, cloud, DevOps, and enterprise software teams.",
        "provider": { "@type": "Organization", "name": "Timmins Training Consulting" }
      },
      {
        "@type": "Service",
        "name": "Corporate Training Malaysia (HRDC Claimable)",
        "serviceType": "Corporate Training Provider",
        "description": "Corporate training Malaysia programs designed for engineering, telecom, manufacturing, and digital banking organizations. HRDC Claimable Training available for Malaysian employers.",
        "provider": { "@type": "Organization", "name": "Timmins Training Consulting" }
      },
      {
        "@type": "Course",
        "name": "Embedded Linux System Internals",
        "description": "Hands-on embedded Linux training covering kernel, drivers, debugging, and system internals. Available as public class and corporate program.",
        "provider": { "@type": "Organization", "name": "Timmins Training Consulting" }
      },
      {
        "@type": "Course",
        "name": "Generative AI with LangChain",
        "description": "Public class on applied GenAI workflows, prompt engineering, and LangChain pipeline development.",
        "provider": { "@type": "Organization", "name": "Timmins Training Consulting" }
      },
      {
        "@type": "Course",
        "name": "5G Fundamentals for Engineers",
        "description": "5G fundamentals and telecom engineering public class for aspiring 5G technicians and RF/telecom engineers.",
        "provider": { "@type": "Organization", "name": "Timmins Training Consulting" }
      },
      {
        "@type": "Course",
        "name": "SAFe Scrum Master Certification",
        "description": "SAFe Scrum Master public certification class for agile practitioners and engineering teams.",
        "provider": { "@type": "Organization", "name": "Timmins Training Consulting" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you offer public classes for individuals?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Public classes are available for AI training, embedded systems courses, 5G training certification, and SAFe Scrum Master certification."
            }
          },
          {
            "@type": "Question",
            "name": "Are public classes HRDC Claimable?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, selected public classes are HRDC Claimable for Malaysian employers only."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer online 5G training courses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. 5G training courses are available in online, hybrid, and on-site formats, including 5G technician training."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide AI consulting services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Timmins provides AI consulting, AI consultation, and applied AI capability programs for enterprises across multiple industries."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer embedded programming training?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Embedded systems training includes embedded Linux, drivers, kernel, Yocto, and hands-on embedded programming modules."
            }
          },
          {
            "@type": "Question",
            "name": "Are your programs available outside Malaysia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Timmins delivers programs in Singapore, India, Vietnam, the US, and Canada."
            }
          },
          {
            "@type": "Question",
            "name": "How is Timmins different from other corporate training providers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Timmins is a practitioner-led engineering capability partner delivering engineering-grade programs in AI, embedded, and 5G — not generic training courses."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer customized training for engineering teams?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialize in custom training programs tailored to tech stacks, workflows, and capability goals."
            }
          },
          {
            "@type": "Question",
            "name": "Do individuals receive certificates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. All public class participants receive certificates of completion."
            }
          },
          {
            "@type": "Question",
            "name": "How do I register for a public class?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can browse and register for public classes directly through the course catalog on the Timmins website."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:type" content={metadata.openGraph.type} />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/assets/plugins/css/bootstrap.min.css" as="style" />
        <link rel="preload" href="/assets/New_images/hero_2.png" as="image" />
        
        {/* Critical CSS - Load immediately */}
        <link rel="stylesheet" href="/assets/plugins/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/section-css/reset.css" />
        <link rel="stylesheet" href="/assets/section-css/header.css" />
        <link rel="stylesheet" href="/assets/section-css/hero.css" />
        
        {/* Non-critical CSS - Load normally */}
        <link rel="stylesheet" href="/assets/plugins/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/plugins/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/plugins/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/plugins/css/maginific-popup.min.css" />
        <link rel="stylesheet" href="/assets/plugins/css/nice-select.min.css" />
        <link rel="stylesheet" href="/assets/plugins/css/icofont.css" />
        <link rel="stylesheet" href="/assets/plugins/css/uicons.css" />
        <link rel="stylesheet" href="/assets/section-css/timmins-footer.css" />
      </head>
      <body className="element-wrapper">
        {children}
        {/* Scripts Loader - Loads all scripts in order */}
        <ScriptsLoader />
        
        {/* JSON-LD Schema */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
      </body>
    </html>
  );
}
