import React from 'react';
import { FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactSection = ({className}) => {
    return (
        <section className={` w-full md:w-[90%] mx-auto md:grid md:grid-cols-3 gap-8 mt-8  max-w-6xl  pb-20 px-4 ${className}`}>
            {/* Servicios */}
            <div className="md:col-span-1 text-white p-4 sm:p-6 rounded-lg shadow-lg">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Our Services</h2>
                <div className="space-y-4 sm:space-y-6">
                    {['Painting', 'Kitchen Remodeling', 'Home Renovation'].map((service, index) => (
                        <div key={index} className="flex items-start">
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-[#9a8a78] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
            
            {/* Formulario */}
            <div className="md:col-span-1 w-full max-w-md p-4 sm:p-6 rounded-lg shadow-lg">
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full bg-transparent border-b border-gray-600 text-white focus:border-[#9a8a78] focus:outline-none py-2"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full bg-transparent border-b border-gray-600 text-white focus:border-[#9a8a78] focus:outline-none py-2"
                        />
                    </div>

                    <input
                        type="email"
                        placeholder="Email*"
                        required
                        className="w-full bg-transparent border-b border-gray-600 text-white focus:border-[#9a8a78] focus:outline-none py-2"
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="w-full bg-transparent border-b border-gray-600 text-white focus:border-[#9a8a78] focus:outline-none py-2"
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            className="w-full bg-transparent border-b border-gray-600 text-white focus:border-[#9a8a78] focus:outline-none py-2"
                        />
                    </div>

                    <textarea
                        placeholder="Message"
                        rows="4"
                        className="w-full bg-transparent border border-gray-600 text-white focus:border-[#9a8a78] focus:outline-none p-2 rounded"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-[#9a8a78] text-gray-900 py-3 rounded hover:bg-[#8a7a68] transition duration-300 font-semibold"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>

            {/* Iconos de contacto */}
            <div className="md:col-span-1 flex flex-col justify-center items-center space-y-4 p-4 sm:p-6 rounded-lg shadow-lg">
                <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-[#9a8a78] hover:text-[#8a7a68] transition duration-300">
                    <FaInstagram className="w-8 h-8 md:w-12 md:h-12" />
                </a>
                <a href="mailto:tuemail@ejemplo.com" className="text-[#9a8a78] hover:text-[#8a7a68] transition duration-300">
                    <FaEnvelope className="w-8 h-8 md:w-12 md:h-12" />
                </a>
                <a href="tel:+5517994212" className="text-[#9a8a78] hover:text-[#8a7a68] transition duration-300">
                    <FaPhone className="w-8 h-8 md:w-12 md:h-12" />
                </a>
            </div>
        </section>
    );
};

export default ContactSection;