import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | ChronoTechOnline',
    description: 'Privacy Policy for ChronoTechOnline.',
};

export default function PrivacyPolicyPage() {
    return (
        <main>
            <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 prose prose-invert
                       prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primaryHover">

                <h1 className="text-4xl md:text-5xl font-bold !mb-8">Privacy Policy</h1>
                <p className="text-textSecondary">Last Updated: June 22, 2025</p>

                <h2>Introduction</h2>
                <p>
                    Welcome to ChronoTechOnline. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>

                <h2>Information We Collect</h2>
                <p>
                    We may collect personal information that you voluntarily provide to us when you fill out the contact form, such as your name and email address. We may also collect non-personal information automatically as you navigate through the site, such as browser type, operating system, and website usage data collected through server logs.
                </p>

                <h2>How We Use Your Information</h2>
                <p>
                    Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
                    <ul>
                        <li>Respond to your inquiries and provide customer support.</li>
                        <li>Improve our website and services.</li>
                        <li>Monitor and analyze usage and trends to improve your experience with the site.</li>
                    </ul>
                </p>

                <h2>Data Security</h2>
                <p>
                    We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>

                <h2>Contact Us</h2>
                <p>
                    If you have questions or comments about this Privacy Policy, please contact us through our <Link href="/contact">contact page</Link>.
                </p>
            </div>
        </main>
    );
}