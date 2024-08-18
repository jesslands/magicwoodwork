'use client';
import Image from "next/image";
import { useEffect, useRef } from 'react';

export default function Home() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
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

      <div className="h-screen">  
        <section className="grid grid-cols-2">
          <div className="">
            <Image
              src="/img/services.webp"
              layout="responsive"
              width={600}
              height={400}
              className="object-cover"
              alt="Services"
            />
          </div>
          <div>
          </div>
        </section>
      </div>
    </main>
  );
}