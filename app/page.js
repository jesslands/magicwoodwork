'use client';
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const parallaxRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const parallax = parallaxRef.current;
      if (parallax) {
        parallax.style.transform = `translateY(${offset * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="relative">
      <nav className={`fixed top-0 left-0 right-0 flex justify-between z-20 p-4 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}>
        <h3 className={scrolled ? "text-gray-800" : "text-[#dad9d7]"}>Magic Wood Work</h3>
        <ul className="flex space-x-4">
          <li><a href="#" className={`${scrolled ? "text-[#9c8e80]" : "text-[#9c8e80]"}`}>Home</a></li>
          <li><a href="#" className={`${scrolled ? "text-gray-800 hover:text-[#9c8e80]" : "text-white hover:text-[#9c8e80]"}`}>About</a></li>
          <li><a href="#" className={`${scrolled ? "text-gray-800 hover:text-[#9c8e80]" : "text-white hover:text-[#9c8e80]"}`}>Services</a></li>
          <li><a href="#" className={`${scrolled ? "text-gray-800 hover:text-[#9c8e80]" : "text-white hover:text-[#9c8e80]"}`}>Contact</a></li>
        </ul>
      </nav>

      <div className="relative h-screen overflow-hidden">
        <div ref={parallaxRef} className="absolute inset-0 bg-black" style={{ height: '120%', top: '-10%' }}>
          <Image
            src="/img/banner.webp"
            layout="fill"
            objectFit="cover"
            className="opacity-55"
            alt="Banner"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
          <h1 className="text-6xl font-bold mb-4">Magic Wood Work</h1>
          <h2 className="text-2xl">Creating Your Dream Home with Our Expertise</h2>
        </div>
      </div>

      {/* Añade más contenido aquí para poder hacer scroll */}
      <div className="h-screen bg-gray-100">
        <h2 className="text-4xl font-bold text-center pt-20">About Us</h2>
        {/* Más contenido... */}
      </div>
    </main>
  );
}