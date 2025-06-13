"use client";

import AnimatedHeroBackground from "./AnimatedHeroBackground";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* The animated background will exist on every page */}
            <AnimatedHeroBackground />

            {/* The rest of the page content, positioned on top of the background */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow pt-20">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}