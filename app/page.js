"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Gallery from "@/components/Galery";
//iconos
import IconHouse from "@/components/icons/House";
import IconLaw from "@/components/icons/Law";
import IconPuzzle from "@/components/icons/Puzzle";
import IconWall from "@/components/icons/Wall";
import Contactanos from "@/components/contactanos";

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="relative px-4 lg:px-0">
      <div className="relative h-screen overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0 bg-black"
          style={{ height: "120%", top: "-10%" }}
        >
          <Image
            src="/imagenes/cocinas/home2.jpg"
            layout="fill"
            objectFit="cover"
            className="opacity-55"
            alt="Banner image of a kitchen"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white z-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">Magic Wood Work</h1>
          <h2 className="text-xl lg:text-2xl">
            Creating Your Dream Home with Our Expertise
          </h2>
        </div>
      </div>

      <div className="h-screen">
        <section className="grid lg:grid-cols-2 mt-12 lg:w-[90%] mx-auto border border-1 border-[#9a8a78]">
          <div className="border border-r-1 border-[#9a8a78]">
            <Image
              src="/img/workers1.webp"
              layout="responsive"
              width={600}
              height={800}
              className="object-cover w-full h-full h-min-screen"
              alt="Workers performing carpentry"
            />
          </div>
          <div className="">
            <div className="text-white p-6 lg:p-32 lg:pt-24">
              <h2 className="text-xl lg:text-3xl font-bold mb-6 lg:mb-14">
                Our Services
              </h2>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <p className="font-thin lg:font-normal">
                    We provide an extensive range of carpentry and woodworking
                    services to homeowners and individuals who want to enhance
                    the appearance of their homes. Our services include:
                  </p>
                </li>
              </ul>

              <p className="lg:mb-6 font-thin lg:font-normal">
                <span className="mr-2 lg:hidden">•</span>Custom Millwork
              </p>

              <p className="lg:mb-6 font-thin lg:font-normal">
                <span className="mr-2 lg:hidden">•</span>Custom High Quality
                Paint
              </p>
              <p className="lg:mb-12 mb-12 font-thin lg:font-normal">
                <span className="mr-2 lg:hidden">•</span>Installation
              </p>

              <div className="flex justify-center lg:flex-none lg:justify-normal">
                <Link
                  href="/services"
                  className="bg-[#9a8a78] text-[#292928] text-center py-3 px-8 font-light uppercase text-sm font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:w-[90%] mx-auto">
          <div className="border border-r-1 border-[#9a8a78] flex flex-col justify-center items-center h-80">
            <div className="flex flex-col items-center xy-12">
              <IconHouse />
              <span className="font-thin lg:font-light text-center mt-4 mx-12 lg:mx-0">
                Why Choose Magic Wood Work?
              </span>
            </div>
          </div>
          <div className="border border-r-1 border-[#9a8a78] flex flex-col justify-center items-center h-80">
            <IconWall />
            <span className="font-thin lg:font-light text-center mt-4 mx-12 lg:mx-0">
              Expert Craftsmanship
            </span>
          </div>
          <div className="border border-r-1 border-[#9a8a78] flex flex-col justify-center items-center h-80">
            <IconPuzzle />
            <span className="font-thin lg:font-light text-center mt-4 mx-12 lg:mx-0">
              Attention to Detail
            </span>
          </div>
          <div className="border border-r-1 border-[#9a8a78] flex flex-col justify-center items-center h-80">
            <IconLaw />
            <span className="font-thin lg:font-light text-center mt-4 mx-12 lg:mx-0">
              Customer Satisfaction
            </span>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 mx-auto border border-r-1 border-[#9a8a78] lg:w-[90%]">
          <div className="border border-r-1 border-[#9a8a78] p-6 py-12 lg:p-40">
            <h2 className="font-bold text-4xl">About Us</h2>
            <h3 className="text-3xl mt-12 font-light text-[#9a8b79]">Magic Wood Work</h3>
            <p className="text-xl font-light text-justify mt-12">
              At Magic Wood Work, we are dedicated to providing top-notch carpentry and woodworking services to enhance the appearance of your home or commercial space. With our many years of experience, we take pride in our ability to turn your dreams into a reality through our exceptional craftsmanship. We value building trust with our clients and always deliver the best quality work. Let us help make your space a place you love to be in.
            </p>
          </div>
          <div className="border border-r-1 border-[#9a8a78] h-[300px] lg:h-[800px] relative">
            <Image
              src="/img/workers1.webp"
              layout="fill"
              objectFit="cover"
              className="absolute object-cover inset-0 w-full h-full"
              alt="Carpentry workers in action"
            />
          </div>
        </section>

        <h1 className="text-center mt-32 text-2xl lg:text-5xl mb-12">
          Our Projects
        </h1>

        <Gallery />

        <h1 className="text-center mt-32 text-2xl lg:text-3xl mb-12">
          Contact us
        </h1>

        <Contactanos className="mt-12" />
      </div>
      <div className="mb-80 py-96"></div>
      <div className="mb-80 py-96"></div>
      <div className="mb-80 py-96"></div>
      <div className="py-72 lg:py-0"></div>
    </main>
  );
}