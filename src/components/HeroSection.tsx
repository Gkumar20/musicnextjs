'use client'
import Link from "next/link"
import Torchlight from "./ui/Torchlight"




function HeroSection() {
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
           
            <Torchlight />
            <div className="p-4 relative z-10 w-full mx-auto text—center">
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center" >Master of the art of music</h1>
                <p className="text-center mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Dive into our comprehensive music courses and transform your musical journey today. Whether you`re a beginner or looking to refine your skills, join us to unlock your true potential.</p>
            </div>
            <div className="my-4 h-10">
                <Link
                    href="/courses"
                    className="relative inline-block p-1 font-medium text-foreground bg-transparent border-2 border-transparent rounded-full overflow-hidden transition-colors duration-300 ease-out hover:bg-foreground "
                >
                    <span
                        className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
                  border-2 border-transparent animate-[spin_3s_linear_infinite] rounded-full"
                    ></span>
                    <span className="relative block px-10 py-5 hover:px-9 hover:py-4 bg-background rounded-full transition-all duration-300 ease-in-out">Explore Courses</span>
                </Link>
            </div>

        </div>
    )
}

export default HeroSection