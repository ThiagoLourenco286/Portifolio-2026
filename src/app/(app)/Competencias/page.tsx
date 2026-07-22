/** biome-ignore-all lint/performance/noImgElement: <Imagens> */
import type { Metadata } from "next";
import { Circle } from "@/components/circle"
import { Icons } from "@/components/icons";

export const metadata: Metadata = {
    title: 'Competências',
};

export default function CompetenciaPage() {
    return (
        <section className="flex flex-col gap-8 md:gap-4">
            <div className="flex flex-col gap-8 md:flex md:flex-row md:gap-5">
                <div className="flex flex-col bg-tech-card p-5 border border-tech-border rounded-2xl gap-6 md:gap-4 md:w-220">
                    <h2 className="text-3xl font-mono">Competências em Destaque</h2>
                    <div className="grid grid-cols-2 items-center justify-center gap-5 md:flex">
                        <Circle progress={80} svg="/assets/logos/react.svg" alt="react" />
                        <Circle progress={70} svg="/assets/logos/nextdotjs.svg" alt="nextjs" />
                        <Circle progress={80} svg="/assets/logos/tailwind-css.svg" alt="tailwind" />
                        <Circle progress={80} svg="/assets/logos/javascript.svg" alt="javascript" />
                        <Circle progress={80} svg="/assets/logos/nodedotjs.svg" alt="nodejs" />
                        <Circle progress={70} svg="/assets/logos/postgresql.svg" alt="postgres" />
                    </div>

                    <span className="text-tech-secundary text-sm">
                        Estas são as tecnologias nas quais tenho maior domínio. No desenvolvimento front-end, utilizo principalmente o Next.js com React, pois gosto da produtividade e da performance que esse framework oferece.
                        <br />
                        No back-end, trabalho com Node.js, utilizando principalmente os frameworks Fastify e Express para a construção de APIs e aplicações escaláveis.
                        <br />
                        Já na camada de banco de dados, minha principal escolha é o PostgreSQL, que utilizo na maior parte dos meus projetos.
                    </span>
                </div>


                <div className="flex flex-col items-center gap-5 w-full h-fit py-5 bg-tech-card border border-tech-border rounded-2xl md:w-104 md:h-86 md:gap-15">
                    <h2 className="font-mono font-extrabold text-2xl">Idiomas</h2>
                    <div className="flex flex-col gap-5 md:flex md:flex-row ">
                        <Circle progress={100} svg="/assets/logos/brasil.png" alt="brasil" description="Português - Fluente / Nativo" />
                        <Circle progress={40} svg="/assets/logos/eua.png" alt="eua" description="Inglês - Basico / Intermediario" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center bg-tech-card border border-tech-border rounded-2xl px-2 md:flex md:flex-row md:w-full md:h-93 md:py-2">
                <div className=" flex flex-col py-4 md:ps-10 gap-3 md:w-1/2 ">
                    <h3 className="font-mono font-extrabold text-[18px]">Hard Skils</h3>
                    <div className="grid grid-cols-2 gap-3 md:grid md:grid-cols-4">
                        <Icons src={'/assets/logos/github-dark.svg'} alt="github" />
                        <Icons src={'/assets/logos/typescript.svg'} alt="typescript" />
                        <Icons src={'/assets/logos/figma.svg'} alt="figma" />
                        <Icons src={'assets/logos/mongodb.svg'} alt="mongodb" />
                        <Icons src={'/assets/logos/css.svg'} alt="css" />
                        <Icons src={'/assets/logos/html5.svg'} alt="html5" />
                        <Icons src={'/assets/logos/powerbi.svg'} alt="powerbi" />
                        <Icons src={'/assets/logos/excel.svg'} alt="excel" />
                    </div>
                </div>

                <div className="w-full h-0.5 md:w-0.5 md:h-full bg-tech-border" />

                <div className="flex flex-col py-4 gap-3 md:w-1/2 md:ps-10">
                    <h3 className="font-mono font-extrabold text-[18px]">Soft Skils</h3>
                    <div className="grid grid-cols-2 gap-3 md:grid md:grid-cols-4">
                        <Icons src={'/assets/logos/trabalho-equipe.png'} alt="trabalho em equipe" description="Trabalho em Equipe" />
                        <Icons src={'/assets/logos/comunicacao.png'} alt="comunição" description="Comunição" />
                        <Icons src={'/assets/logos/pensamento-criativo.png'} alt="pensamento criativo" description="Pensamento Criativo" />
                        <Icons src={'assets/logos/proatividade.png'} alt="proatividade" description="Proatividade" />
                        <Icons src={'/assets/logos/resolução-problema.png'} alt="resolução de problemas" description="Resolução de Problemas" />
                        <Icons src={'/assets/logos/organizacao.png'} alt="organização" description="Organização" />
                        <Icons src={'/assets/logos/gestao-de-tempo.png'} alt="gestão de Tempo" description="Gestão de Tempo" />
                    </div>
                </div>
            </div>


        </section >
    )
}