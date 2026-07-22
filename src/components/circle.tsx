/** biome-ignore-all lint/performance/noImgElement: <Image> */
interface CircleProps {
    progress: number
    svg: string
    alt: string
    description?: string
}

export function Circle({ progress, svg, alt, description }: CircleProps) {
    return (
        <div className="flex flex-col gap-3 items-center">
            <div
                className="w-30 h-30 rounded-full p-1 "
                style={{
                    background: `conic-gradient(
                 #00c2ff80 0% ${progress}%,
                #3f3f46 ${progress}% 100%
        )`,
                }}
            >
                <div className="w-full h-full rounded-full bg-tech-card flex items-center justify-center">
                    <img src={svg} alt={alt} className="h-16 w-16" />
                </div>

            </div>
            <span className="text-xs text-tech-secundary">{description}</span>
        </div>
    );
}
