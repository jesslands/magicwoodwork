// app/layout.js
import { Raleway } from "next/font/google";


import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: 'Expert Carpentry & Woodworking Services in New Jersey',
  description: 'Magic Wood Work offers premium carpentry services, custom kitchen remodeling, and expert woodworking solutions in New Jersey. Transform your space with our craftsmanship.',
  alternates: {
    canonical: 'https://magicwoodwork.us'
  },
  openGraph: {
    title: 'Magic Wood Work - Premium Carpentry Services in New Jersey',
    description: 'Transform your space with expert carpentry, custom kitchen remodeling, and professional woodworking services.',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= {inter.className}>
        <div className="flex flex-col min-h-screen">
          <Nav />
          <main className="flex-grow">
            {children}
            
            
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}