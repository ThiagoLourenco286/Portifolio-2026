import { Skeleton } from "@/components/ui/skeleton";

export default function CompetenciasLoading() {
    return (
        <section className="flex flex-col gap-8 md:gap-4">
            <div className="flex flex-col gap-8 md:flex md:flex-row md:gap-5">
                <Skeleton className="w-full h-72 md:gap-4 md:w-220" />
                <Skeleton className="w-full h-40 md:w-104 md:h-83" />
            </div>
            <Skeleton className="w-full h-64 md:w-full md:h-105" />
        </section>
    )
}