"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Gallery from "@/components/Galery";
import IconHouse from "@/components/icons/House";
import IconLaw from "@/components/icons/Law";
import IconPuzzle from "@/components/icons/Puzzle";
import IconWall from "@/components/icons/Wall";
import Contactanos from "@/components/contactanos";
import { fetchPrincipalData } from "@/services/directusService";

function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-[#21201f] flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center">
        <div className="h-16 w-64 bg-[#ac9172] opacity-30 rounded mb-4"></div>
        <div className="h-4 w-32 bg-[#ac9172] opacity-30 rounded"></div>
      </div>
    </div>
  );
}

export default function Home() {
  const [pageData, setPageData] = useState(null);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPrincipalData();
        setPageData(data);
      } catch (error) {
        console.error("Error loading page data:", error);
      }
    };
    loadData();

    const handleScroll = () => {
      const offset = window.scrollY;
      const parallax = parallaxRef.current;
      if (parallax) {
        parallax.style.transform = `translateY(${offset * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!pageData) {
    return <LoadingSkeleton />;
  }

  return (
    <main className="relative bg-[#21201f] px-4 lg:px-0">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0 bg-[#21201f]"
          style={{ height: "120%", top: "-10%" }}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BaseURL}/assets/${pageData.hero_image}?download=`}
            fill
            priority
            quality={80}
            style={{ objectFit: "cover" }}
            className="opacity-90 transition-opacity duration-300"
            alt="Banner image of a kitchen"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white z-10">
          <div className="mt-60 animate-fade-in">
            <Image 
              src="/img/logof.png" 
              alt="Magic Wood Work Logo"
              width={800}
              height={200}
              priority
              className="max-w-full h-auto"
            />
          </div>
          <h1 className="text-2xl lg:text-4xl font-bold mb-4 mt-8 animate-fade-in-up delay-100">
            {pageData.hero_title || "Magic Wood Working LLC"}
          </h1>
          <h2 className="text-lg lg:text-xl font-light max-w-2xl mx-auto animate-fade-in-up delay-200">
            {pageData.hero_subtitle || "Creating Your Dream Home with Our Expertise"}
          </h2>
        </div>
      </section>

      <div className="min-h-screen">
        <section className="grid grid-cols-1 lg:grid-cols-2 mt-24 w-full lg:w-[90%] mx-auto border border-[#ac9172]">
          <div className="relative h-[50vh] lg:h-[80vh] border-r border-[#ac9172]">
            <Image
              src={`${process.env.NEXT_PUBLIC_BaseURL}/assets/${pageData.services_image}?download=`}
              fill
              priority
              quality={75}
              style={{ objectFit: "cover" }}
              alt="Workers performing carpentry"
              className="transition-opacity duration-300"
            />
          </div>
          <div className="h-auto lg:h-[80vh] flex items-center">
            <div className="text-white p-8 lg:p-16">
              <h2 className="text-2xl lg:text-4xl font-bold mb-6">
                {pageData.services_title || "Our Services"}
              </h2>

              <p className="text-lg lg:text-xl font-light mb-8">
                {pageData.services_description || "We provide an extensive range of carpentry and woodworking services to homeowners and individuals who want to enhance the appearance of their homes. Our services include:"}
              </p>

              <ul className="space-y-3 mb-8">
                {pageData.services_list?.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#ac9172] mr-2">•</span>
                    <span className="text-lg font-light">{service}</span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center lg:justify-start">
                <Link
                  href="/services"
                  className="bg-[#ac9172] hover:bg-[#9a7f60] text-[#292928] text-center py-3 px-8 uppercase text-sm font-semibold transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full lg:w-[90%] mx-auto my-16">
          {pageData.features?.map((feature, index) => (
            <div 
              key={index} 
              className="border border-[#ac9172] flex flex-col justify-center items-center h-64 hover:bg-[#2a2928] transition-colors duration-300"
            >
              <div className="mb-6 text-[#ac9172]">
                {index === 0 && <IconHouse size={48} />}
                {index === 1 && <IconWall size={48} />}
                {index === 2 && <IconPuzzle size={48} />}
                {index === 3 && <IconLaw size={48} />}
              </div>
              <h3 className="text-xl font-light text-center px-6">
                {feature.title}
              </h3>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 mx-auto border border-[#ac9172] w-full lg:w-[90%] my-16">
          <div className="p-8 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold">{pageData.about_title || "About Us"}</h2>
            <h3 className="text-2xl lg:text-3xl my-4 font-light text-[#ac9172]">
              {pageData.about_subtitle || "Magic Wood Work"}
            </h3>
            <p className="text-lg lg:text-xl font-light">
              {pageData.about_description || "At Magic Wood Work, we are dedicated to providing top-notch carpentry and woodworking services to enhance the appearance of your home or commercial space."}
            </p>
          </div>
          <div className="relative h-64 lg:h-auto">
            <Image
              src={`${process.env.NEXT_PUBLIC_BaseURL}/assets/${pageData.about_image}?download=`}
              fill
              priority
              quality={75}
              style={{ objectFit: "cover" }}
              alt="Carpentry workers in action"
              className="transition-opacity duration-300"
            />
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="w-full lg:w-[90%] mx-auto">
            <h1 className="text-center text-3xl lg:text-5xl mb-16 font-bold">
              {pageData.projects_title || "Our Projects"}
            </h1>
            <Gallery />
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-[#1a1918]">
          <div className="w-full lg:w-[90%] mx-auto">
            <h1 className="text-center text-3xl lg:text-4xl mb-16 font-bold">
              {pageData.contact_title || "Contact us"}
            </h1>
            <Contactanos />
          </div>
        </section>
      </div>
    </main>
  );
}
