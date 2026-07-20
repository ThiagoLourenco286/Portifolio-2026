import { Skeleton } from "@/components/ui/skeleton";

export default function HomeLoading() {
    return (
        <div className="flex flex-col gap-8 md:flex md:flex-row">
            <div className="flex flex-col gap-8">
                <Skeleton className="w-full h-64 md:w-242.5 md:h-81" />

                <div className="flex flex-col gap-8 md:flex md:flex-row">
                    <Skeleton className="w-full h-64 md:w-117.5 md:h-103" />
                    <Skeleton className="w-full h-64 md:w-117.5 md:h-103" />
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <Skeleton className="w-full h-80 md:w-76 md:h-130" />
                <Skeleton className="w-full h-40 md:w-76 md:h-54" />
            </div>
        </div>
    )
}