import Image from "next/image";

export const metadata = {
    title: 'Contact Us for Expert Carpentry Services',
    description: 'Get in touch with Magic Wood Work for professional carpentry services, custom woodworking, and home renovations in New Jersey.',
    openGraph: {
      title: 'Contact Magic Wood Work | Expert Carpentry Services',
      description: 'Contact us for professional carpentry services, custom woodworking, and home renovations in New Jersey.',
    }
  };


export default function Contact() {
    return (
        <main className="px-4 sm:px-6 lg:px-8 pt-8 min-h-screen">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-white">Contact Us</h1>
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 w-full max-w-6xl mx-auto pb-20">
                {/* Formulario */}
                <div className="lg:col-span-2 p-4 sm:p-6 rounded-lg shadow-lg">
                    <form className="space-y-4 sm:space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div>
                                <label htmlFor="firstName" className="block text-[#ac9172] text-sm mb-2">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="w-full bg-transparent border-b border-gray-600 text-white focus:border-[#9a8a78] focus:outline-none py-2"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-[#ac9172] text-sm mb-2">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="w-full bg-transparent border-b border-gray-600 text-white focus:border-[#9a8a78] focus:outline-none py-2"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-[#ac9172] text-sm mb-2">Email*</label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full bg-transparent border-b border-gray-600 text-white focus:border-[#9a8a78] focus:outline-none py-2"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div>
                                <label htmlFor="phone" className="block text-[#ac9172] text-sm mb-2">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full bg-transparent border-b border-gray-600 text-white focus:border-[#9a8a78] focus:outline-none py-2"
                                />
                            </div>
                            <div>
                                <label htmlFor="address" className="block text-[#ac9172] text-sm mb-2">Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    className="w-full bg-transparent border-b border-gray-600 text-white focus:border-[#9a8a78] focus:outline-none py-2"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-[#ac9172] text-sm mb-2">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full bg-transparent border border-gray-600 text-white focus:border-[#9a8a78] focus:outline-none p-2 rounded"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#ac9172] text-gray-900 py-3 rounded hover:bg-[#8a7a68] transition duration-300 font-semibold"
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>

                {/* Información de servicios e imagen */}
                <div className="space-y-8">
                    <div className=" text-white p-4 sm:p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Our Services</h2>
                        <div className="space-y-4 sm:space-y-6">
                            {['Painting', 'Kitchen Remodeling', 'Home Renovation'].map((service, index) => (
                                <div key={index} className="flex items-start">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-[#ac9172] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <div>
                                        <h3 className="text-base sm:text-lg font-semibold mb-1">{service}</h3>
                                        <p className="text-xs sm:text-sm text-gray-300">Expert {service.toLowerCase()} services to transform your living spaces.</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className=" w-full h-48 sm:h-64 relative rounded-lg overflow-hidden">
                        <img 
                            src="/imagenes/servicio2.jpg"
                            alt="Magic Wood Work Service"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}