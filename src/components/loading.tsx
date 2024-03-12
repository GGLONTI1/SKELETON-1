import { SkeletonCard } from "./SkeletonCard";

const Loading = () => {
    return (
        
        <div className=" w-full grid grid-cols-3 gap-8">
            {"abcdefghi".split('').map(i => (
                <SkeletonCard key={i} />
            ))}
        </div>
        
    )
}

export default Loading;