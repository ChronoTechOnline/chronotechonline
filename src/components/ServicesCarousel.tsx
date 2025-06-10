"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Service } from '@/data/services';
import ServiceCard from './ServiceCard';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ServicesCarouselProps {
    services: Service[];
}

export default function ServicesCarousel({ services }: ServicesCarouselProps) {
    // 1. Set up Embla with the Autoplay plugin
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: services.length > 3, align: 'start' },
        [Autoplay({ playOnInit: true, delay: 3000, stopOnInteraction: false })]
    );

    // 2. State for controlling the dots
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    // 3. Functions to control the carousel
    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    // 4. Listen for Embla events to update the dot state
    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        onSelect(); // Set initial selected dot

        return () => { emblaApi.off('select', onSelect); };
    }, [emblaApi]);

    return (
        // The main container for the carousel and its controls
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {services.map((service, index) => (
                        <div className="embla__slide" key={index}>
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom Buttons */}
            <button className="embla__button embla__button--prev" onClick={scrollPrev}>
                <FiChevronLeft size={30} />
            </button>
            <button className="embla__button embla__button--next" onClick={scrollNext}>
                <FiChevronRight size={30} />
            </button>

            {/* Custom Dots */}
            <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={'embla__dot'.concat(
                            index === selectedIndex ? ' embla__dot--selected' : ''
                        )}
                    />
                ))}
            </div>
        </div>
    );
}