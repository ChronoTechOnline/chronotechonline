"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AnimatedHeroBackground() {
    return (
        <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1 }} // The animation starts at 100% scale
            animate={{ scale: 1.5 }} // It animates a single time to 105%
            transition={{
                duration: 7, // A slow, 10-second animation duration
                ease: "easeOut", // The animation will slow down towards the end
            }}
        >
            <Image
                src="/images/HexBanner.png"
                alt="Modern technology background"
                layout="fill"
                objectFit="cover"
                quality={80}
                priority
            />
            {/* The Dark Overlay is also inside the animated div */}
            <div className="absolute inset-0 bg-background opacity-80"></div>
        </motion.div>
    );
}