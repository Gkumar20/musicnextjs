'use client'
import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  price,
  slug,
  instructor,
  image
}) => {
  return (
    <div className="relative group bg-black rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Image section at the top of the card */}
      <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>

      {/* Content section */}
      <div className="p-6 relative z-10 bg-black rounded-b-xl">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <p className="text-sm text-gray-500 mb-2">
          Instructor: <span className="font-semibold text-gray-300">{instructor}</span>
        </p>

        {/* Flex container for price and button */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-semibold text-green-400">${price.toFixed(2)}</p>
          <Link
            href={slug}
            className="border-2 border-gray-500 px-4 py-2 text-md rounded-md shadow-md  bg-gradient-to-r from-black to-blue-700 font-semibold hover:text-gray-300 text-white  hover:bg-gradient-to-r hover:from-blue-700 hover:to-black transition-all duration-300 ease-in-out"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
