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
                        width={1440}
                        height={1440}
                        className="h-50 w-50 md:h-80 md:w-80 mb-4"
                    />
                    <p className="text-xl md:text-xl text-primary mb-4">
                        Atlanta Based Software Development Services
                    </p>
                    <hr className="w-3/4 border-primary/50 mb-8 " />
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
                        Your Innovative Software Partner
                    </h1>
                    <p className="text-lg text-textSecondary mb-4 leading-relaxed">
                        The path from a brilliant concept and a fully-realized digital product can feel immense. That&apos;s where I can assist. I partner with you to navigate the technical challenges and bring your most innovative ideas to life.
                    </p>
                    <p className="text-lg text-textSecondary mb-4 leading-relaxed">
                        With over 6 years in software development, my role is to be your architect and engineer for your vision. I specialize in building high-performance, custom software from the ground up, designed specifically to your needs. We pride on providing software that&apos;s not only flawless but also perfectly embodies the identity of your brand.
                    </p>
                    <p className="text-lg text-textSecondary mb-4 leading-relaxed">
                        As your technical partner, I&apos;m here to guide you through every step of the way by working collaboratively with you to understand your goals and translate them into tangible results. Let&apos;s build something extraordinary together!
                    </p>
                    <Link
                        href="/contact"
                        className="bg-primary text-background font-bold py-3 px-10 rounded-md text-lg
                       hover:bg-primaryHover transition-colors duration-300 mt-4"
                    >
                        Get In Touch
                    </Link>
                </div>
            </section>

            <section id="services" className="py-20 md:py-28 bg-cardBackground">
                <div className="container mx-auto max-w-7xl px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
                    <p className="text-lg text-textSecondary mb-12 max-w-2xl mx-auto">
                        I offer a range of services designed to bring your ideas to life. I specialize in creating full end to end solutions, turning your vision into reality. I provide services across various technologies, including web development, mobile apps, and e-commerce solutions.
                    </p>
                    <ServicesCarousel services={services} />
                </div>
            </section>
        </main>
    );
}