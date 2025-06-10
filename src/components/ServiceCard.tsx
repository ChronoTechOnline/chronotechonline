import React from 'react';
import Image from 'next/image';
import { Service } from '@/data/services';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { FiBriefcase, FiShoppingCart, FiAward } from 'react-icons/fi';

const iconMap: { [key: string]: IconType } = {
    FiBriefcase,
    FiShoppingCart,
    FiAward,
};

export default function ServiceCard({ service }: { service: Service }) {
    // FIX: Add a guard clause to prevent crashing if the service prop is undefined.
    if (!service) {
        // This can happen temporarily with some carousel libraries when looping.
        // Returning null will render nothing and prevent the error.
        return null;
    }

    // Look up the icon component from the map.
    const Icon = service.icon ? iconMap[service.icon] : null;

    return (
        <div className="bg-cardBackground rounded-2xl border border-secondary/30 h-full
                    flex flex-col overflow-hidden shadow-lg
                    transition-all duration-300 hover:shadow-primary/20 hover:border-primary/40">

            {/* Render Icon if the component type exists, otherwise fallback to Image */}
            {Icon ? (
                <div className="w-full h-40 flex-shrink-0 flex items-center justify-center bg-background/30">
                    <Icon className="h-16 w-16 text-primary" />
                </div>
            ) : service.image && (
                <div className="relative w-full h-40 flex-shrink-0">
                    <Image
                        src={service.image}
                        alt={`${service.name} service image`}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            )}

            {/* Text content with padding */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-textPrimary mb-2">
                    {service.name}
                </h3>

                <p className="text-xl font-semibold text-primary mb-4">
                    {service.price}
                </p>

                {/* List of details/features */}
                <ul className="space-y-2 text-textSecondary list-disc list-inside mb-6">
                    {service.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>

                {/* "Learn More" button pushed to the bottom */}
                <div className="mt-auto pt-4">
                    <Link
                        href="/contact" // All cards point to the contact page
                        className="inline-block w-full text-center bg-secondary/50 text-primary font-semibold
                       py-2 px-4 rounded-md hover:bg-primary hover:text-background transition-colors duration-200"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
}