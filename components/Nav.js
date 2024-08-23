'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About Us", href: "/About" },
    { name: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? "bg-[#272627] shadow-md" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h3 className={`text-xl font-semibold ${scrolled ? "text-white" : "text-[#dad9d7]"}`}>
          Magic Wood Work
        </h3>
        
        {/* Desktop menu */}
        <ul className="hidden sm:flex space-x-4">
          {NavItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.href}
                className={`
                  ${scrolled ? "text-white" : "text-[#dad9d7]"}
                  ${pathname === item.href ? "text-[#9a8a78]" : "hover:text-[#9a8a78]"}
                  transition-colors duration-300
                `}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button 
          className="sm:hidden bg-[#9a8a78] text-white px-3 py-1 rounded text-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      
      {/* Mobile menu dropdown */}
      <div 
        className={`
          sm:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-64' : 'max-h-0'}
          ${scrolled ? "bg-[#272627]" : "bg-black bg-opacity-70"}
        `}
      >
        <div className="container mx-auto px-4 py-2">
          {NavItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              className={`
                block py-2 text-white
                ${pathname === item.href ? "text-[#9a8a78]" : "hover:text-[#9a8a78]"}
              `}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}