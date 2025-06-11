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
        name: "Ascend",
        price: "Starting at $2,000-$4,000",
        details: [
            "Built on the Wix platform for easy user updates.",
            "Stunning, pre-built or custom template design.",
            "Create a fully mobile-responsive online presence.",
            "Perfect for individuals and new businesses to showcase their work and contact information.",
        ],
        icon: 'FiBriefcase', // Icon for a professional portfolio
    },
    {
        name: "Catalyst",
        price: "Starting at $3,500-$10,000+",
        details: [
            "Powered by Shopify's robust platform.",
            "Payment gateway & shipping configuration.",
            "Compatible with a wide range of providers.",
        ],
        icon: 'FiShoppingCart', // Icon for e-commerce
    },
    {
        name: "Bespoke Mobile",
        price: "Starting at $15,000-$40,000",
        details: [
            "Android only, iOS pending",
            "Developed entirely from scratch using React Native to deliver a seamless and engaging user experience.",
        ],
        icon: 'FiBriefcase', // Icon for a professional portfolio
    },
    {
        name: "Bespoke Web",
        price: "Starting at $15,000-$20,000",
        details: [
            "Unique digital experience tailored to your exact specifications.",
            "Custom coded from the ground up using React",
            "Blazing-fast performance with Next.js.",
        ],
        icon: 'FiAward', // Icon for premium, custom quality
    },
];