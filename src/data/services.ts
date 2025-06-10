import { JSX } from "react";

export type Service = {
    name: string;
    price: string;
    details: string[];
    image?: string;
    icon?: string;
};

export const services: Service[] = [
    {
        name: "Launchpad Portfolio",
        price: "Starting at $1,500",
        details: [
            "Built on the Wix platform for easy user updates.",
            "Stunning, customized template design.",
            "Fully mobile-responsive for all devices.",
            "Basic on-page SEO to get you found.",
        ],
        icon: 'FiBriefcase', // Icon for a professional portfolio
    },
    {
        name: "E-commerce Quickstart",
        price: "Starting at $3,000",
        details: [
            "Powered by Shopify's robust platform.",
            "Payment gateway & shipping configuration.",
            "Compatible with a wide range of providers."
        ],
        icon: 'FiShoppingCart', // Icon for e-commerce
    },
    {
        name: "Bespoke Mobile App",
        price: "Starting at $1,500",
        details: [
            "Android only, iOS pending",
            "Fluid and responsive UI via React Native",
        ],
        icon: 'FiBriefcase', // Icon for a professional portfolio
    },
    {
        name: "Bespoke Website",
        price: "Starting at $7,000",
        details: [
            "Unique design tailored to your brand identity.",
            "Blazing-fast performance with Next.js.",
            "Advanced animations & interactions.",
            "Headless CMS for easy content management.",
        ],
        icon: 'FiAward', // Icon for premium, custom quality
    },
];