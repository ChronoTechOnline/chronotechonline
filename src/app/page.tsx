import Link from 'next/link';
import Image from "next/image"
import ServicesCarousel from '@/components/ServicesCarousel';
import React from 'react';
import AnimatedHeroBackground from '@/components/AnimatedHeroBackground';
import { getServices } from '@/lib/services';

export default function HomePage() {
    const services = getServices();

    return (
        // FIX: Add 'overflow-x-hidden' to the main container
        <main className="overflow-x-hidden">
            <section className="relative min-h-screen flex items-center justify-center text-center p-8 overflow-hidden">
                <AnimatedHeroBackground />
                <div className="relative z-10 max-w-3xl flex flex-col items-center">
                    <Image
                        src="/images/ChronoTechLogo.png"
                        alt="ChronoTech Logo"
                        width={1080}
                        height={1080}
                        className="h-60 w-60 md:h-80 md:w-80 mb-6"
                    />
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        Your Innovative Software Partner
                    </h1>
                    <p className="text-xl md:text-2xl text-primary mb-8">
                        Building Scalable Solutions for the Modern Web
                    </p>
                    <p className="text-lg text-textSecondary mb-10 leading-relaxed">
                        We specialize in creating high-performance, custom software solutions that drive growth and efficiency for your business. Let&apos;s build something great together.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-primary text-background font-bold py-3 px-10 rounded-md text-lg
                       hover:bg-primaryHover transition-colors duration-300"
                    >
                        Get In Touch
                    </Link>
                </div>
            </section>

            <section id="services" className="py-20 md:py-28 bg-cardBackground">
                <div className="container mx-auto max-w-7xl px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
                    <p className="text-lg text-textSecondary mb-12 max-w-2xl mx-auto">
                        We offer a range of services designed to bring your ideas to life with precision and innovation.
                    </p>
                    <ServicesCarousel services={services} />
                </div>
            </section>
        </main>
    );
}