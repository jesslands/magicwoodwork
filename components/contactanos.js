import React from 'react';
import { FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactSection = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 w-full max-w-6xl mx-auto pb-20">
            {/* Formulario */}
            <div className="lg:col-span-2 p-4 sm:p-6 rounded-lg shadow-lg">
                <form className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                            <label htmlFor="firstName" className="block text-[#9a8a78] text-sm mb-2">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                className="w-full bg-transparent border-b border-gray-600 text-white focus:border-[#9a8a78] focus:outline-none py-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-[#9a8a78] text-sm mb-2">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                className="w-full bg-transparent border-b border-gray-600 text-white focus:border-[#9a8a78] focus:outline-none py-2"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-[#9a8a78] text-sm mb-2">Email*</label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full bg-transparent border-b border-gray-600 text-white focus:border-[#9a8a78] focus:outline-none py-2"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                            <label htmlFor="phone" className="block text-[#9a8a78] text-sm mb-2">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full bg-transparent border-b border-gray-600 text-white focus:border-[#9a8a78] focus:outline-none py-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-[#9a8a78] text-sm mb-2">Address</label>
                            <input
                                type="text"
                                id="address"
                                className="w-full bg-transparent border-b border-gray-600 text-white focus:border-[#9a8a78] focus:outline-none py-2"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-[#9a8a78] text-sm mb-2">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full bg-transparent border border-gray-600 text-white focus:border-[#9a8a78] focus:outline-none p-2 rounded"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#9a8a78] text-gray-900 py-3 rounded hover:bg-[#8a7a68] transition duration-300 font-semibold"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>

            {/* Iconos de contacto */}
            <div className="flex flex-col justify-center items-center space-y-6 p-4 sm:p-6 rounded-lg shadow-lg">
                <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-[#9a8a78] hover:text-[#8a7a68] transition duration-300">
                    <FaInstagram size={40} />
                </a>
                <a href="mailto:tuemail@ejemplo.com" className="text-[#9a8a78] hover:text-[#8a7a68] transition duration-300">
                    <FaEnvelope size={40} />
                </a>
                <a href="tel:+1234567890" className="text-[#9a8a78] hover:text-[#8a7a68] transition duration-300">
                    <FaPhone size={40} />
                </a>
            </div>
        </section>
    );
};

export default ContactSection;