import { ThemeProvider } from "@/components/theme-provider";
import { META_THEME_COLORS, siteConfig } from "@/config/site";
import { fontSans, fontMono } from "@/lib/fonts";
import { Toaster } from "@/components/ui/sonner";

import { Metadata, Viewport } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { SideNav } from "@/components/side-nav";
import { SiteFooter } from "@/components/site-footer";
import { docsConfig } from "@/config/docs";
import { setViewsServerAction } from "@/actions/getAndSetViewsServerAction";
import { getLoveCountServerAction } from "@/actions/getAndSetLoveCountServerAction";
import CustomCursor from "@/components/CustomCursor";
import { ReactLenis } from "lenis/react";

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    metadataBase: new URL(siteConfig.url),
    keywords: [
        "Shiwangi Singh",
        "Shiwangi Singh Portfolio",
        "Shiwangi Singh Projects",
        "Shiwangi Singh Skills",
        "Shiwangi Singh Experience",
        "Shiwangi Singh Education",
        "Shiwangi Singh Contact",
        "Shiwangi Singh Blog",
        "Shiwangi Singh Resume",
    ],
    authors: [
        {
            name: "Shiwangi Singh",
            url: "https://shiwangiportfolio.vercel.app/",
        },
    ],
    creator: "Shiwangi Singh",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: "@cypherab01",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
    themeColor: META_THEME_COLORS.light,
};

interface RootLayoutProps {
    children: React.ReactNode;
}

async function loadStats() {
    try {
        await setViewsServerAction();
        await getLoveCountServerAction();
    } catch (error) {
        console.error("Failed to load stats:", error);
        return;
    }
}

export default async function RootLayout({ children }: RootLayoutProps) {
    await loadStats();
    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch(error) (_) {}
            `,
                        }}
                    />
                </head>
                <body
                    className={cn(
                        "min-h-svh bg-background font-sans antialiased",
                        fontSans.variable,
                        fontMono.variable
                    )}
                >
                    <ReactLenis
                        root
                        options={{
                            lerp: 0.1,
                            duration: 1.4,
                        }}
                    >
                        <ThemeProvider
                            attribute="class"
                            defaultTheme="system"
                            enableSystem
                            disableTransitionOnChange
                            enableColorScheme
                        >
                            <CustomCursor />

                            <div vaul-drawer-wrapper="">
                                <div className="relative flex flex-col min-h-svh bg-background">
                                    <div
                                        data-wrapper=""
                                        className="flex flex-col flex-1 border-grid"
                                    >
                                        <SiteHeader />
                                        <main className="flex flex-col flex-1">
                                            <div className="container-wrapper">
                                                <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                                                    <aside className="border-grid fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block">
                                                        <div className="h-full py-6 pr-4 overflow-auto no-scrollbar lg:py-8">
                                                            <SideNav
                                                                config={
                                                                    docsConfig
                                                                }
                                                            />
                                                        </div>
                                                    </aside>
                                                    <div className="flex flex-col flex-1 py-6 pr-4 lg:py-8">
                                                        {children}
                                                    </div>
                                                </div>
                                            </div>
                                        </main>
                                        <SiteFooter />
                                    </div>
                                </div>
                            </div>
                        </ThemeProvider>
                        <Toaster richColors position="top-center" />
                    </ReactLenis>
                </body>
            </html>
        </>
    );
}
