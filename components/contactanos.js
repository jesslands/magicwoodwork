import React from 'react';
import { FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactSection = () => {
    return (
        <section className="flex flex-col md:flex-row justify-center items-start gap-8 mt-8 w-full max-w-5xl mx-auto pb-20 px-4">
            {/* Formulario */}
            <div className="w-full md:w-1/2 max-w-md p-4 sm:p-6 rounded-lg shadow-lg">
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 ">
                        
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
            <div className="flex flex-row md:flex-col justify-center items-center space-x-4 md:space-x-0 md:space-y-4 p-4 sm:p-6 rounded-lg shadow-lg">
                <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-[#9a8a78] hover:text-[#8a7a68] transition duration-300">
                    <FaInstagram size={100} />
                </a>
                <a href="mailto:tuemail@ejemplo.com" className="text-[#9a8a78] hover:text-[#8a7a68] transition duration-300">
                    <FaEnvelope size={100} />
                </a>
                <a href="tel:+1234567890" className="text-[#9a8a78] hover:text-[#8a7a68] transition duration-300">
                    <FaPhone size={100} />
                </a>
            </div>
        </section>
    );
};

export default ContactSection;