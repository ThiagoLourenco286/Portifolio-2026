/** biome-ignore-all lint/performance/noImgElement: <Images> */
import BorderGlow from './animations/BorderGlow';

interface IconsProps {
    src: string
    alt: string
    description?: string
}

export function Icons({ src, alt, description }: IconsProps) {
    return (
        <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#141416"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={['#c084fc', '#f472b6', '#38bdf8']}
            className="h-24 w-24 flex items-center justify-center text-center rounded-2xl"
        >
            <div className='flex flex-col justify-center items-center gap-0.5'>
                <img src={src} className="h-14 w-14" alt={alt} />
                <span className='text-xs text-tech-secundary'>{description}</span>
            </div>
        </BorderGlow>
    )
}