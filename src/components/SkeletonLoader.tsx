// Skeleton for HeroSection
const HeroSectionSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-[500px] bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="h-12 w-3/4 mx-auto bg-gray-300 mb-4 rounded"></div>
        <div className="h-8 w-1/2 mx-auto bg-gray-300 mb-4 rounded"></div>
        <div className="h-12 w-1/3 mx-auto bg-gray-300 rounded"></div>
      </div>
    </div>
  </div>
);

// Skeleton for Featured Section
const FeaturedSectionSkeleton = () => (
  <div className="animate-pulse p-8">
    <div className="h-10 w-1/3 bg-gray-300 mb-6 mx-auto rounded"></div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[1, 2, 3].map((item) => (
        <div key={item} className="bg-gray-100 rounded-lg p-4">
          <div className="h-48 bg-gray-300 mb-4 rounded"></div>
          <div className="h-6 w-3/4 bg-gray-300 mb-2 rounded"></div>
          <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  </div>
);

// Skeleton for How It Works Section
const HowItWorksSectionSkeleton = () => (
  <div className="animate-pulse p-8">
    <div className="h-10 w-1/3 bg-gray-300 mb-6 mx-auto rounded"></div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[1, 2, 3].map((item) => (
        <div key={item} className="text-center">
          <div className="h-24 w-24 mx-auto bg-gray-300 mb-4 rounded-full"></div>
          <div className="h-6 w-3/4 mx-auto bg-gray-300 mb-2 rounded"></div>
          <div className="h-4 w-1/2 mx-auto bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  </div>
);

// Navbar Skeleton
const NavbarSkeleton = () => (
  <div className="animate-pulse flex items-center justify-between p-4 bg-gray-100">
    <div className="h-8 w-24 bg-gray-300 rounded"></div>
    <div className="flex space-x-4">
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="h-6 w-16 bg-gray-300 rounded"></div>
      ))}
    </div>
  </div>
);

// Main Skeleton Loader
const SkeletonLoader = () => (
  <div className="bg-white min-h-screen">
    <NavbarSkeleton />
    <HeroSectionSkeleton />
    <FeaturedSectionSkeleton />
    <HowItWorksSectionSkeleton />
  </div>
);

export default SkeletonLoader;
