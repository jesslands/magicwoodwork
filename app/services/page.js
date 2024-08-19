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
                    <h3>Home Interior Design</h3>
                    <p>
                        Our team of experts also specializes in home interior design. We understand that every home is unique, and we work closely with our customers to create a design that reflects their style and personality. From choosing the right colors to selecting the perfect furniture, we will transform your home into a beautiful and functional space that you will love.</p>
                </div>
                <div className="border border-2 border-[#9a8a78] p-5">
                    <h3>Bathroom Remodeling</h3>
                    <p>Our bathroom remodeling services include custom design and installation of bathroom vanities, cabinets, and showers. We work closely with our customers to create a design that fits their style and needs, ensuring that every detail is perfect. Trust us to deliver exceptional quality work and make your bathroom a beautiful and functional space.</p>
                </div>
            </section>

            <secton className="grid grid-cols-4 gap-5 mt-12 w-[90%] mx-auto">
                <div className="border border-2 border-[#9a8a78] p-5">
                    <h3>Our Expertise</h3>


                </div>
                <div className="border border-2 border-[#9a8a78] p-5">
                    <h3>Custom Design</h3>
                    <p>At Magic Wood Work, we offer custom design services to ensure that your project is unique and reflects the customer's style and personality. Our team of experts will work closely with you to create a design that exceeds your expectations.</p>
                </div>
                <div className="border border-2 border-[#9a8a78] p-5">
                    <h3>Quality Workmanship</h3>
                    <p>We are committed to delivering the highest quality workmanship in every project we undertake. Our team of experts has many years of experience in the market, ensuring that every project is completed with exceptional craftsmanship.</p>
                </div>
                <div className="border border-2 border-[#9a8a78] p-5">
                    <h3>Customer Satisfaction</h3>
                    <p>At Magic Wood Work, we value building trust with our customers by always delivering the best quality work. We are committed to providing excellent service and ensuring customer satisfaction. Trust us to make your dreams come true through our exceptional craftsmanship.</p>

                </div>
            </secton>

            <section className="grid grid-cols-3 gap-5 mt-12 w-[90%] mx-auto">
                <div>
                    <img className="" src="/imagenes/logo1.png" alt="services" /></div>
                <div></div>
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
