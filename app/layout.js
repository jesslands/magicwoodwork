// app/layout.js
import { Raleway } from "next/font/google";


import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Magic Wood Work",
  description: "Home | Magic Wood Work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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