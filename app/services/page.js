import Image from "next/image";

export default function Services() {
    return (
        <main className="px-4 md:px-0 pt-8">
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 w-full md:w-[90%] mx-auto">
                <div className="bg-[#9a8a78] w-full lg:col-span-1">
                    <h2 className="p-4 text-2xl md:text-3xl lg:text-[35px]">Our Services </h2>
                </div>
                <div className="border-2 border-[#9a8a78] p-4 lg:col-span-1">
                    <h3 className="text-xl font-bold mb-2">Complete Carpentry Services</h3>
                    <p className="text-sm md:text-base">At Magic Wood Work, we specialize in providing complete carpentry services to homeowners and individuals who want to enhance the appearance of their homes. Our team of experts has many years of experience in the market, ensuring high-quality woodwork and carpentry services.</p>
                </div>
                <div className="border-2 border-[#9a8a78] p-4 lg:col-span-1">
                    <h3 className="text-xl font-bold mb-2">Custom Kitchen Cabinets</h3>
                    <p className="text-sm md:text-base">One of our specialties is custom kitchen cabinet design and installation. We understand that the kitchen is the heart of the home, and we work closely with our customers to create a design that fits their style and needs.</p>
                </div>
                <div className="w-full h-64 md:h-full relative lg:col-span-1">
                    <Image 
                        src="/imagenes/servicio1.jpg"
                        alt="services"
                        layout="fill"
                        objectFit="cover"
                        className="border-2 border-[#9a8a78]"
                    />
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 w-full md:w-[90%] mx-auto">
                <div className="w-full h-64 md:h-full relative">
                    <Image 
                        src="/imagenes/servicio2.jpg"
                        alt="services"
                        layout="fill"
                        objectFit="cover"
                        className="border-2 border-[#9a8a78]"
                    />
                </div>
                <div className="border-2 border-[#9a8a78] p-4">
                    <h3 className="text-xl font-bold mb-2">Home Interior Design</h3>
                    <p className="text-sm md:text-base">Our team of experts also specializes in home interior design. We understand that every home is unique, and we work closely with our customers to create a design that reflects their style and personality.</p>
                </div>
                <div className="border-2 border-[#9a8a78] p-4">
                    <h3 className="text-xl font-bold mb-2">Bathroom Remodeling</h3>
                    <p className="text-sm md:text-base">Our bathroom remodeling services include custom design and installation of bathroom vanities, cabinets, and showers. We work closely with our customers to create a design that fits their style and needs.</p>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 w-full md:w-[90%] mx-auto">
                <div className="border-2 border-[#9a8a78] p-4">
                    <h3 className="text-2xl font-bold">Our Expertise</h3>
                </div>
                <div className="border-2 border-[#9a8a78] p-4">
                    <h3 className="text-xl font-bold mb-2">Custom Design</h3>
                    <p className="text-sm md:text-base">At Magic Wood Work, we offer custom design services to ensure that your project is unique and reflects the customer's style and personality.</p>
                </div>
                <div className="border-2 border-[#9a8a78] p-4">
                    <h3 className="text-xl font-bold mb-2">Quality Workmanship</h3>
                    <p className="text-sm md:text-base">We are committed to delivering the highest quality workmanship in every project we undertake. Our team of experts has many years of experience in the market.</p>
                </div>
                <div className="border-2 border-[#9a8a78] p-4">
                    <h3 className="text-xl font-bold mb-2">Customer Satisfaction</h3>
                    <p className="text-sm md:text-base">At Magic Wood Work, we value building trust with our customers by always delivering the best quality work. We are committed to providing excellent service and ensuring customer satisfaction.</p>
                </div>
            </section>
        </main>
    );
}