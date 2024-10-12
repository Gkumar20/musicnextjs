"use client";

import React, { createContext, useState, useContext, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MouseEnterContext = createContext<
    [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image: string;
}

export const useMouseEnter = () => {
    const context = useContext(MouseEnterContext);
    if (context === undefined) {
        throw new Error("useMouseEnter must be used within a MouseEnterProvider");
    }
    return context;
};

export const CardContainer = ({
    children,
    className,
    containerClassName,
}: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMouseEntered, setIsMouseEntered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;
        containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };

    const handleMouseEnter = () => {
        setIsMouseEntered(true);
    };

    const handleMouseLeave = () => {
        setIsMouseEntered(false);
        if (containerRef.current) {
            containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
        }
    };

    return (
        <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
            <div
                className={`${containerClassName} py-20 flex items-center justify-center`}
                style={{ perspective: "1000px" }}
            >
                <div
                    ref={containerRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={`${className} flex items-center justify-center relative transition-all duration-200 ease-linear`}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {children}
                </div>
            </div>
        </MouseEnterContext.Provider>
    );
};

export const CardBody = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={`${className} h-[27rem] w-96 flex flex-col items-center p-6 [transform-style:preserve-3d]`}>
            {children}
        </div>
    );
};

export const CardItem = ({
    as: Tag = "div",
    children,
    className,
    translateY = 0,
    translateZ = 0,
    ...rest
}: {
    as?: React.ElementType;
    children: React.ReactNode;
    className?: string;
    translateY?: number | string;
    translateZ?: number | string;
} & React.HTMLAttributes<HTMLDivElement>) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isMouseEntered] = useMouseEnter();

    const handleAnimations = useCallback(() => {
        if (!ref.current) return;
        if (isMouseEntered) {
            ref.current.style.transform = `translateY(${translateY}px) translateZ(${translateZ}px)`;
        } else {
            ref.current.style.transform = `translateY(0px) translateZ(0px)`;
        }
    }, [isMouseEntered, translateY, translateZ]);

    useEffect(() => {
        handleAnimations();
    }, [handleAnimations]);

    return (
        <Tag
            ref={ref}
            className={`w-fit transition duration-200 ease-linear ${className}`}
            {...rest}
        >
            {children}
        </Tag>
    );
};

// Card component that takes course data as props
const Card = ({ course }: { course: Course }) => {
    return (
        <CardContainer containerClassName="bg-transparent h-auto mb-12 overflow-hidden">
            <CardBody className="rounded-lg shadow-xl bg-gradient-to-br from-blue-600 to-black via-gray-800">
                <CardItem translateY={10} translateZ={60}>
                    <motion.img
                        src={course.image}
                        alt={course.title}
                        className="h-40 w-80 object-cover rounded-lg" // Fixed size for images
                    />
                </CardItem>
                <div className="pt-4">
                    <h3 className="text-white text-lg font-bold">{course.title}</h3>
                    <p className="text-gray-300">{course.description}</p>
                    <p className="text-gray-400">Instructor: {course.instructor}</p>
                    <div className="flex items-center justify-between mt-4">
                        <p className="text-lg font-semibold text-green-400">${course.price.toFixed(2)}</p>
                        <Link
                            href={course.slug}
                            className="border-2 border-gray-500 px-4 py-2 text-md rounded-md shadow-md  bg-gradient-to-r from-black to-blue-700 font-semibold hover:text-gray-300 text-white  hover:bg-gradient-to-r hover:from-blue-700 hover:to-black transition-all duration-300 ease-in-out"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </CardBody>
        </CardContainer>
    );
};

export default Card;
