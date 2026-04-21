'use client'
import {useRef} from "react";
import {ChevronLeft, ChevronRight} from 'lucide-react';

export default function ProjectImagesCarousel({images = []}) {

    const scrollRef = useRef(null)
    const scroll = (direction) => {
        if (scrollRef.current) {
            const {scrollLeft, clientWidth} = scrollRef.current
            const scrollTo = direction === "left"
                ? scrollLeft - clientWidth : scrollLeft + clientWidth

            scrollRef.current.scrollTo({
                left: scrollTo,
                behavior: 'smooth'
            })
        }
    }
    return (
        <div className="relative group w-full h-full flex flex-col justify-center min-h-0 bg-black">
            <button
                type="button"
                onClick={() => scroll('left')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 outline-none border border-white/20"
                aria-label="Vorige afbeelding"
            >
                <ChevronLeft size={40}/>
            </button>

            <button
                type="button"
                onClick={() => scroll('right')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 outline-none border border-white/20"
                aria-label="Volgende afbeelding"
            >
                <ChevronRight size={40}/>
            </button>

            <div className="overflow-hidden h-full w-full flex items-center">
                <ul
                    ref={scrollRef}
                    className="flex flex-row overflow-x-auto snap-x snap-mandatory scrollbar-hide h-full w-full items-center no-scrollbar"
                    style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
                >
                    {images.map((img) => (
                        <li
                            key={img.id}
                            className="min-w-full h-full snap-center flex items-center justify-center p-0"
                        >
                            <img
                                className="w-full h-full object-contain"
                                alt={img.alt}
                                src={img.src}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}