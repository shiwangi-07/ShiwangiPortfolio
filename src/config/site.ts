import { title } from "process";

export const siteConfig = {
    name: "Shiwangi Portfolio",
    url: "https://shiwangiportfolio.vercel.app/",
    description: "Portfolio of Shiwangi Singh",
    ogImage: "https://shiwangiportfolio.vercel.app/og.jpg",
    links: {
        shadcn: "https://ui.shadcn.com/",
        github: "https://github.com/shiwangi-07/ShiwangiPortfolio",
        githubProfile: "https://github.com/shiwangi-07",
        resume: "https://drive.google.com/file/d/1YbSFQO2I6O2qLex2JtXQUfNthvu3S0ND/view?usp=sharing",
        email: "mailto:shiwangi1204@gmail.com",
        githubUsername: "shiwangi-07",
    },
    projects: {
        Welth: {
            title: "Welth · AI-Finance Platform",
            description:
                "Developed an AI-powered finance platform with smoother user experience. Integrated Gemini AI and Clerk  enable automated monthly reports, and secure handling.",
            tags: [
                "Next.js",
                "Gemini AI",
                "Arcjet",
                "Clerk",
                "Inngest",
                "Prisma",
                "Shadcn UI",
                "Full Stack",
                "Web Application",
            ],
            live: "https://neo-finance-ai.vercel.app/",
            github: "https://github.com/shiwangi-07/NeoFinance-AI",
        },
        Sensai: {
            title: "Sensai · AI Career Coach",
            description:
                "Built with AI-driven career coaching features using Next.js and Gemini AI, offering real-time resume, cover letter, and interview prep with secure auth and dynamic personalization.",
            tags: [
                "Next.js",
                "Gemini AI",
                "Clerk",
                "Inngest",
                "Prisma",
                "Shadcn UI",
                "Full Stack",
                "Web Application",
            ],
            live: "https://ai-mentor-hub.vercel.app/",
            github: "https://github.com/shiwangi-07/ai-mentor-hub",
        },
        CryptoTracker: {
            title: "CryptoTracker · Crypto currency tracking platform",
            description:
                "Crypto currency tracking platform with real time price-updates, detailed coin information, price charts, search functionality, and responsive design.",
            tags: [
                "React",
                "Node.js",
                "Express",
                "JavaScript",
                "Web Application",
            ],
            live: "https://crypto-tracker-eta-bay.vercel.app/",
            github: "https://github.com/shiwangi-07/crypto-tracker",
        },
    },
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
    light: "#ffffff",
    dark: "#09090b",
};
