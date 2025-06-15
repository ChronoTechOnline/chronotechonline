import Image from 'next/image';
import Link from 'next/link';
import { FiZap, FiCheckCircle, FiUsers } from 'react-icons/fi';

export default function AboutPage() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">

            {/* 1. Page Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-primary">
                    About ChronoTech
                </h1>
                <p className="mt-4 text-lg text-textSecondary max-w-2xl mx-auto">
                    {` From concept to launch, our development process is fueled by innovation. We are your dedicated partner in crafting exceptional and progressive digital experiences. `}
                </p>
            </div>

            {/* 2. Introduction Section (Two-column) */}
            <div className="flex flex-col md:flex-row items-center gap-x-12 gap-y-8 mb-20">
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold text-textPrimary mb-4">Our Mission</h2>
                    <p className="text-textSecondary leading-relaxed mb-4">
                        {` Our mission is to translate our partners' creative visions into the digital landscape. We use modern, robust technologies to build the exceptional tools that drive their progress. `}
                    </p>
                    <p className="text-textSecondary leading-relaxed">
                        {` As a solo developer, the top priority is bringing your ideas to life with superior quality, ensuring your satisfaction through a process built on direct and transparent communication. `}
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    {/* Note: You will need to add an image at this path or update it */}
                    <Image
                        src="/images/Atlanta.png"
                        alt="A placeholder image representing the team or office"
                        width={600}
                        height={400}
                        className="rounded-2xl object-cover shadow-lg"
                    />
                </div>
            </div>

            {/* 3. Core Values Section */}
            <div className="text-center mb-20">
                <h2 className="text-3xl font-bold text-textPrimary mb-10">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Value Card 1 */}
                    <div className="bg-cardBackground p-8 rounded-lg border border-secondary/30">
                        <FiZap className="h-10 w-10 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-textPrimary mb-2">Innovation</h3>
                        <p className="text-textSecondary">
                            We constantly explore new technologies to deliver cutting-edge, future-proof solutions.
                        </p>
                    </div>
                    {/* Value Card 2 */}
                    <div className="bg-cardBackground p-8 rounded-lg border border-secondary/30">
                        <FiCheckCircle className="h-10 w-10 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-textPrimary mb-2">Quality</h3>
                        <p className="text-textSecondary">
                            Our commitment to excellence ensures robust, reliable, and high-performance applications.
                        </p>
                    </div>
                    {/* Value Card 3 */}
                    <div className="bg-cardBackground p-8 rounded-lg border border-secondary/30">
                        <FiUsers className="h-10 w-10 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-textPrimary mb-2">Partnership</h3>
                        <p className="text-textSecondary">
                            We believe in collaborative relationships, working with you as a true extension of your team.
                        </p>
                    </div>
                </div>
            </div>

            {/* 4. CTA Section */}
            <div className="text-center bg-cardBackground p-12 rounded-2xl border border-secondary/30">
                <h2 className="text-3xl font-bold text-textPrimary">Ready to Build Something Great?</h2>
                <p className="mt-4 mb-8 text-lg text-textSecondary max-w-2xl mx-auto">
                    Let&apos;s discuss how we can leverage technology to achieve your goals. Reach out to us today for a free consultation.
                </p>
                <Link
                    href="/contact"
                    className="bg-primary text-background font-bold py-3 px-10 rounded-md text-lg
                       hover:bg-primaryHover transition-colors duration-300 no-underline"
                >
                    Get In Touch
                </Link>
            </div>

        </div>
    );
}