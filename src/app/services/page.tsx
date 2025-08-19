import { getServices } from '@/lib/services';
import FullServiceCard from '@/components/FullServiceCard';

export default function ServicesPage() {
    const services = getServices();

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-primary">
                    Our Services
                </h1>
                <p className="mt-4 text-lg text-textSecondary max-w-2xl mx-auto">
                    We offer a tailored suite of services to bring your digital vision to life, from elegant portfolios to robust e-commerce solutions.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {services.map((service) => (
                    <FullServiceCard key={service.slug} service={service} />
                ))}
            </div>
            <div className="mx-auto mt-8">
                <h3 className="text-left text-3xl md:text-4xl font-bold text-textSecondary">
                    The Process
                </h3>
                <p className="text-left mt-4 text-lg text-textSecondary mx-auto whitespace-pre-line">
                    {`1. Contact
                    2. Introductory call to discuss your ideas and next steps!
                    3. Detailed proposal, invoice, and 50% deposit.
                    4. Project prototype, feedback, and final invoice.
                    5. Delivery, handoff, and maintenance.
                    `}
                </p>
            </div>
        </div>
    );
}