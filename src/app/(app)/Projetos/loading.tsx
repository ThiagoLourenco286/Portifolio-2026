/** biome-ignore-all lint/suspicious/noArrayIndexKey: <lista estática de skeletons> */
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjetosLoading() {
    return (
        <div className="flex flex-col">
            <div className="grid gap-5 md:grid md:grid-cols-2">
                {Array.from({ length: 11 }).map((_, index) => (
                    <Skeleton key={index} className="w-full h-72 md:h-80" />
                ))}
            </div>
            <Skeleton className="w-48 h-5 mx-auto mt-12" />
        </div>
    )
}