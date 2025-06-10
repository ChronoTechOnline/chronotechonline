import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header'; // <--- IMPORT HEADER
// import Footer from '@/components/Footer'; // Import Footer when you create it

export const metadata: Metadata = {
    title: 'Your Software Business Name',
    description: 'Custom software solutions for your business.',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="bg-background text-textPrimary">
        <Header /> {/* <--- ADD HEADER */}
        <main className="pt-20"> {/* Add padding-top to offset the h-20 header */}
            {children}
        </main>
        {/* <Footer /> */} {/* Footer will go here later */}
        </body>
        </html>
    );
}