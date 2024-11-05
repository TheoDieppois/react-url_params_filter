const ProductListSkeleton = () => {
  return (
    <div className="flex flex-wrap gap-8">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="bg-grayscale-700 flex w-[250px] flex-col gap-4 rounded-lg p-4"
          >
            <div className="flex justify-between">
              <div className="space-y-2">
                <div className="bg-grayscale-400 h-[26px] w-[100px] animate-pulse rounded-lg" />
                <div className="bg-grayscale-400 h-[24px] w-[68px] animate-pulse rounded-lg" />
              </div>
              <div className="bg-grayscale-400 h-[24px] w-[68px] animate-pulse rounded-lg" />
            </div>

            <div className="bg-grayscale-400 aspect-square w-full animate-pulse rounded-md" />
          </div>
        ))}
    </div>
  );
};

export { ProductListSkeleton };
