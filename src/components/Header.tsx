"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence, Variants } from 'framer-motion'; // <-- Import Variants type

type NavLinkItem = {
    name: string;
    href: string;
};

const navLinks: NavLinkItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
];

// FIX: Explicitly type the constant with the 'Variants' type
const drawerVariants: Variants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    exit: { x: "100%", transition: { type: "tween", ease: "easeIn", duration: 0.2 } },
};

const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2, delay: 0.1 } },
};

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    useEffect(() => { setIsMobileMenuOpen(false); }, [pathname]);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsMobileMenuOpen(false);
        };

        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEsc);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-30 bg-background/80 backdrop-blur-md shadow-md">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-3 text-xl font-bold text-textPrimary hover:text-primary transition-colors"
                        >
                            <Image
                                src="/images/ChronoTechLogo.png"
                                alt="Your Business Name Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            ChronoTechOnline
                        </Link>

                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-lg transition-colors pb-1 ${
                                        pathname === link.href
                                            ? 'text-primary font-semibold border-b-2 border-primary'
                                            : 'text-textSecondary hover:text-primary'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="md:hidden">
                            <button onClick={toggleMobileMenu} aria-label="Toggle menu" className="text-primary hover:text-primaryHover transition-colors relative z-50">
                                {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            key="mobile-overlay"
                            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-20"
                            variants={overlayVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            onClick={toggleMobileMenu}
                        />
                        <motion.div
                            key="mobile-drawer"
                            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-cardBackground shadow-2xl z-40 flex flex-col"
                            variants={drawerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <div className="p-6 flex justify-end">
                                <button onClick={toggleMobileMenu} aria-label="Close menu" className="text-textSecondary hover:text-primary transition-colors">
                                    <FiX size={30} />
                                </button>
                            </div>
                            <nav className="flex flex-col space-y-4 px-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={toggleMobileMenu}
                                        className={`text-2xl font-semibold p-4 rounded-lg transition-colors ${
                                            pathname === link.href
                                                ? 'text-background bg-primary'
                                                : 'text-textPrimary hover:bg-primary/10'
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}