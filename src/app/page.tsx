import Link from 'next/link';
import { services } from '@/data/services'; // <--- IMPORT SERVICES DATA
import ServicesCarousel from '@/components/ServicesCarousel'; // <--- IMPORT CAROUSEL

export default function HomePage() {
  return (
      <main>
        {/* ... (Hero Section remains the same) ... */}

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