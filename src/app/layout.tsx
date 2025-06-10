import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header'; // <--- IMPORT HEADER
import Footer from '@/components/Footer'; // <--- IMPORT FOOTER

export const metadata: Metadata = {
    title: 'ChronoTechOnline', // Updated title
    description: 'Custom software solutions for your business.',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        {/* The body is now a flex container to push the footer down */}
        <body className="bg-background text-textPrimary flex flex-col min-h-screen">
        <Header />
        {/* The main content area will grow to fill available space */}
        <main className="flex-grow pt-20">
            {children}
        </main>
        <Footer /> {/* <--- ADDED FOOTER */}
        </body>
        </html>
    );
}