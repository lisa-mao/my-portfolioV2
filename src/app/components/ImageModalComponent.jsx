'use client'
import React, { useEffect } from "react";
import { X } from 'lucide-react';
import ProjectImagesCarousel from "./ProjectImagesCarousel.jsx";

export default function ImageModal({ isOpen, onClose, images }) {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="absolute inset-0 z-[100] md:top-0 top-23 flex items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in duration-300 p-4 md:p-10 md:max-w-full md:max-h-full max-w-full max-h-1/2"
            onClick={onClose}>
            <div
                className="relative w-full max-w-6xl h-full max-h-[40vh] md:max-h-[85vh] flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}>

                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 md:-top-12 md:right-0 z-[110] text-white/70 hover:text-white transition-colors bg-black/20 md:bg-transparent p-2 md:p-0 rounded-full"
                >
                    <X size={32} className="md:w-10 md:h-10" />
                </button>

                <div className="md:w-full md:h-full w-full h-full  flex items-center justify-center overflow-hidden">
                    <ProjectImagesCarousel images={images} />
                </div>
            </div>
        </div>
    );
}