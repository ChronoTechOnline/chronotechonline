import Link from 'next/link';
import { IconType } from 'react-icons';
import { FiBriefcase, FiShoppingCart, FiAward, FiArrowRight } from 'react-icons/fi';
import { Service } from '@/lib/services';

const iconMap: { [key: string]: IconType } = {
    FiBriefcase,
    FiShoppingCart,
    FiAward,
};

export default function FullServiceCard({ service }: { service: Service }) {
    if (!service || !service.slug) {
        return null;
    }

    const Icon = service.icon ? iconMap[service.icon] : null;

    return (
        <Link
            href={`/services/${service.slug}`}
            className="group block rounded-2xl border border-secondary/30 bg-cardBackground p-8
                       transition-all duration-300 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
        >
            <div className="flex flex-col sm:flex-row sm:items-start sm:gap-8 h-full">
                {Icon && (
                    <div className="flex-shrink-0 mb-6 sm:mb-0">
                        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-background text-primary">
                            <Icon className="h-8 w-8" />
                        </div>
                    </div>
                )}

                <div className="flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-textPrimary">
                        {service.name}
                    </h3>
                    <p className="mt-1 text-lg font-semibold text-primary">{service.price}</p>

                    <ul className="mt-4 space-y-1 text-textSecondary list-none p-0">
                        {service.brief.map((item, index) => (
                            <li key={index} className="flex items-center">
                                <span className="text-primary mr-2">›</span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto pt-6 text-right">
                        <div className="inline-flex items-center gap-2 font-semibold text-primary">
                            View Details
                            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}