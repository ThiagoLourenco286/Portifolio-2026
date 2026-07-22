/** biome-ignore-all lint/performance/noImgElement: <Imagens> */

import Link from "next/link"
import ImageLightbox from "./image-light-box"

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
        <div className="w-full h-fit  border border-tech-border bg-tech-card rounded-lg p-5 space-y-3 lg:h-147.5 lg:w-165">
            <div className="w-full lg:h-80 ">
                <ImageLightbox src={src} alt={alt} layoutId={alt} className="rounded-2xl" />
                {/* <img src={src} alt={alt} className="w-full rounded-md object-contain md:object-fill" /> */}
            </div>
            <div className="flex flex-col gap-2 md:flex md:flex-row md:justify-between md:items-center lg:pt-4">
                <span className="font-mono text-[20px]">{title}</span>
                <div className="flex gap-2">
                    {techs?.map((tech) => {
                        return (
                            <img key={tech.alt} src={tech.src} alt={tech.alt} className="w-5 h-5 md:w-7 md:h-7" />
                        )
                    })}
                </div>
            </div>
            <div className="py-3">
                <p className="text-xs text-tech-secundary h-fit md:text-sm">
                    {descricao}
                </p>
            </div>

            <div className="flex gap-3 justify-end pt-5">
                <button
                    type="button"
                    className=" bg-cyan-900 p-2 hover:bg-cyan-950 rounded-lg "
                >
                    <Link
                        href={
                            href
                        }
                        target="_blank"
                        className="flex flex-row items-center text-xs md:text-md"
                    >
                        Ver codigo
                    </Link>
                </button>
            </div>
        </div>
    )
}