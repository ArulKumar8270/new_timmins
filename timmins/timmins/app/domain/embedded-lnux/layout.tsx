import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Embedded Linux Training: Kernel, Drivers & Debugging | Timmins",
    description:
        "Build deep embedded Linux capability, from OS fundamentals to kernel internals, device drivers, debugging, security, and system integration. The training is role-aligned and hands-on. It's suitable for engineering and manufacturing teams across Malaysia, Indonesia, Canada, and the US. HRDC-claimable only for Malaysian employers.",
    keywords:
        "embedded linux training, embedded linux development, linux kernel development, linux driver development, linux device driver training, embedded linux security",
    alternates: {
        canonical: "https://www.timmins-consulting.com/domain/embedded-lnux",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Embedded Linux Development",
    description:
        "Embedded Linux training focused on building Linux-based platforms for embedded systems, covering OS fundamentals, kernel internals, device drivers, debugging, security, and system integration.",
    url: "https://www.timmins-consulting.com/domain/embedded-lnux",
    publisher: {
        "@type": "Organization",
        name: "Timmins Training Consulting",
        url: "https://www.timmins-consulting.com",
    },
    mainEntity: {
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What does Embedded Linux cover in this domain?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "This domain covers building Linux-based software platforms for embedded systems, including operating system fundamentals, user space, kernel internals, device drivers, debugging, security, and system integration.",
                },
            },
            {
                "@type": "Question",
                name: "How is Embedded Linux different from general Linux or application development?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Embedded Linux involves close interaction between software and hardware. It requires understanding resource constraints, kernel behavior, device drivers, board bring-up, and system-level debugging, not just application logic.",
                },
            },
            {
                "@type": "Question",
                name: "Does this domain include kernel and device driver development?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Kernel internals and device driver development are core components of the domain, including character drivers, peripheral drivers (I2C, SPI, UART), interrupt handling, and kernel–user space interaction.",
                },
            },
            {
                "@type": "Question",
                name: "How deep does the training go into debugging and system analysis?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Debugging is a major focus. The domain covers user-space debugging, kernel debugging, root cause analysis of crashes and hangs, performance diagnostics, and cross-layer troubleshooting.",
                },
            },
            {
                "@type": "Question",
                name: "Is Embedded Linux security covered in this domain?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The domain includes embedded Linux security fundamentals, secure system design awareness, and SELinux concepts relevant to embedded and long-lived systems.",
                },
            },
            {
                "@type": "Question",
                name: "How does Timmins Training Consulting approach Embedded Linux training?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Timmins treats Embedded Linux as a deep technical capability domain. Training is competency-driven, aligned to real embedded engineering roles, and emphasizes hands-on understanding of kernels, drivers, and debugging.",
                },
            },
            {
                "@type": "Question",
                name: "Who is this Embedded Linux domain suitable for?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The domain is suitable for fresh graduates, junior engineers, experienced embedded developers, senior engineers, and technical leads working on Linux-based embedded systems.",
                },
            },
            {
                "@type": "Question",
                name: "Can organizations customize learning paths for different embedded roles?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Learning paths can be customized for application engineers, kernel or driver engineers, BSP and platform teams, integration engineers, or full product teams.",
                },
            },
            {
                "@type": "Question",
                name: "What training formats are available for Embedded Linux?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Timmins delivers Embedded Linux training through public instructor-led programs, in-house corporate training, role-based onboarding, modular learning paths, and customized programs for product teams.",
                },
            },
            {
                "@type": "Question",
                name: "What outcomes can organizations expect from this Embedded Linux domain?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Organizations gain faster onboarding, stronger embedded Linux capability, improved system stability and debuggability, reduced reliance on ad-hoc troubleshooting, and clearer progression from application-level to kernel-level expertise.",
                },
            },
        ],
    },
};

export default function EmbeddedLinuxLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Script
                id="embedded-linux-domain-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {children}
        </>
    );
}
