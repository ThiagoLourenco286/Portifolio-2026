/** biome-ignore-all lint/performance/noImgElement: <Imagens> */
'use client'

import { motion } from "motion/react";
import { useState } from "react";
import { certificadosData } from "./certificados-data";

export function Certificados() {
    const [activeIndex, setActiveIndex] = useState(0);

    if (certificadosData.length === 0) {
        return (
            <section className="flex flex-col items-center justify-center w-full h-full text-tech-secondary">
                Nenhum certificado cadastrado ainda.
            </section>
        );
    }

    const progressPercent =
        certificadosData.length > 1
            ? (activeIndex / (certificadosData.length - 1)) * 100
            : 100;

    const nextStep = () => {
        if (activeIndex < certificadosData.length - 1) {
            setActiveIndex((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        if (activeIndex > 0) {
            setActiveIndex((prev) => prev - 1);
        }
    };

    return (
        <section className="flex flex-col w-full h-full min-h-0 px-3 sm:px-6">
            <div className="relative">
                <div className="overflow-x-auto md:overflow-x-visible scrollbar-hide">
                    <div className="relative w-max md:w-full md:max-w-8xl md:mx-auto mt-2 mb-14 px-4 md:px-0">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-zinc-800 -translate-y-1/2 rounded-full" />

                        <div
                            className="absolute top-1/2 left-0 h-1 bg-indigo-600 -translate-y-1/2 transition-all duration-500 rounded-full shadow-[0_0_10px_rgba(79,70,229,0.5)]"
                            style={{
                                width: `${progressPercent}%`,
                            }}
                        />

                        <div className="relative flex md:justify-between items-center gap-10 md:gap-2 w-max md:w-full z-10">
                            {certificadosData.map((cert, index) => {
                                const isCurrent = index === activeIndex;
                                const isCompleted = index < activeIndex;

                                return (
                                    <button
                                        type="button"
                                        key={cert.id}
                                        onClick={() => setActiveIndex(index)}
                                        aria-label={`Ver certificado ${index + 1} de ${certificadosData.length}: ${cert.titulo}`}
                                        aria-current={isCurrent ? "step" : undefined}
                                        className="flex flex-col items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-tech-bg rounded-full shrink-0 w-24 md:flex-1 md:w-auto"
                                    >
                                        <div
                                            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm sm:text-base font-bold border-4 transition-all duration-300
                                ${isCurrent
                                                    ? "bg-indigo-600 border-indigo-400 scale-110 md:scale-125 text-white shadow-[0_0_20px_rgba(79,70,229,0.6)]"
                                                    : isCompleted
                                                        ? "bg-indigo-900 border-indigo-600 text-indigo-200 hover:bg-indigo-800"
                                                        : "bg-zinc-900 border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:text-zinc-300"
                                                }`}
                                        >
                                            {index + 1}
                                        </div>

                                        <span
                                            className={`absolute -bottom-8 block text-xs sm:text-sm font-medium whitespace-nowrap transition-colors
                                ${isCurrent
                                                    ? "text-indigo-400"
                                                    : "text-zinc-500 group-hover:text-zinc-400"
                                                }`}
                                        >
                                            {cert.data}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-tech-bg to-transparent md:hidden" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-tech-bg to-transparent md:hidden" />
            </div>

            <div className="flex-1 w-full max-w-6xl mx-auto flex flex-col bg-tech-card border border-tech-border rounded-2xl py-5 px-3 sm:px-5 md:py-3 overflow-hidden backdrop-blur-sm">
                <div className="text-center mb-4">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                        {certificadosData[activeIndex].titulo}
                    </h2>
                </div>

                <div className="flex-1 w-full flex items-center justify-center overflow-hidden">
                    <motion.img
                        key={activeIndex}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        src={certificadosData[activeIndex].imagem}
                        alt={`Certificado: ${certificadosData[activeIndex].titulo}`}
                        className="max-w-full max-h-[50vh] sm:max-h-[60vh] lg:max-h-[64vh] object-contain rounded-xl shadow-2xl border border-zinc-700/30"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2 w-full max-w-5xl mx-auto mt-6 pb-2 justify-between items-center md:flex md:flex-row md:sticky md:bottom-5 md:bg-tech-bg/80 md:backdrop-blur-sm md:rounded-xl md:px-4 md:py-3 md:border md:border-tech-border">
                <button
                    type="button"
                    onClick={prevStep}
                    disabled={activeIndex === 0}
                    className="w-full md:w-fit px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer border border-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                    ← Anterior
                </button>

                <button
                    type="button"
                    onClick={nextStep}
                    disabled={activeIndex === certificadosData.length - 1}
                    className="w-full md:w-fit px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-lg shadow-indigo-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                >
                    Próximo →
                </button>
            </div>
        </section>
    );
}