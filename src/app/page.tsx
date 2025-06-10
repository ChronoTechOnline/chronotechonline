import Link from 'next/link';
import Image from "next/image"
import { services } from '@/data/services'; // <--- IMPORT SERVICES DATA
import ServicesCarousel from '@/components/ServicesCarousel'; // <--- IMPORT CAROUSEL
import React from 'react';

export default function HomePage() {
    return (
        <main className="bg-background text-textPrimary">
            {/* ===== HERO SECTION FOR BUSINESS SITE ===== */}
            <section className="relative min-h-screen flex items-center justify-center text-center p-8">

                {/* Background Image & Dark Overlay Layer */}
                <div className="absolute inset-0 z-0"> {/* Changed z-[-1] to z-0 for stacking context */}
                    <Image
                        src="/images/HexBanner.png" // <-- YOUR IMAGE PATH HERE
                        alt="Modern technology background"
                        layout="fill"
                        objectFit="cover"
                        quality={80}
                        priority // Helps load this important image faster
                    />
                    {/* The Dark Overlay */}
                    <div className="absolute inset-0 bg-background opacity-80"></div>
                </div>

                {/* Content Layer */}
                <div className="relative z-10 max-w-3xl flex flex-col items-center"> {/* z-10 ensures content is above background */}
                <Image
                    src="/images/ChronoTechCircle.png" // Path to your logo
                    alt="ChronoTech Logo"
                    width={1080} // A larger size for the hero section
                    height={1080}
                    className="h-80 w-80 mb-6" // Center the logo and add margin below it
                />
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        Your Innovative Software Partner
                    </h1>
                    <p className="text-xl md:text-2xl text-primary mb-8">
                        Building Scalable Solutions for the Modern Web
                    </p>
                    <p className="text-lg text-textSecondary mb-10 leading-relaxed">
                        We specialize in creating high-performance, custom software solutions that drive growth and efficiency for your business. Let's build something great together.
                    </p>
                    <Link
                        href="/contact" // Will point to the future Contact Us page
                        className="bg-primary text-background font-bold py-3 px-10 rounded-md text-lg
                       hover:bg-primaryHover transition-colors duration-300"
                    >
                        Get In Touch
                    </Link>
                </div>
            </section>


        {/* Services Section */}
        <section id="services" className="py-20 md:py-28 bg-cardBackground">
          {/* Using a wider container for the carousel */}
          <div className="container mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-textSecondary mb-12 max-w-2xl mx-auto">
              We offer a range of services designed to bring your ideas to life with precision and innovation.
            </p>

            {/* REPLACE THE PLACEHOLDER WITH THE CAROUSEL COMPONENT */}
            <ServicesCarousel services={services} />

          </div>
        </section>
      </main>
  );
}