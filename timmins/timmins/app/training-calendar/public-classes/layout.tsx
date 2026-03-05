import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Public Training Classes | Expert-Led, Hands-On Courses by Timmins",
    description: "Explore Timmins public training classes. Expert-led, hands-on courses across engineering and technology domains. Join scheduled classes and upskill with industry practitioners.",
    keywords: "public training, public classes, professional training courses, expert-led training, public training calendar Malaysia, HRDC claimable training, 5G training, android training, AI training, Machine Learning training, Deep Learning training, Electric Vehicle Technology training, Blockchain training, Business Intelligence training, CAD training, Cloud Computing training, Cybersecurity training, DevOps training, Embedded Android training, Embedded Linux training, Fullstack training, Generative AI training, Hardware Test training, Linux training, Microservices training, Programming Languages training, scaled agile training, SAFe Certifications training, Software Testing training, Soft Skills training",
    alternates: { canonical: "https://www.timmins-consulting.com/training-calendar/public-classes" },
};

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://www.timmins-consulting.com/#organization",
            name: "Timmins Training Consulting",
            url: "https://www.timmins-consulting.com",
        },
        {
            "@type": "WebPage",
            "@id": "https://www.timmins-consulting.com/training-calendar/public-classes#webpage",
            url: "https://www.timmins-consulting.com/training-calendar/public-classes",
            name: "Public Training Classes | Expert-Led, Hands-On Courses by Timmins",
            description: "Explore Timmins public training classes. Expert-led, hands-on courses across engineering and technology domains. Join scheduled classes and upskill with industry practitioners.",
            isPartOf: {
                "@type": "WebSite",
                name: "Timmins Training Consulting",
                url: "https://www.timmins-consulting.com",
            },
            about: [
                { "@type": "Service", "@id": "https://www.timmins-consulting.com/training-calendar/public-classes#service" },
                { "@type": "FAQPage", "@id": "https://www.timmins-consulting.com/training-calendar/public-classes#faq" },
            ],
        },
        {
            "@type": "Service",
            "@id": "https://www.timmins-consulting.com/training-calendar/public-classes#service",
            name: "Public Training Classes",
            description: "Instructor-led public training classes open for registration. Selected classes are HRDC claimable. Delivered globally online, typically supporting participants from Malaysia, Indonesia, and North America.",
            provider: { "@type": "Organization", "@id": "https://www.timmins-consulting.com/#organization" },
            areaServed: [
                { "@type": "Country", name: "Malaysia" },
                { "@type": "Country", name: "Indonesia" },
                { "@type": "Place", name: "North America" },
            ],
            availableChannel: [
                { "@type": "ServiceChannel", name: "Online Delivery", serviceLocation: { "@type": "Place", name: "Online" } },
                { "@type": "ServiceChannel", name: "On-site Delivery", serviceLocation: { "@type": "Place", name: "On-site training locations" } },
            ],
            additionalProperty: [
                { "@type": "PropertyValue", name: "HRDC claimable", value: "Selected public classes are HRDC claimable (see class details)." },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.timmins-consulting.com/training-calendar/public-classes#catalog",
            name: "Timmins Public Classes Catalog",
            description: "Catalog of all Timmins public classes open for registration. Classes can be filtered by month and capability domain.",
            itemListOrder: "https://schema.org/ItemListUnordered",
            numberOfItems: 20,
            itemListElement: [
                { "@type": "ListItem", position: 1, item: { "@type": "Course", name: "Artificial Intelligence & Machine Learning with Python" } },
                { "@type": "ListItem", position: 2, item: { "@type": "Course", name: "Deep Learning - TensorFlow, Keras" } },
                { "@type": "ListItem", position: 3, item: { "@type": "Course", name: "Generative AI using OpenAI and LangChain" } },
                { "@type": "ListItem", position: 4, item: { "@type": "Course", name: "Generative AI and Prompt Engineering" } },
                { "@type": "ListItem", position: 5, item: { "@type": "Course", name: "GEN AI for IT and Non-IT Teams" } },
                { "@type": "ListItem", position: 6, item: { "@type": "Course", name: "Advanced Excel for Business Intelligence" } },
                { "@type": "ListItem", position: 7, item: { "@type": "Course", name: "Analyzing Data with Microsoft Power BI" } },
                { "@type": "ListItem", position: 8, item: { "@type": "Course", name: "DevOps (Best Practices) Hands-on Training" } },
                { "@type": "ListItem", position: 9, item: { "@type": "Course", name: "Continuous Integration and Continuous Deployment (CI/CD)" } },
                { "@type": "ListItem", position: 10, item: { "@type": "Course", name: "Docker with Kubernetes" } },
                { "@type": "ListItem", position: 11, item: { "@type": "Course", name: "Advanced Monitoring and Performance Testing with ELK, Prometheus, Grafana" } },
                { "@type": "ListItem", position: 12, item: { "@type": "Course", name: "Embedded Linux System Internals" } },
                { "@type": "ListItem", position: 13, item: { "@type": "Course", name: "Embedded Linux Porting Hacks" } },
                { "@type": "ListItem", position: 14, item: { "@type": "Course", name: "Embedded Linux Security" } },
                { "@type": "ListItem", position: 15, item: { "@type": "Course", name: "Linux Driver Development" } },
                { "@type": "ListItem", position: 16, item: { "@type": "Course", name: "Linux Kernel Debugging" } },
                { "@type": "ListItem", position: 17, item: { "@type": "Course", name: "Advanced Android using Kotlin" } },
                { "@type": "ListItem", position: 18, item: { "@type": "Course", name: "Android Application Performance Analysis and Tuning" } },
                { "@type": "ListItem", position: 19, item: { "@type": "Course", name: "Kotlin Fundamentals" } },
                { "@type": "ListItem", position: 20, item: { "@type": "Course", name: "Comprehensive Python Hands-on Workshop" } },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.timmins-consulting.com/training-calendar/public-classes#faq",
            mainEntity: [
                { "@type": "Question", name: "What are Public Classes at Timmins?", acceptedAnswer: { "@type": "Answer", text: "Public classes are scheduled, instructor-led programs open to individual professionals as well as organizations sending small groups to upskill their teams in specific technology areas." } },
                { "@type": "Question", name: "Who can join these public classes?", acceptedAnswer: { "@type": "Answer", text: "Engineers, developers, technical professionals, and anyone meeting the prerequisites." } },
                { "@type": "Question", name: "Are these classes suitable for beginners?", acceptedAnswer: { "@type": "Answer", text: "Some courses are beginner-friendly; others require prior technical experience." } },
                { "@type": "Question", name: "How are public classes delivered?", acceptedAnswer: { "@type": "Answer", text: "Available in online or on-site formats, depending on the scheduled class." } },
                { "@type": "Question", name: "Do public classes include hands-on practice?", acceptedAnswer: { "@type": "Answer", text: "Most public classes include hands-on labs and practical exercises. For courses focused on emerging technologies or specialized topics, the format may be more concept-driven, with real-world examples and engineering insights." } },
                { "@type": "Question", name: "Will I receive a certificate after completion?", acceptedAnswer: { "@type": "Answer", text: "Yes, participants receive a Timmins certificate upon successful completion." } },
                { "@type": "Question", name: "Are these classes HRDC claimable?", acceptedAnswer: { "@type": "Answer", text: "Yes. All Timmins public classes are HRDC claimable for Malaysian employers. As an HRDC-registered training provider, we provide the necessary registration details to support your claim." } },
                { "@type": "Question", name: "Which countries can participants join from?", acceptedAnswer: { "@type": "Answer", text: "Participants from the same or nearby time zones (UTC+7 to UTC+9), including Malaysia, Indonesia, and Singapore, can join our scheduled public classes. For other regions such as North America, separate schedules may be arranged." } },
                { "@type": "Question", name: "What happens after I register?", acceptedAnswer: { "@type": "Answer", text: "Our team will contact you to guide you through the next steps. This includes payment arrangements and, for Malaysian employers, support with the HRDC grant application process. Once the grant and registration are confirmed, we will provide the official confirmation, joining details, and pre-class information." } },
                { "@type": "Question", name: "Can I switch to in-house training instead?", acceptedAnswer: { "@type": "Answer", text: "Yes. If you require customized content or team-based training, we can arrange an in-house program tailored to your organization. Please contact us to discuss your requirements." } },
            ],
        },
    ],
};

export default function PublicClassesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Script
                id="public-classes-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {children}
        </>
    );
}
