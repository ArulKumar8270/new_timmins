import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Embedded Linux System Internals Training | Timmins",
    description: "Join Timmins' Embedded Linux System Internals training to master kernel internals, driver development, synchronization, DMA, and debugging through hands-on practice with industry practitioners.",
    keywords: "embedded linux training, embedded linux system internals, linux kernel training, linux driver development course, hands-on embedded linux, public class, training malaysia, hrdc claimable",
    alternates: { canonical: "https://www.timmins-consulting.com/training-calendar/public-classes/embedded-linux-system-internals" },
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
            "@type": "Course",
            "@id": "https://www.timmins-consulting.com/training-calendar/public-classes/embedded-linux-system-internals#course",
            name: "Embedded Linux System Internals",
            description: "A 5-day instructor-led course providing in-depth exploration of Embedded Linux kernel internals, device drivers, synchronization, DMA engine, and kernel debugging through hands-on practice.",
            provider: { "@type": "Organization", "@id": "https://www.timmins-consulting.com/#organization" },
            audience: {
                "@type": "Audience",
                audienceType: "Embedded software engineers, device driver developers, Linux kernel developers, system architects",
            },
            educationalCredentialAwarded: "Certificate of Completion",
            hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: "Offline",
                location: {
                    "@type": "Place",
                    name: "Timmins Penang Training Center",
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: "Penang",
                        addressCountry: "MY",
                    },
                },
            },
        },
        {
            "@type": "Event",
            "@id": "https://www.timmins-consulting.com/training-calendar/public-classes/embedded-linux-system-internals#event",
            name: "Embedded Linux System Internals Training",
            startDate: "2026-05-04",
            endDate: "2026-05-08",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            eventStatus: "https://schema.org/EventScheduled",
            location: {
                "@type": "Place",
                name: "Timmins Penang Training Center",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Penang",
                    addressCountry: "MY",
                },
            },
            organizer: { "@type": "Organization", "@id": "https://www.timmins-consulting.com/#organization" },
            offers: {
                "@type": "Offer",
                priceCurrency: "MYR",
                price: "XX",
                availability: "https://schema.org/InStock",
                url: "https://www.timmins-consulting.com/contact-us",
            },
        },
    ],
};

export default function EmbeddedLinuxLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Script
                id="embedded-linux-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {children}
        </>
    );
}
