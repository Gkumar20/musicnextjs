'use client';
import InfiniteMovingCards from "./ui/InfiniteMovingCards";
import courseData from "@/data/course_data1.json";

interface Course {
  id: number;
  title: string;
  description: string;
}

const CardGridSection: React.FC = () => {
  const courses: Course[] = courseData as Course[];
  return (
    <div className="min-h-screen bg-black relative shadow-inner shadow-gray-800 flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>

      <div
        className="relative max-w-6xl p-4 w-full"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
        }}
      >
        <h1 className="my-8 sm:my-12 text-2xl sm:text-4xl font-bold w-full text-center text-white">
          Hear Our Harmony: Voices of Success
        </h1>
        {/* Moving cards */}
        <InfiniteMovingCards cards={courses} />
      </div>
    </div>
  );
};

export default CardGridSection;
