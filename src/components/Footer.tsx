// src/components/Footer.tsx

"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Install react-icons if not already installed

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-lg font-bold">MusicNext</h2>
                    <p className="text-sm">Your go-to place for music courses</p>
                </div>
                <nav className="flex flex-col md:flex-row">
                    <a href="/" className="mx-2 hover:text-blue-400">Home</a>
                    <a href="/about" className="mx-2 hover:text-blue-400">About</a>
                    <a href="/courses" className="mx-2 hover:text-blue-400">Courses</a>
                    <a href="/contact" className="mx-2 hover:text-blue-400">Contact</a>
                </nav>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-blue-400">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="hover:text-blue-400">
                        <FaTwitter />
                    </a>
                    <a href="#" className="hover:text-blue-400">
                        <FaInstagram />
                    </a>
                    <a href="#" className="hover:text-blue-400">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
            <div className="text-center mt-4 border-t border-gray-700 pt-4">
                <p className="text-sm">© {new Date().getFullYear()} MusicNext. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
