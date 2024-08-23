import Image from "next/image";
import ContactSection from '/components/contactanos';



export default function Services() {
    return (
        <main className="px-4 md:px-0 pt-8">

            <section className="h-[75vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 w-full md:w-[90%] mx-auto">
                <div className="border-2 border-[#9a8a78]  w-full lg:col-span-1">
                    <h2 className="p-4 text-4xl font-bold md:text-3xl lg:text-[35px]">Our Services </h2>
                </div>
                <div className="border-2 border-[#9a8a78] p-4 lg:col-span-1">
                    <h3 className="text-3xl font-bold mb-2">Complete Carpentry Services</h3>
                    <p className="text-justify  text-gray-300">At Magic Wood Work, we specialize in providing complete carpentry services to homeowners and individuals who want to enhance the appearance of their homes. Our team of experts has many years of experience in the market, ensuring high-quality woodwork and carpentry services. We offer a wide range of services, including custom carpentry, woodworking, and furniture design. Our unique selling point is our ability to make your dreams come true through our exceptional craftsmanship. Trust us to deliver the best quality work and exceed your expectations. </p>
                </div>
                <div className="border-2 border-[#9a8a78] p-4 lg:col-span-1">
                    <h3 className="text-3xl font-bold mb-2">Custom Kitchen Cabinets</h3>
                    <p className="text-justify  text-gray-300">One of our specialties is custom kitchen cabinet design and installation. We understand that the kitchen is the heart of the home, and we work closely with our customers to create a design that fits their style and needs. Our team of experts will guide you through the process, from the initial consultation to the final installation, ensuring that you are satisfied with the end result.</p>
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

            <section className=" h-[75vh] grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 w-full md:w-[90%] mx-auto">
                <div className="w-full h-64 md:h-full relative lg:col-span-1">
                    <Image
                        src="/imagenes/servicio2.jpg"
                        alt="services"
                        layout="fill"
                        objectFit="cover"
                        className="border-2 border-[#9a8a78]"
                    />
                </div>
                <div className="border-2 border-[#9a8a78] p-4">
                    <h3 className="text-3xl font-bold mb-2">
                        Paint</h3>
                    <p className="text-justify  text-gray-300">
                        Paint
                        Our team of experts also specializes in home interior design. We understand that every home is unique, and we work closely with our customers to create a design that reflects their style and personality. From choosing the right colors to selecting the perfect furniture, we will transform your home into a beautiful and functional space that you will love.</p>
                </div>
                <div className="border-2 border-[#9a8a78] p-4">
                    <h3 className="text-3xl ">
                    Instalation</h3>
                    <p className="text-justify  text-gray-300 ">Our bathroom remodeling services include custom design and installation of bathroom vanities, cabinets, and showers. We work closely with our customers to create a design that fits their style and needs, ensuring that every detail is perfect. Trust us to deliver exceptional quality work and make your bathroom a beautiful and functional space.</p>
                </div>
            </section>

            <section className=" h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 w-full md:w-[90%] mx-auto">
                <div className="border-2 border-[#9a8a78] p-4">
                    <h3 className="p-4 text-2xl font-bold md:text-3xl lg:text-[35px]">
                    Our Expertise</h3>
                </div>
                <div className="border-2 border-[#9a8a78] p-4">
                    <h3 className="text-4xl font-bold mb-2">Custom Design</h3>
                    <p className="text-justify  text-gray-300">At Magic Wood Work, we offer custom design services to ensure that every project is unique and reflects the customer's style and needs. Our team of experts will work closely with you to create a design that exceeds your expectations.</p>
                </div>
                <div className="border-2 border-[#9a8a78] p-4">
                    <h3 className="text-3xl font-bold mb-2">
                    Quality Workmanship</h3>
                    <p className="text-justify  text-gray-300 ">We are committed to delivering the highest quality workmanship in every project we undertake. Our team of experts has many years of experience in the market, ensuring that every project is done with exceptional craftsmanship.</p>
                </div>
                <div className="border-2 border-[#9a8a78] p-4">
                    <h3 className="text-3xl  font-bold mb-2">
                    Customer Satisfaction</h3>
                    <p className="text-justify  text-gray-300 ">At Magic Wood Work, we value building trust with our customers and always delivering the best quality work. We are committed to providing excellent service and ensuring customer satisfaction. Trust us to make your dreams come true through our exceptional craftsmanship.</p>
                </div>
               
            </section>
            <ContactSection />

        </main>
    );
}