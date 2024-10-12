'use client';
import React from "react";
import courseData from '@/data/course_data.json'; 

interface Course {
  id: number;
  title: string;
  description: string;
}

const SimpleContentDisplay: React.FC = () => {
  const content: Course[] = courseData as Course[];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-7xl space-y-12">
        {content.map((item) => (
          <div
            key={item.id} // Use item.id instead of index for better React practices
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-white transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-white mb-2">{item.title}</h2>
            <p className="text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleContentDisplay;
