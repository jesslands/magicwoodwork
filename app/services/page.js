import Image from "next/image";

export default function Services() {
    return (
        <main>

            <section className="grid grid-cols-4 gap-5 mt-12 w-[90%] mx-auto">
                <div className="bg-[#9a8a78]">
                    <h2 className="p-5 text-[35px]">Our Services </h2>

                </div>
                <div className="border border-2 border-[#9a8a78] p-5">
                    <h3>Complete Carpentry Services</h3>
                    <p>At Magic Wood Work, we specialize in providing complete carpentry services to homeowners and individuals who want to enhance the appearance of their homes. Our team of experts has many years of experience in the market, ensuring high-quality woodwork and carpentry services. We offer a wide range of services, including custom carpentry, woodworking, and furniture design. Our unique selling point is our ability to make your dreams come true through our exceptional craftsmanship. Trust us to deliver the best quality work and exceed your expectations.</p>

                </div>
                <div className="border border-2 border-[#9a8a78] p-5">
                    <h3>Custom Kitchen Cabinets</h3>
                    <p>One of our specialties is custom kitchen cabinet design and installation. We understand that the kitchen is the heart of the home, and we work closely with our customers to create a design that fits their style and needs. Our team of experts will guide you through the process, from the initial consultation to the final installation, ensuring that you are satisfied with the end result.</p>

                </div>
                <div>
                    <img className="border border-2 border-[#9a8a78]" src="https://static.wixstatic.com/media/ea26fd_cef121ad11c14de98fb8f2f98d403157~mv2_d_6720_4480_s_4_2.jpg/v1/fill/w_380,h_918,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea26fd_cef121ad11c14de98fb8f2f98d403157~mv2_d_6720_4480_s_4_2.jpg" alt="services" />
                </div>
            </section>
            <section className="grid grid-cols-3 gap-5 mt-12 w-[90%] mx-auto">
                <div>
                    <img className="border border-2 border-[#9a8a78]" src="https://static.wixstatic.com/media/ea26fd_167e5a9e6b9b4ceca28872ae871f689d~mv2_d_6720_4480_s_4_2.jpg/v1/fill/w_405,h_788,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea26fd_167e5a9e6b9b4ceca28872ae871f689d~mv2_d_6720_4480_s_4_2.jpg" alt="services" />

                </div>

                <div className="border border-2 border-[#9a8a78] p-5">
                    <h3 className="p-5 text-[25px] font-bold">Home Interior Design</h3>
                    <p>
                        Our team of experts also specializes in home interior design. We understand that every home is unique, and we work closely with our customers to create a design that reflects their style and personality. From choosing the right colors to selecting the perfect furniture, we will transform your home into a beautiful and functional space that you will love.</p>
                </div>
                <div className="border border-2 border-[#9a8a78] p-5">
                    <h3 className="p-5 text-[25px] font-bold">Bathroom Remodeling</h3>
                    <p>Our bathroom remodeling services include custom design and installation of bathroom vanities, cabinets, and showers. We work closely with our customers to create a design that fits their style and needs, ensuring that every detail is perfect. Trust us to deliver exceptional quality work and make your bathroom a beautiful and functional space.</p>
                </div>
            </section>

            <secton className="grid grid-cols-4 gap-5 mt-12 w-[90%] mx-auto">
                <div className="border border-2 border-[#9a8a78] p-5">
                    <h3 className="p-5 text-[35px] font-bold">Our Expertise</h3>


                </div>
                <div className="border border-2 border-[#9a8a78] p-5">
                    <h3 className="p-5 text-[25px] font-bold">Custom Design</h3>
                    <p>At Magic Wood Work, we offer custom design services to ensure that your project is unique and reflects the customer's style and personality. Our team of experts will work closely with you to create a design that exceeds your expectations.</p>
                </div>
                <div className="border border-2 border-[#9a8a78] p-5">
                    <h3 className="p-5 text-[25px] font-bold">Quality Workmanship</h3>
                    <p>We are committed to delivering the highest quality workmanship in every project we undertake. Our team of experts has many years of experience in the market, ensuring that every project is completed with exceptional craftsmanship.</p>
                </div>
                <div className="border border-2 border-[#9a8a78] p-5">
                    <h3 className="p-5 text-[25px] font-bold">Customer Satisfaction</h3>
                    <p>At Magic Wood Work, we value building trust with our customers by always delivering the best quality work. We are committed to providing excellent service and ensuring customer satisfaction. Trust us to make your dreams come true through our exceptional craftsmanship.</p>

                </div>
            </secton>

            <section className="grid grid-cols-3 gap-5 mt-12 w-[90%] mx-auto">
                <div>
                    <img className="" src="/imagenes/logo1.png" alt="services" />
                </div>


                <div className="mt-36">
                <div className="mt-4 text-center ">
                    {/* Icono de Instagram con enlace */}
                    <div className="mb-4">
                        <a href="https://www.instagram.com/magicwoodwork" target="_blank" rel="noopener noreferrer" className="inline-block">
                            <svg
                                className="w-8 h-8"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                    </div>

                    {/* Texto de derechos de autor */}
                    <p className="text-sm mb-1">
                        © 2021 by Magic Wood Work. All rights reserved.
                    </p>

                    {/* Powered by Koreforge */}
                    <p className="text-xs text-gray-400">
                        Powered by Koreforge
                    </p>
                </div>
                </div>
                <div className=" text-white p-4 rounded-lg m-auto">
                    <div className="flex items-center mb-2">
                        <div className="bg-gray-700 p-2 rounded-full mr-3">
                            <svg
                                className="w-6 h-6"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M13 20v-5h-2v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-7.59l-.3.3a1 1 0 11-1.4-1.42l9-9a1 1 0 011.4 0l9 9a1 1 0 01-1.4 1.42l-.3-.3V20a2 2 0 01-2 2h-3a2 2 0 01-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 012 2v5h3z" />
                            </svg>
                        </div>
                        <span>Bay Lake, FL, USA</span>
                    </div>

                    <div className="flex items-center mb-2">
                        <div className="bg-gray-700 p-2 rounded-full mr-3">
                            <svg
                                className="w-6 h-6"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5-8-5h16m0 12H4V8l8 5 8-5v10z" />
                            </svg>
                        </div>
                        <span>Support@MagicWoodWorking.com</span>
                    </div>

                    <div className="flex items-center">
                        <div className="bg-gray-700 p-2 rounded-full mr-3">
                            <svg
                                className="w-6 h-6"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                            >
                                <path d="M11 1a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V2a1 1 0 011-1h6zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z" />
                                <path d="M8 14a1 1 0 100-2 1 1 0 000 2z" />
                            </svg>
                        </div>
                        <span>+1 (123) 456 7890</span>
                    </div>
                </div>
            </section>


        </main>
    );
}
