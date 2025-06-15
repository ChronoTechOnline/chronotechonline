"use client";

import AnimatedHeroBackground from "./AnimatedHeroBackground";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* FIX: Add a non-animated, full-screen container with overflow-hidden */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <AnimatedHeroBackground />
            </div>

            {/* The rest of the page content */}
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