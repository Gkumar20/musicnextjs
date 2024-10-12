// CardList.tsx
"use client";

import React from "react";
import Card from "./ui/Card3DEffect"; // Adjust the import path as necessary
import courseData from "@/data/music_courses.json"; // Adjust the path to your JSON file


const CardList = () => {
    return (
        <>
            <h1 className="text-3xl sm:text-4xl font-semibold text-center mt-10">All Courses {courseData.courses.length} </h1>
            <div className="flex flex-wrap justify-center -mt-10">
                {courseData.courses.map((course) => (
                    <div key={course.id} className="m-4">
                        <Card course={course} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default CardList;
