import Image from "next/image";
import ContactSection from '/components/contactanos';

export const metadata = {
    title: 'About Our Carpentry Expertise',
    description: 'Learn about Magic Wood Work\'s commitment to quality carpentry, expert craftsmanship, and dedication to transforming spaces through woodworking.',
    openGraph: {
      title: 'About Magic Wood Work | Expert Carpentry Services',
      description: 'Discover our commitment to quality carpentry and expert craftsmanship in New Jersey.',
    }
  };

export default function About() {
    return (
        <main className="min-h-screen  ">
            <section className=" w-full md:w-[90%] lg:mt-24 mx-auto container px-4 py-16">
                <div className="">
                    <div className="md:flex">
                        <div className="md:w-1/2 p-8 border border-1 border-[#ac9172]">
                            <h1 className="text-5xl font-bold mb-4">About Us</h1>
                            <h2 className="text-3xl text-[#ac9172] mb-6">Magic Wood Work</h2>
                            <p className="text-white mb-6 leading-relaxed">
                                At Magic Wood Work, we are dedicated to providing top-notch carpentry and woodworking services to enhance the appearance of your home or commercial space. With our many years of experience, we take pride in our ability to turn your dreams into a reality through our exceptional craftsmanship.
                            </p>
                           <div className="flex justify-center lg:justify-start">
                           <button className="bg-[#ac9172] text-white px-12 py-2   hover:bg-opacity-90 transition"> 
                               <a href="/projects" className="text-white">Projects</a>
                            </button>
                           </div>
                        </div>
                        <div className="md:w-1/2 p-8 border border-1 border-[#ac9172]">
                            <div className="relative h-[200px] lg:h-full">
                                <img
                                    src="/img/logo.png"
                                    alt="Magic Wood Work Logo"
                                    layout="fill"
                                    objectFit="contain"
                                    className="p-4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactSection />
        </main>
    );
}