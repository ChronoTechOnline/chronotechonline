import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';

export const metadata: Metadata = {
    title: 'ChronoTechOnline',
    description: 'Custom software solutions for your business.',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="text-textPrimary">
        <ClientLayout>{children}</ClientLayout>
        </body>
        </html>
    );
}