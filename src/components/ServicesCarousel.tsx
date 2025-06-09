"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper's required CSS files
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import ServiceCard from './ServiceCard'; // Your existing ServiceCard component
import { type Service } from '@/data/services'; // The Service type

interface ServicesCarouselProps {
    services: Service[];
}

export default function ServicesCarousel({ services }: ServicesCarouselProps) {
    if (!services || services.length === 0) {
        return <p>No services to display at the moment.</p>;
    }

    // Only loop if there are enough slides to make it look good
    const enableLoop = services.length > 3;

    return (
        <div className="w-full">
            <Swiper
                // Register the Swiper modules we want to use
                modules={[Autoplay, Pagination, Navigation]}

                // Responsive settings for how many slides to show
                slidesPerView={1.1} // Start with showing 1 full and a peek of the next
                spaceBetween={16}
                centeredSlides={true}
                breakpoints={{
                    // when window width is >= 768px (md)
                    768: {
                        slidesPerView: 2.3,
                        spaceBetween: 24,
                        centeredSlides: true,
                    },
                    // when window width is >= 1024px (lg)
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        centeredSlides: false, // Not needed when showing full integer slides
                    },
                }}

                // Autoplay and Navigation settings
                loop={enableLoop}
                autoplay={{
                    delay: 4500, // Time in ms between slides
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{
                    clickable: true, // Allows clicking on dots to navigate
                    dynamicBullets: true,
                }}
                navigation={true} // Shows Next/Prev arrows
                className="myServicesSwiper pb-16" // Add padding-bottom for pagination dots
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index} className="h-auto self-stretch pb-2">
                        {/* The h-full div helps ensure cards stretch to the same height */}
                        <div className="h-full">
                            <ServiceCard service={service} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}