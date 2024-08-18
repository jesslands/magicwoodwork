'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 flex justify-between z-20 p-4 transition-all duration-300 ${
      scrolled ? "bg-[#272627] shadow-md" : "bg-transparent"
    }`}>
      <h3 className={scrolled ? "text-white" : "text-[#dad9d7]"}>Magic Wood Work</h3>
      <ul className="flex space-x-4">
        {NavItems.map((item) => (
          <li key={item.name}>
            <Link 
              href={item.href}
              className={`
                ${scrolled ? "text-white" : "text-white"}
                ${pathname === item.href ? "text-[#9a8a78]" : "hover:text-[#9c8e80]"}
                transition-colors duration-300
              `}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}