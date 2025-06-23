import { getPolicyBySlug, getPolicies } from '@/lib/policies';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// FIX: Define the props type where `params` is a Promise.
interface PolicyPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PolicyPageProps): Promise<Metadata> {
    // FIX: Await the params promise to resolve the object.
    const { slug } = await params;
    const policy = await getPolicyBySlug(slug);

    if (!policy) {
        return { title: 'Policy Not Found' };
    }
    return { title: `${policy.title} | ChronoTechOnline` };
}

export async function generateStaticParams() {
    const policies = getPolicies();
    return policies.map((policy) => ({
        slug: policy.slug,
    }));
}

export default async function PolicyPage({ params }: PolicyPageProps) {
    // FIX: Await the params promise to resolve the object.
    const { slug } = await params;
    const policy = await getPolicyBySlug(slug);

    if (!policy) {
        notFound();
    }

    return (
        <article className="max-w-4xl mx-auto px-6 py-12 md:py-20 prose prose-invert
                       prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primaryHover">
            <h1>{policy.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: policy.content }} />
        </article>
    );
}