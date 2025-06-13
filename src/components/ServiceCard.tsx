import React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { FiBriefcase, FiShoppingCart, FiAward } from 'react-icons/fi';
import { Service } from '@/lib/services';

const iconMap: { [key: string]: IconType } = {
    FiBriefcase,
    FiShoppingCart,
    FiAward,
};

export default function ServiceCard({ service }: { service: Service }) {
    if (!service || !service.slug) {
        // Return null if the service or its slug is missing to prevent errors
        return null;
    }

    const Icon = service.icon ? iconMap[service.icon] : null;

    return (
        // The entire card is now wrapped in a Link component
        <Link
            href={`/services/${service.slug}`}
            className="group block h-full transition-all duration-300"
        >
            <div className="bg-cardBackground rounded-2xl border border-secondary/30 h-full
                        flex flex-col overflow-hidden shadow-lg
                        group-hover:shadow-primary/20 group-hover:border-primary/40">

                {Icon && (
                    <div className="w-full h-40 flex-shrink-0 flex items-center justify-center bg-background/30">
                        <Icon className="h-16 w-16 text-primary" />
                    </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-textPrimary mb-2">
                        {service.name}
                    </h3>

                    <p className="text-xl font-semibold text-primary mb-4">
                        {service.price}
                    </p>

                    {/* Now using the 'brief' field for details */}
                    <ul className="space-y-2 text-textSecondary list-disc list-inside mb-6">
                        {service.brief.map((detail, index) => (
                            <li key={index}>{detail}</li>
                        ))}
                    </ul>

                    {/* The "Learn More" button is now just a styled div */}
                    <div className="mt-auto pt-4">
                        <div
                            className="inline-block w-full text-center bg-secondary/50 text-primary font-semibold
                                   py-2 px-4 rounded-md transition-colors duration-200
                                   group-hover:bg-primary group-hover:text-background"
                        >
                            Learn More
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}