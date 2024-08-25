import Image from "next/image";
import ContactSection from '/components/contactanos';

export default function About() {
    return (
        <main className="min-h-screen">
            <section className=" w-full md:w-[90%] lg:mt-24 mx-auto container px-4 py-16">
                <div className="">
                    <div className="md:flex">
                        <div className="md:w-1/2 p-8">
                            <h1 className="text-5xl font-bold mb-4">About Us</h1>
                            <h2 className="text-3xl text-[#9a8a78] mb-6">Magic Wood Work</h2>
                            <p className="text-white mb-6 leading-relaxed">
                                At Magic Wood Work, we are dedicated to providing top-notch carpentry and woodworking services to enhance the appearance of your home or commercial space. With our many years of experience, we take pride in our ability to turn your dreams into a reality through our exceptional craftsmanship.
                            </p>
                            <button className="bg-[#9a8a78] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition"> 
                               <a href="/projects" className="text-white">Projects</a>
                            </button>
                        </div>
                        <div className="md:w-1/2 p-8 ">
                            <div className="relative h-full">
                                <Image
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