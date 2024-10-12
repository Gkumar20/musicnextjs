'use client'
import Link from "next/link"
import CourseData from "../data/music_courses.json"
import CourseCard from "./ui/CourseCard"

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image:string,
}

function FeaturedCourses() {

    const featuredCourses = CourseData.courses.filter((course: Course) => course.isFeatured)

    return (
        <div className="py-10 bg-gray-900">
            <div className="text-center">
                <h2 className="my-3 text-teal-500 font-semibold">FEATURED COURSES</h2>
                <p className="text-3xl sm:text-4xl font-semibold">Learn with your Best</p>
            </div>
            <div className="m-12  flex justify-center items-center ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center mx-3">
                            <CourseCard
                                key={course.id}
                                id={course.id}
                                title={course.title}
                                slug={course.slug}
                                description={course.description}
                                price={course.price}
                                instructor={course.instructor}
                                isFeatured={course.isFeatured}
                                image={course.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="my-12 text-center">
                <Link href={"/courses"} className="border-4 border-gray-500 px-3 py-5 text-md rounded-full  shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-100  bg-blue-900 font-semibold  hover:bg-transparent text-white  hover:text-sm transition-all duration-300 ease-in-out">
                    View All Courses
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses