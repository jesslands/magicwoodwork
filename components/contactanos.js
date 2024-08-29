import React from 'react';
import { FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactSection = ({className}) => {
    return (
        <section className={`w-full px-4 md:w-[90%] mx-auto flex flex-col md:grid md:grid-cols-3 gap-8 mt-8 max-w-6xl pb-20 ${className}`}>
            {/* Servicios */}
            <div className="md:col-span-1 text-white p-4 rounded-lg shadow-lg">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">Our Services</h2>
                <div className="space-y-4">
                    {['Painting', 'Kitchen Remodeling', 'Home Renovation'].map((service, index) => (
                        <div key={index} className="flex items-start">
                            <svg className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-[#ac9172] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div>
                                <h3 className="text-base md:text-lg font-semibold mb-1">{service}</h3>
                                <p className="text-xs md:text-sm text-gray-300">Expert {service.toLowerCase()} services to transform your living spaces.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Formulario */}
            <div className="md:col-span-1 w-full max-w-md mx-auto p-4 rounded-lg shadow-lg">
                <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full bg-transparent border-b border-gray-600 text-white focus:border-[#ac9172] focus:outline-none py-2"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full bg-transparent border-b border-gray-600 text-white focus:border-[#ac9172] focus:outline-none py-2"
                        />
                    </div>

                    <input
                        type="email"
                        placeholder="Email*"
                        required
                        className="w-full bg-transparent border-b border-gray-600 text-white focus:border-[#ac9172] focus:outline-none py-2"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="w-full bg-transparent border-b border-gray-600 text-white focus:border-[#ac9172] focus:outline-none py-2"
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            className="w-full bg-transparent border-b border-gray-600 text-white focus:border-[#ac9172] focus:outline-none py-2"
                        />
                    </div>

                    <textarea
                        placeholder="Message"
                        rows="4"
                        className="w-full bg-transparent border border-gray-600 text-white focus:border-[#9a8a78] focus:outline-none p-2 rounded"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-[#ac9172] text-gray-900 py-3 rounded hover:bg-[#ac9172] transition duration-300 font-semibold"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>

            {/* Iconos de contacto */}
            <div className="md:col-span-1 flex justify-center items-center space-x-4 md:space-x-0 md:space-y-4 md:flex-col p-4 rounded-lg shadow-lg">
                <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-[#ac9172] hover:text-[#8a7a68] transition duration-300">
                    <FaInstagram className="w-8 h-8 md:w-12 md:h-12" />
                </a>
                <a href="mailto:tuemail@ejemplo.com" className="text-[#ac9172] hover:text-[#8a7a68] transition duration-300">
                    <FaEnvelope className="w-8 h-8 md:w-12 md:h-12" />
                </a>
                <a href="tel:+1 862 282 6462" className="text-[#ac9172] hover:text-[#8a7a68] transition duration-300">
                    <FaPhone className="w-8 h-8 md:w-12 md:h-12" />
                </a>
            </div>
        </section>
    );
};

export default ContactSection;