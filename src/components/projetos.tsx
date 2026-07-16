/** biome-ignore-all lint/performance/noImgElement: <Imagens> */

import Link from "next/link"

interface TechIcon {
    src: string
    alt: string
}

interface ProjetosProps {
    src: string
    alt: string
    title: string
    descricao: string
    href: string
    techs: TechIcon[]
}

export function Projetos({ src, alt, title, descricao, href, techs }: ProjetosProps) {
    return (
        <div className="w-full h-140 border border-tech-border bg-tech-card rounded-lg p-5 space-y-6 lg:h-147.5 lg:w-165">
            <div className="w-full h-72 lg:h-80 ">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full
                 rounded-md"
                />
            </div>
            <div className="flex justify-between lg:pt-4">
                <span className="font-mono text-[20px]">{title}</span>
                <div className="flex gap-2">
                    {techs?.map((tech) => {
                        return (
                            <img key={tech.alt} src={tech.src} alt={tech.alt} className="w-7 h-6" />
                        )
                    })}
                </div>
            </div>
            <div>
                <p className="text-sm text-tech-secundary h-20">
                    {descricao}
                </p>
            </div>

            <div className="flex gap-3 justify-end">
                <button
                    type="button"
                    className=" bg-cyan-900 p-2 hover:bg-cyan-950 rounded-lg "
                >
                    <Link
                        href={
                            href
                        }
                        target="_blank"
                        className="flex flex-row items-center gap-2"
                    >
                        Ver codigo
                    </Link>
                </button>
            </div>
        </div>
    )
}