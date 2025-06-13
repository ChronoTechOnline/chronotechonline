"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import ServiceCard from './ServiceCard';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { type Service } from '@/lib/services'; // <-- FIX: Import the new Service type

interface ServicesCarouselProps {
    services: Service[]; // <-- FIX: Use the imported Service type
}

export default function ServicesCarousel({ services }: ServicesCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: services.length > 3,
            align: 'start',
            dragFree: true,
        },
        [Autoplay({ playOnInit: true, delay: 4500, stopOnInteraction: false })]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        onSelect();
        return () => { emblaApi.off('select', onSelect); };
    }, [emblaApi]);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {services.map((service, index) => (
                        <div className="embla__slide noselect" key={index}>
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>
            </div>

            <button className="embla__button embla__button--prev" onClick={scrollPrev}>
                <FiChevronLeft size={30} />
            </button>
            <button className="embla__button embla__button--next" onClick={scrollNext}>
                <FiChevronRight size={30} />
            </button>

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