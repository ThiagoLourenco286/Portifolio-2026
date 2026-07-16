/** biome-ignore-all lint/performance/noImgElement: <Imagens> */
'use client'

import { Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface ImageLigthBoxProps {
    src: string,
    alt: string,
    layoutId: string
    className?: string
}

export default function ImageLightbox({ src, alt, layoutId, className }: ImageLigthBoxProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {!isOpen && (
                <button type="button" onClick={() => setIsOpen(true)} className='border-none p-0 cursor-pointer relative'  >
                    <Eye className='text-tech-card/50 absolute right-3 top-2 h-5 w-5' />
                    <motion.img
                        layoutId={layoutId}
                        src={src}
                        alt={alt}
                        className={className}
                    />
                </button>
            )}
            {isOpen && (
                <button
                    type='button'
                    tabIndex={0}
                    onClick={() => setIsOpen(false)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') setIsOpen(false);
                    }}
                    className='fixed inset-0 z-9999 flex cursor-zoom-out items-center justify-center bg-black/70 backdrop-blur-[6px]'
                >
                    <motion.img
                        layoutId={layoutId}
                        src={src}
                        alt={alt}
                        className='w-[80vw] max-w-200 rounded-[20px] shadow-2xl'
                    />
                </button>
            )}
        </>
    );
}