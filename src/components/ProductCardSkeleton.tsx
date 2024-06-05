
export const ProductCardSkeleton = () => {
    return (
        <div className="animate-pulse sm:w-56 w-full group/card shadow-lg border hover:shadow-2xl duration-300 transition-all rounded-2xl space-y-4 h-full">
            <div className="aspect-square m-3 rounded-2xl bg-gray-200"></div>
            <div className="px-4 space-y-3 pb-6 w-56">
                <div className="space-y-1">
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-10 bg-gray-200 rounded w-16"></div>
                </div>
            </div>
        </div>
    );
}