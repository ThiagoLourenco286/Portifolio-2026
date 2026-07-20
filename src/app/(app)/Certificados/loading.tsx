import { Skeleton } from "@/components/ui/skeleton";

export default function CertificadosLoading() {
    return (
        <div className="flex flex-col w-full h-full min-h-0">
            <Skeleton className="flex-1 w-full h-96 max-w-6xl mx-auto flex flex-col" />
            <div className="flex flex-row gap-3 mt-3 md:fixed md:bottom-5 md:right-42 md:flex md:flex-row md:mt-0">
                <Skeleton className="w-full h-10 md:w-24" />
                <Skeleton className="w-full h-10 md:w-24" />
            </div>
        </div>
    )
}