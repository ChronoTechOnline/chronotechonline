import { getServiceBySlug, getServices, Service } from '@/lib/services';
import { notFound } from 'next/navigation';
import { FiCheckCircle, FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';
import type { Metadata } from 'next';

// FIX: Define the props type where `params` is a Promise.
// This matches the type constraint from the build error.
interface ServicePageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    // FIX: Await the params promise to resolve the object, then get the slug.
    const { slug } = await params;
    const service = await getServiceBySlug(slug);

    if (!service) {
        return {
            title: 'Service Not Found',
            description: 'The requested service could not be found.'
        }
    }

    return {
        title: `${service.name} | ChronoTechOnline`,
        description: service.brief[0],
    }
}

export async function generateStaticParams() {
    const services = getServices();
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: ServicePageProps) {
    // FIX: Await the params promise to resolve the object.
    const { slug } = await params;
    const service = await getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    return (
        <article className="max-w-4xl mx-auto px-6 py-12 md:py-20 prose prose-invert
                       prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primaryHover">

            <h1 className="text-4xl md:text-5xl font-bold !mb-4">{service.name}</h1>
            <p className="text-2xl text-textSecondary !mt-0">{service.price}</p>

            <div className="my-8" dangerouslySetInnerHTML={{ __html: service.content }} />

            <div className="mt-12 p-6 bg-cardBackground border border-secondary/30 rounded-lg">
                <h2 className="text-2xl font-bold !mt-0">What&apos;s Included</h2>
                <ul className="mt-4 space-y-2 !p-0">
                    {service.brief.map((item, index) => (
                        <li key={index} className="flex items-start !p-0">
                            <FiCheckCircle className="text-primary h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {service.addOns && service.addOns.length > 0 && (
                <div className="mt-8 p-6 bg-cardBackground border border-secondary/30 rounded-lg">
                    <h2 className="text-2xl font-bold !mt-0">Popular Add-ons</h2>
                    <ul className="mt-4 space-y-2 !p-0">
                        {service.addOns.map((item, index) => (
                            <li key={index} className="flex items-start !p-0">
                                <FiCheckCircle className="text-primary h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {service.examples && service.examples.length > 0 && (
                <div className="mt-8 p-6 bg-cardBackground border border-secondary/30 rounded-lg">
                    <h2 className="text-2xl font-bold !mt-0">Live Examples</h2>
                    <ul className="mt-4 space-y-2 !p-0">
                        {service.examples.map((example, index) => (
                            <li key={index} className="flex items-center !p-0">
                                <FiExternalLink className="text-primary h-5 w-5 mr-3 flex-shrink-0" />
                                <a
                                    href={example.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold !no-underline"
                                >
                                    {example.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="mt-12 text-center">
                <Link
                    href="/contact"
                    className="bg-primary text-background font-bold py-3 px-10 rounded-md text-lg
                       hover:bg-primaryHover transition-colors duration-300 no-underline"
                >
                    Start a Project
                </Link>
            </div>
        </article>
    );
}