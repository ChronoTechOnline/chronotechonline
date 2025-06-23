import { getPolicies } from '@/lib/policies';
import Link from 'next/link';

export default function PrivacyIndexPage() {
    const policies = getPolicies();

    return (
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-primary">
                    Privacy Documents
                </h1>
                <p className="mt-4 text-lg text-textSecondary">
                    A list of privacy policies for our various projects and applications.
                </p>
            </div>

            <div className="space-y-4">
                {policies.map(policy => (
                    <Link
                        key={policy.slug}
                        href={`/privacy/${policy.slug}`}
                        className="block p-6 bg-cardBackground border border-secondary/30 rounded-lg
                                   hover:border-primary/60 transition-colors"
                    >
                        <h2 className="text-xl font-bold text-textPrimary">{policy.title}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
}