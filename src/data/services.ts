// We can add icons later if you want them for each service
// import { SomeIcon } from 'react-icons/some-set';

export type Service = {
    name: string;
    price: string; // Using string to allow for "Starting at $X" or "Contact for Quote"
    details: string[]; // An array of strings for bullet points
    image?: string; // Optional image path from /public
    // icon?: JSX.Element; // Optional icon component
};

export const services: Service[] = [
    {
        name: "Custom Web Application",
        price: "Starting at $5,000",
        details: [
            "Full-stack development with Next.js & React.",
            "Scalable backend APIs.",
            "Database design and integration.",
            "User authentication and management.",
        ],
        image: "/images/services/web-app.jpg", // Example path
    },
    {
        name: "AI & Machine Learning Integration",
        price: "Contact for Quote",
        details: [
            "Integrate AI models into existing applications.",
            "Custom chatbot development.",
            "Data analysis and insight generation.",
            "Workflow automation with AI agents.",
        ],
        image: "/images/services/ai-integration.jpg",
    },
    {
        name: "IoT & Embedded Systems",
        price: "Project-based",
        details: [
            "Firmware development for embedded devices (C/C++).",
            "IoT platform connectivity and data pipelines.",
            "Real-time data processing.",
            "Hardware and software integration.",
        ],
        image: "/images/services/iot-systems.jpg",
    },
    {
        name: "Game Prototyping & Development",
        price: "Contact for Quote",
        details: [
            "Interactive 3D simulations with Unity/C#.",
            "Gameplay mechanics programming.",
            "AI for NPCs and game logic.",
            "Cross-platform build deployment.",
        ],
        image: "/images/services/game-dev.jpg",
    },
];