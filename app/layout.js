import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Magic Wood Work",
  description: "Home | Magic Wood Work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <div className="flex-grow">
          <Nav />
          {children}
        </div>

        <footer className="mt-auto">
          <section className="grid grid-cols-3 gap-5 w-[90%] mx-auto py-8">
            <div>
              <img className="" src="/imagenes/logo1.png" alt="services" />
            </div>

            <div className="">
              <div className="mt-20 text-center ">
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

            <div className="text-white p-4 rounded-lg m-auto">
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
        </footer>
      </body>
    </html>
  );
}