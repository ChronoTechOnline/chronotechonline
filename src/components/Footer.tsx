import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const socialLinks = [
    {
        name: 'GitHub',
        icon: <FiGithub size={24} />,
        href: 'https://github.com', // Replace with your actual link
    },
    {
        name: 'LinkedIn',
        icon: <FiLinkedin size={24} />,
        href: 'https://linkedin.com', // Replace with your actual link
    },
    {
        name: 'Twitter',
        icon: <FiTwitter size={24} />,
        href: 'https://twitter.com', // Replace with your actual link
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-cardBackground border-t border-secondary/30 mt-auto">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col items-center justify-between md:flex-row gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-lg font-semibold text-textPrimary">ChronoTechOnline</p>
                        <p className="text-sm text-textSecondary">
                            &copy; {currentYear} ChronoTechOnline. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                className="text-textSecondary hover:text-primary transition-colors"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}