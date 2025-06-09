import type { Metadata } from 'next';
import './globals.css'; // This now contains your theme!

export default function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        <html lang="en">
        {/* You don't need `bg-background` or `text-textPrimary` here anymore because
        the body rule in globals.css now handles it. You can leave it clean.
      */}
        <body>
        {/* We'll add a Header and Footer here later */}
        {children}
        </body>
        </html>
    );
}